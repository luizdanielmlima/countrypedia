import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { formatNumber } from '../../utils/formatNumber';
import CountryMap from './CountryMap';
import {
  ContryContentWrapper,
  CountryFlag,
  CountryHeader,
  CountryHeaderDivider,
  CountryHeaderName,
  CountryHeaderRegion,
  CountryWrapper,
  FlagMapWrapper,
  InfoItems,
  InfoItemVert,
  InfoItemWrapper,
  InfoLabel,
  InfoValue,
} from './Country.styled';
import Currencies from './Currencies';
import Languages from './Languages';
import CountryBorders from './CountryBorders';
import CapitalForecast from '../CapitalForecast';

const Country = () => {
  const country = useSelector(
    (state: RootState) => state.countries.country,
  );

  return (
    <CountryWrapper>
      {country && (
        <>
          <CountryHeader>
            <CountryHeaderName>
              {country.name.common || '-'}
            </CountryHeaderName>
            <CountryHeaderDivider>|</CountryHeaderDivider>
            <CountryHeaderRegion>
              {country.region ? country.region.toUpperCase() : '-'}
            </CountryHeaderRegion>
          </CountryHeader>
          <ContryContentWrapper>
            <FlagMapWrapper>
              <CountryFlag
                loading="lazy"
                src={country.flags.png}
                alt={`${country.name.common} flag`}
              />
              <CountryMap countryData={country} />
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
                  <InfoLabel>Region</InfoLabel>
                  <InfoValue>{country.region || '-'}</InfoValue>
                </InfoItemVert>
                <InfoItemVert>
                  <InfoLabel>Sub-Region</InfoLabel>
                  <InfoValue>{country.subregion || '-'}</InfoValue>
                </InfoItemVert>
              </InfoItems>
              <InfoItems>
                <InfoItemVert>
                  <InfoLabel>Capital</InfoLabel>
                  <InfoValue>
                    {country.capital?.length > 0
                      ? country.capital[0]
                      : '-'}
                  </InfoValue>
                </InfoItemVert>
                <InfoItemVert>
                  <CapitalForecast country={country} />
                </InfoItemVert>
              </InfoItems>
            </InfoItemWrapper>
            <>
              <InfoItemVert>
                <InfoLabel>Language</InfoLabel>
                <InfoValue>
                  {country.languages && (
                    <Languages languages={country.languages} />
                  )}
                  {!country.languages && '-'}
                </InfoValue>
              </InfoItemVert>
              <InfoItemVert>
                <InfoLabel>Currency</InfoLabel>
                <InfoValue>
                  {country.currencies && (
                    <Currencies currencies={country.currencies} />
                  )}
                  {!country.currencies && '-'}
                </InfoValue>
              </InfoItemVert>
              <InfoItemVert>
                <InfoLabel>Borders</InfoLabel>
                {country.borders && country.borders.length > 0 ? (
                  <CountryBorders borders={country.borders} />
                ) : (
                  <p>-</p>
                )}
                {!country.currencies && '-'}
              </InfoItemVert>
            </>
          </ContryContentWrapper>
        </>
      )}
    </CountryWrapper>
  );
};

export default Country;
