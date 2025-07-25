import React, { useEffect, useMemo, useState } from 'react';

import { useDispatch } from 'react-redux';

import { useGetAllCountries } from '../../api/useGetAllCountries';
import { CountryType } from '../../models/Country';
import { countriesActions } from '../../store/countries';
import { AnimatedEntrance } from '../../styles/Animations.styled';
import LoadingFeedback from '../LoadingFeedback/LoadingFeedback';
import {
  CountriesList,
  CountriesListHeader,
  CountriesWrapper,
  LoadingWrapper,
} from './Countries.styled';
import Filters from './Filters';
import Pagination from './Pagination.tsx/Pagination';
import CountryCard from '../CountryCard';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries, countriesLoading, countriesError } = useGetAllCountries();

  // if (countries) {
  //   console.log('countries: ', countries);
  //   const capitals = countries
  //     .filter(
  //       (item) =>
  //         item.capital?.length > 0 &&
  //         item.capital[0] &&
  //         item.capitalInfo?.latlng?.length > 0 &&
  //         item.population > 100000,
  //     )
  //     .sort((a, b) => {
  //       if (b.population === a.population) {
  //         return a.name.common.localeCompare(b.name.common, 'en', {
  //           sensitivity: 'base',
  //         });
  //       }
  //       return b.population - a.population;
  //     })
  //     .map((ctry, index) => {
  //       return {
  //         id: index + 1,
  //         name: ctry.capital?.length > 0 ? ctry.capital[0] : '-',
  //         country: ctry.name?.common,
  //         countryPopulation: ctry.population,
  //         lat: ctry.capitalInfo.latlng[0],
  //         lon: ctry.capitalInfo.latlng[1],
  //         flag: ctry.flags.png,
  //       };
  //     });
  //   console.log('capitals: ', JSON.stringify(capitals));
  // }

  const [pageSize] = useState(30);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalItens, setTotalItens] = useState(0);

  const [selectedOrderBy, setSelectedOrderBy] = useState('population');
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    if (countries && countries.length > 0) {
      dispatch(countriesActions.setCountries(countries));
    }
  }, [countries, dispatch]);

  // NO COUNTRIES in Antartica ;)
  const fixCountries = useMemo(() => {
    if (countries) {
      return [...countries].filter((country) => country.region !== 'Antarctic');
    }
    return [];
  }, [countries]);

  // == PAGINATION (Start)
  useEffect(() => {
    setPageNumber(1);
  }, [totalItens]);

  const numOfPages = useMemo(() => {
    const pages = Math.ceil(totalItens / pageSize);
    return pages;
  }, [pageSize, totalItens]);

  const onPaginationAction = (action: string) => {
    if (action === 'first') {
      setPageNumber(1);
    }
    if (action === 'previous') {
      if (pageNumber !== 1) {
        setPageNumber((prevState) => prevState - 1);
      }
    }
    if (action === 'next') {
      if (pageNumber !== numOfPages) {
        setPageNumber((prevState) => prevState + 1);
      }
    }
    if (action === 'last') {
      setPageNumber(numOfPages);
    }
  };
  // == PAGINATION (End)

  const filteredCountries = useMemo(() => {
    if (fixCountries && fixCountries.length > 0) {
      let filteredData = [...fixCountries].map((country) => {
        return {
          ...country,
          commonName: country.name.common,
        };
      });
      if (selectedRegion !== 'all') {
        filteredData = filteredData.filter(
          (country) => country.region && country.region === selectedRegion,
        );
      }
      if (selectedOrderBy) {
        filteredData = filteredData.sort((a: CountryType, b: CountryType) => {
          if (
            a[selectedOrderBy as keyof CountryType] <
            b[selectedOrderBy as keyof CountryType]
          ) {
            return selectedOrderBy !== 'commonName' ? 1 : -1;
          }

          if (
            a[selectedOrderBy as keyof CountryType] >
            b[selectedOrderBy as keyof CountryType]
          ) {
            return selectedOrderBy !== 'commonName' ? -1 : 1;
          }

          return 0;
        });
      }
      setPageNumber(1);
      setTotalItens(filteredData.length);
      return filteredData;
    }
  }, [fixCountries, selectedOrderBy, selectedRegion]);

  const countriesOnThePage = useMemo(() => {
    if (filteredCountries && filteredCountries.length > 0) {
      const data = filteredCountries.slice(
        (pageNumber - 1) * pageSize,
        pageNumber * pageSize,
      );
      dispatch(countriesActions.setCountry(data[0]));
      return data;
    }
    return [];
  }, [dispatch, filteredCountries, pageNumber, pageSize]);

  return (
    <CountriesWrapper>
      {countriesLoading && (
        <LoadingWrapper>
          <LoadingFeedback />
        </LoadingWrapper>
      )}
      {countriesError && <p>An error has occured.</p>}
      {!countriesLoading && countriesOnThePage && (
        <>
          <CountriesListHeader>
            <Filters
              region={selectedRegion}
              orderBy={selectedOrderBy}
              onRegionSelected={(sel) => setSelectedRegion(sel)}
              onOrderBySelected={(sel) => setSelectedOrderBy(sel)}
            />
            <Pagination
              pageNumber={pageNumber}
              numOfPages={numOfPages}
              pageItens={totalItens}
              handlePaginationAction={(action: string) =>
                onPaginationAction(action)
              }
            />
          </CountriesListHeader>
          <CountriesList>
            {countriesOnThePage.map((country, index) => {
              return (
                <AnimatedEntrance
                  delay={index / 10}
                  key={`${index}_${country.name}_${country.capital}`}
                >
                  <CountryCard country={country} />
                </AnimatedEntrance>
              );
            })}
          </CountriesList>
        </>
      )}
    </CountriesWrapper>
  );
};

export default Countries;
