import React, { useMemo } from 'react';
import useGetAllCountries from '../../api/useGetAllCountries';
import { AnimatedEntrance } from '../../styles/Animations.styled';
import Country from '../CountryCard';
import { CountriesList, CountriesWrapper } from './Countries.styled';
import Filters from './Filters';

const Countries = () => {
  const pageSize = 16;
  const { countries, countriesLoading, countriesError } =
    useGetAllCountries();

  const countriesOnTheList = useMemo(() => {
    if (countries && countries.length > 0) {
      return countries.slice(0, pageSize);
    }
  }, [countries]);

  return (
    <CountriesWrapper>
      {countriesLoading && <p>Loading...</p>}
      {countriesError && <p>An error has occured.</p>}
      {!countriesLoading && countriesOnTheList && (
        <>
          <Filters />
          <CountriesList>
            {countriesOnTheList.map((country, index) => {
              return (
                <>
                  <AnimatedEntrance
                    delay={index / 10}
                    key={`${index}_${country.name}_${country.capital}`}
                  >
                    <Country
                      country={country}
                      loading={countriesLoading}
                      key={`${index}_${country.name}_${country.capital}`}
                    />
                  </AnimatedEntrance>
                </>
              );
            })}
          </CountriesList>
        </>
      )}
    </CountriesWrapper>
  );
};

export default Countries;
