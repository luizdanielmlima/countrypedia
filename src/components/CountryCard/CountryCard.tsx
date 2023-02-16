import React, { FC, useMemo } from 'react';

import { CountryType } from '../../models/Country';
import {
  CountryCardFlag,
  CountryCardFlagWrapper,
  CountryCardHeader,
  CountryCardTitle,
  CountryCardWrapper,
} from './CountryCard.styled';

const CountryCard: FC<{ loading: boolean; country: CountryType }> = ({
  loading,
  country,
}) => {
  const getFontSize = useMemo(() => {
    if (country.name.common.length > 16) {
      return '0.65rem';
    }
    if (country.name.common.length > 12) {
      return '0.75rem';
    }
    return '0.9rem';
  }, [country.name.common.length]);
  return (
    <CountryCardWrapper>
      {!country && loading && <p>Loading...</p>}
      {country && !loading && (
        <div key={`${country.name.common}_${country.capital}`}>
          <CountryCardHeader>
            <CountryCardTitle fontSize={getFontSize}>
              {country.name.common.toUpperCase()}
            </CountryCardTitle>
          </CountryCardHeader>
          <CountryCardFlagWrapper>
            <CountryCardFlag
              loading="lazy"
              width={120}
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
          </CountryCardFlagWrapper>
        </div>
      )}
    </CountryCardWrapper>
  );
};

export default CountryCard;
