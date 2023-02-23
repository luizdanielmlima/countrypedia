import React, { useCallback, useMemo, useState } from 'react';
import useGetAllCountries from '../../api/useGetAllCountries';
import { CountryType } from '../../models/Country';
import { AnimatedEntrance } from '../../styles/Animations.styled';
import Country from '../CountryCard';
import { CountriesList, CountriesWrapper } from './Countries.styled';
import Filters from './Filters';

const Countries = () => {
  const pageSize = 32;
  const { countries, countriesLoading, countriesError } =
    useGetAllCountries();

  const [selectedOrderBy, setSelectedOrderBy] =
    useState('commonName');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // const handleRegionSelected = useCallback((selection: string) => {

  // },
  // []);

  // const handleOrderBySelected = useCallback((selection: string) => {},
  // []);

  const countriesOnTheList = useMemo(() => {
    if (countries && countries.length > 0) {
      let filteredData = [...countries].map((country) => {
        return {
          ...country,
          commonName: country.name.common,
        };
      });
      if (selectedRegion !== 'all') {
        filteredData = filteredData.filter(
          (country) => country.region === selectedRegion,
        );
      }
      if (selectedOrderBy) {
        filteredData = filteredData.sort(
          (a: CountryType, b: CountryType) => {
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
          },
        );
      }
      return filteredData.slice(0, pageSize);
    }
  }, [countries, selectedOrderBy, selectedRegion]);

  return (
    <CountriesWrapper>
      {countriesLoading && <p>Loading...</p>}
      {countriesError && <p>An error has occured.</p>}
      {!countriesLoading && countriesOnTheList && (
        <>
          <Filters
            region={selectedRegion}
            orderBy={selectedOrderBy}
            onRegionSelected={(sel) => setSelectedRegion(sel)}
            onOrderBySelected={(sel) => setSelectedOrderBy(sel)}
          />
          <CountriesList>
            {countriesOnTheList.map((country, index) => {
              return (
                <AnimatedEntrance
                  delay={index / 10}
                  key={`${index}_${country.name}_${country.capital}`}
                >
                  <Country
                    country={country}
                    loading={countriesLoading}
                  />
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
