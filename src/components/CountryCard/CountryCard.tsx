import React, { FC, memo, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CountryType } from '../../models/Country';
import { formatNumber } from '../../utils/formatNumber';
import {
  CountryCardFlag,
  CountryCardFlagWrapper,
  CountryCardFooter,
  CountryCardFooterIcon,
  CountryCardHeader,
  CountryCardRegion,
  CountryCardTitle,
  CountryCardWrapper,
} from './CountryCard.styled';
import { countriesActions } from '../../store/countries';
import { RootState } from '../../store';

const CountryCard: FC<{ country: CountryType }> = ({ country }) => {
  const dispatch = useDispatch();
  const currentCountry = useSelector(
    (state: RootState) => state.countries.country,
  );

  const isSelected = useMemo(() => {
    if (currentCountry) {
      return currentCountry.codes.alpha_2 === country.codes.alpha_2;
    }
    return false;
  }, [country.codes.alpha_2, currentCountry]);

  const handleClickCountry = () => {
    dispatch(countriesActions.setCountry(country));
  };

  const getFontSize = useMemo(() => {
    const nameLength = country.names.common.length;
    if (nameLength > 24) {
      return '0.65rem';
    }
    if (nameLength > 20) {
      return '0.7rem';
    }
    if (nameLength > 14) {
      return '0.75rem';
    }
    return '1rem';
  }, [country.names.common.length]);

  return (
    <CountryCardWrapper
      key={country.uuid}
      onClick={handleClickCountry}
      selected={isSelected}
    >
      {country && (
        <>
          <CountryCardHeader>
            <CountryCardTitle fontSize={getFontSize}>
              {country.names.common.toUpperCase()}
            </CountryCardTitle>
            {country.region[0] && (
              <CountryCardRegion>
                {country.region.toUpperCase()}
              </CountryCardRegion>
            )}
          </CountryCardHeader>
          <CountryCardFlagWrapper selected={isSelected}>
            <CountryCardFlag
              loading="lazy"
              width={120}
              src={country.flag.url_png ?? ''}
              alt={`${country.names.common ?? 'Unknown'} flag`}
            />
          </CountryCardFlagWrapper>

          <CountryCardFooter>
            <CountryCardFooterIcon />
            <p>{formatNumber(country.population)}</p>
          </CountryCardFooter>
        </>
      )}
    </CountryCardWrapper>
  );
};

export default memo(CountryCard);
