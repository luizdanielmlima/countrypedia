import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CountryCardFlag } from '../CountryCard/CountryCard.styled';
import { CountryContainer, FlagMapWrapper } from './Country.styled';

const Country = () => {
  const country = useSelector(
    (state: RootState) => state.countries.country,
  );
  return (
    <CountryContainer>
      {country && (
        <>
          <h1>{country.name.common}</h1>
          <FlagMapWrapper>
            <CountryCardFlag
              loading="lazy"
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
          </FlagMapWrapper>
          <p>Population: {country.population}</p>
          <p>
            Capital:{' '}
            {country.capital.length > 0 && country.capital[0]}
          </p>
        </>
      )}
    </CountryContainer>
  );
};

export default Country;
