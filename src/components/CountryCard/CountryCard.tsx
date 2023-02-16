import React, { FC, useMemo } from 'react';

import { CountryType } from '../../models/Country';
import { formatPopulation } from '../../utils/formatPopulation';
import {
  CountryCardBody,
  CountryCardFlag,
  CountryCardFlagWrapper,
  CountryCardFooter,
  CountryCardHeader,
  CountryCardRegion,
  CountryCardTitle,
  CountryCardWrapper,
} from './CountryCard.styled';

const CountryCard: FC<{ loading: boolean; country: CountryType }> = ({
  loading,
  country,
}) => {
  const getFontSize = useMemo(() => {
    if (country.name.common.length > 24) {
      return '0.65rem';
    }
    if (country.name.common.length > 20) {
      return '0.75rem';
    }
    if (country.name.common.length > 16) {
      return '0.85rem';
    }
    return '1rem';
  }, [country.name.common.length]);
  return (
    <CountryCardWrapper
      key={`${country.name.common}_${country.capital}`}
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
          {/* <CountryCardBody></CountryCardBody> */}
          <CountryCardFooter>
            <p>{formatPopulation(country.population)}</p>
          </CountryCardFooter>
        </>
      )}
    </CountryCardWrapper>
  );
};

export default CountryCard;
