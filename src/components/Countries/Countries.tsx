import React from 'react';
import useGetAllCountries from '../../api/useGetAllCountries';
import { AnimatedEntrance } from '../../styles/Animations.styled';
import Country from '../CountryCard';
import { CountriesWrapper } from './Countries.styled';

const Countries = () => {
  const { countries, countriesLoading, countriesError } =
    useGetAllCountries();

  return (
    <CountriesWrapper>
      {countriesLoading && <p>Loading...</p>}
      {countriesError && <p>An error has occured.</p>}
      {!countriesLoading &&
        countries &&
        countries.map((country, index) => {
          return (
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
          );
        })}
    </CountriesWrapper>
  );
};

export default Countries;
