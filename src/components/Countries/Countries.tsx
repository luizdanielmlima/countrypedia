import React from 'react';
import useGetAllCountries from '../../api/useGetAllCountries';
import Country from '../CountryCard';
import { CountriesWrapper } from './Countries.styled';

const Countries = () => {
  const { countries, countriesLoading, countriesError } =
    useGetAllCountries();

  console.log('countries: ', countries);

  return (
    <CountriesWrapper>
      {countriesLoading && <p>Loading...</p>}
      {countriesError && <p>An error has occured.</p>}
      {!countriesLoading &&
        countries &&
        countries.map((country) => {
          return (
            <Country country={country} loading={countriesLoading} />
          );
        })}
    </CountriesWrapper>
  );
};

export default Countries;
