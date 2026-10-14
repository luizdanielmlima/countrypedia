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

  const [pageSize] = useState(30);
  const [pageNumber, setPageNumber] = useState(1);

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

  const filteredCountries = useMemo(() => {
    if (fixCountries.length === 0) {
      return [];
    }
    let filteredData = fixCountries.map((country) => {
      return {
        ...country,
        commonName: country.names.common,
        areaKm: country.area.kilometers,
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
    return filteredData;
  }, [fixCountries, selectedOrderBy, selectedRegion]);

  // == PAGINATION (Start)
  const totalItens = filteredCountries.length;
  const numOfPages = Math.ceil(totalItens / pageSize);

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

  const countriesOnThePage = useMemo(
    () =>
      filteredCountries.slice(
        (pageNumber - 1) * pageSize,
        pageNumber * pageSize,
      ),
    [filteredCountries, pageNumber, pageSize],
  );

  // select the first country whenever the visible page changes
  useEffect(() => {
    if (countriesOnThePage.length > 0) {
      dispatch(countriesActions.setCountry(countriesOnThePage[0]));
    }
  }, [countriesOnThePage, dispatch]);

  const handleRegionSelected = (region: string) => {
    setSelectedRegion(region);
    setPageNumber(1);
  };

  const handleOrderBySelected = (orderBy: string) => {
    setSelectedOrderBy(orderBy);
    setPageNumber(1);
  };

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
              onRegionSelected={handleRegionSelected}
              onOrderBySelected={handleOrderBySelected}
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
                <AnimatedEntrance delay={index / 10} key={country.uuid}>
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
