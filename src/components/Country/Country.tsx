import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { formatNumber } from '../../utils/formatNumber';
import CountryMap from '../CountryMap';
import {
  ContryContentWrapper,
  CountryFlag,
  CountryHeader,
  CountryHeaderDivider,
  CountryHeaderName,
  CountryHeaderRegion,
  CountryWrapper,
  FlagMapWrapper,
  InfoItemHoriz,
  InfoItems,
  InfoItemVert,
  InfoItemWrapper,
  InfoLabel,
  InfoValue,
} from './Country.styled';
import Languages from './Languages';

const Country = () => {
  const country = useSelector(
    (state: RootState) => state.countries.country,
  );
  console.log('country: ', country);

  return (
    <CountryWrapper>
      {country && (
        <>
          <CountryHeader>
            <CountryHeaderName>
              {country.name.common}
            </CountryHeaderName>
            <CountryHeaderDivider>|</CountryHeaderDivider>
            <CountryHeaderRegion>
              {country.region.toUpperCase()}
            </CountryHeaderRegion>
          </CountryHeader>
          <ContryContentWrapper>
            <FlagMapWrapper>
              <CountryFlag
                loading="lazy"
                src={country.flags.png}
                alt={`${country.name.common} flag`}
              />
              <CountryMap />
            </FlagMapWrapper>
            <InfoItemWrapper>
              <InfoItems>
                <InfoItemVert>
                  <InfoLabel>Population</InfoLabel>
                  <InfoValue>
                    {formatNumber(country.population)}
                  </InfoValue>
                </InfoItemVert>
                <InfoItemVert>
                  <InfoLabel>Area</InfoLabel>
                  <InfoValue>
                    {formatNumber(country.area)}
                    <span> km&sup2;</span>
                  </InfoValue>
                </InfoItemVert>
                <InfoItemVert>
                  <InfoLabel>Language</InfoLabel>
                  <InfoValue>
                    <Languages languages={country.languages} />
                  </InfoValue>
                </InfoItemVert>
              </InfoItems>
              <InfoItems>
                <InfoItemHoriz>
                  <InfoLabel>Capital</InfoLabel>
                  <InfoValue>
                    {country.capital.length > 0 && country.capital[0]}
                  </InfoValue>
                </InfoItemHoriz>
              </InfoItems>
            </InfoItemWrapper>
          </ContryContentWrapper>
        </>
      )}
    </CountryWrapper>
  );
};

export default Country;
