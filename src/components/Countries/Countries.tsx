import React from 'react';
import useGetAllCountries from '../../api/useGetAllCountries';
import { AnimatedEntrance } from '../../styles/Animations.styled';
import Country from '../CountryCard';
import { CountriesList, CountriesWrapper } from './Countries.styled';

const CountriesFilters = () => {
  return (
    <div>
      <p>Order By</p>
      <p>Show Region or All</p>
    </div>
  );
};

const Countries = () => {
  const { countries, countriesLoading, countriesError } =
    useGetAllCountries();

  return (
    <CountriesWrapper>
      {countriesLoading && <p>Loading...</p>}
      {countriesError && <p>An error has occured.</p>}
      <CountriesFilters />
      <CountriesList>
        {!countriesLoading &&
          countries &&
          countries.map((country, index) => {
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
    </CountriesWrapper>
  );
};

export default Countries;
