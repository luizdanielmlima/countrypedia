import React, { memo } from 'react';
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

let Country = () => {
  const country = useSelector((state: RootState) => state.countries.country);
  console.log('country: ', country);

  return (
    <CountryWrapper>
      {country && (
        <>
          <CountryHeader>
            <CountryHeaderName>{country.names.common || '-'}</CountryHeaderName>
            <CountryHeaderDivider>|</CountryHeaderDivider>
            <CountryHeaderRegion>
              {country.region ? country.region.toUpperCase() : '-'}
            </CountryHeaderRegion>
          </CountryHeader>
          <ContryContentWrapper>
            <FlagMapWrapper>
              <CountryFlag
                loading="lazy"
                src={country.flag.url_png}
                alt={`${country.names.common} flag`}
              />
              <CountryMap countryData={country} />
            </FlagMapWrapper>
            <InfoItemWrapper>
              <InfoItems>
                <InfoItemVert>
                  <InfoLabel>Population</InfoLabel>
                  <InfoValue>{formatNumber(country.population)}</InfoValue>
                </InfoItemVert>
                <InfoItemVert>
                  <InfoLabel>Area</InfoLabel>
                  <InfoValue>
                    {formatNumber(country.area.kilometers || 0)}
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
                    {country.capitals?.length > 0
                      ? country.capitals[0].coordinates.lat
                      : '-'}
                  </InfoValue>
                </InfoItemVert>
                <InfoItemVert>
                  <InfoValue>
                    {country.capitals?.length > 0 &&
                      country.capitals[0].coordinates.lat && (
                        <CapitalForecast country={country} />
                      )}
                  </InfoValue>
                </InfoItemVert>
              </InfoItems>
            </InfoItemWrapper>
            <>
              <InfoItemVert>
                <InfoLabel>Language</InfoLabel>
                <InfoValue>
                  {country.languages ? (
                    <Languages languages={country.languages} />
                  ) : (
                    '-'
                  )}
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

export default memo(Country);
