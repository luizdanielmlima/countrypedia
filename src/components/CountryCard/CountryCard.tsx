import React, { FC, useMemo } from 'react';

import { useDispatch } from 'react-redux';

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

const CountryCard: FC<{ loading: boolean; country: CountryType }> = ({
  loading,
  country,
}) => {
  const dispatch = useDispatch();

  const handleClickCountry = () => {
    dispatch(countriesActions.setCountry(country));
  };

  const getFontSize = useMemo(() => {
    if (country.name.common.length > 24) {
      return '0.65rem';
    }
    if (country.name.common.length > 20) {
      return '0.7rem';
    }
    if (country.name.common.length > 14) {
      return '0.75rem';
    }
    return '1rem';
  }, [country.name.common.length]);

  return (
    <CountryCardWrapper
      key={`${country.name.common}_${country.capital}`}
      onClick={handleClickCountry}
    >
      {!country && loading && <p>Loading...</p>}
      {country && !loading && (
        <>
          <CountryCardHeader>
            <CountryCardTitle fontSize={getFontSize}>
              {country.name.common.toUpperCase()}
            </CountryCardTitle>
            {country.region[0] && (
              <CountryCardRegion>
                {country.region.toUpperCase()}
              </CountryCardRegion>
            )}
          </CountryCardHeader>
          <CountryCardFlagWrapper>
            <CountryCardFlag
              loading="lazy"
              width={120}
              src={country.flags.png}
              alt={`${country.name.common} flag`}
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

export default CountryCard;
