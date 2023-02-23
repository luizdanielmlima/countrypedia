import React, { FC, useLayoutEffect } from 'react';
import styled from 'styled-components';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { CountryType } from '../../../models/Country';
import { getMapZoomLevel } from '../../../utils/mapZoomLevel';

export const CountryMapWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountryMap: FC<{ countryData: CountryType }> = ({
  countryData,
}) => {
  // const mapRef = useRef(null);

  useLayoutEffect(() => {
    let map = am4core.create('chartdiv', am4maps.MapChart);

    // Set map definition
    map.geodata = am4geodata_worldLow;

    // Set projection
    map.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = map.series.push(
      new am4maps.MapPolygonSeries(),
    );

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = am4core.color('#74B266');

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#367B25');

    polygonSeries.data = [
      {
        id: countryData.cca2,
        name: countryData.commonName || '-',
        fill: am4core.color('#F05C5C'),
      },
    ];

    polygonTemplate.propertyFields.fill = 'fill';

    // Center on Country
    // map.deltaLongitude = countryData.latlng[1];
    map.homeZoomLevel = getMapZoomLevel(countryData.area) || 7;
    map.homeGeoPoint = {
      latitude: countryData.latlng[0],
      longitude: countryData.latlng[1],
    };

    return () => {
      map.dispose();
    };
  }, [countryData]);

  return (
    <CountryMapWrapper>
      {/* <img src="./map_placeholder.png" alt="map placeholder" /> */}
      <div
        id="chartdiv"
        style={{ width: '100%', height: '200px' }}
      ></div>
    </CountryMapWrapper>
  );
};

export default CountryMap;
