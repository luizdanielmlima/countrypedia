import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../store';
import { countriesActions } from '../../../store/countries';

export const BorderTag = styled.div`
  cursor: pointer;
  margin-top: ${(props) => props.theme.spacings.xxSmall};
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primaryVariant};
  padding: ${({ theme }) =>
    `${theme.spacings.xxSmall} ${theme.spacings.xSmall}`};
  border-radius: ${(props) => props.theme.borderRadius.small};

  p {
    font-size: ${(props) => props.theme.fontSizes.xSmall} !important;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryVariant};
    color: ${(props) => props.theme.colors.surface};
  }
`;

export const CountryBordersWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${BorderTag}:not(:last-child) {
    margin-right: ${(props) => props.theme.spacings.xSmall};
  }
`;

const CountryBorders: FC<{ borders: string[] }> = ({ borders }) => {
  const countries = useSelector(
    (state: RootState) => state.countries.countries,
  );
  const dispatch = useDispatch();

  const handleSelectedCountry = useCallback(
    (countryCode: string) => {
      if (!countries || countries?.length === 0) return null;

      const foundCountry = countries?.find(
        (country) =>
          country.cioc === countryCode ||
          country.cca2 === countryCode ||
          country.cca3 === countryCode,
      );
      console.log('foundCountry: ', foundCountry);

      if (foundCountry) {
        dispatch(countriesActions.setCountry(foundCountry));
      }
    },
    [countries, dispatch],
  );

  return (
    <CountryBordersWrapper>
      {borders &&
        borders.map((country) => {
          return (
            <BorderTag
              key={country}
              onClick={() => handleSelectedCountry(country)}
            >
              <p>{country}</p>
            </BorderTag>
          );
        })}
    </CountryBordersWrapper>
  );
};

export default CountryBorders;
