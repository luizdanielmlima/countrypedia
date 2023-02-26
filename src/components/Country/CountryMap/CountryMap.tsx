import React, { FC, useLayoutEffect, useCallback } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { CountryType } from '../../../models/Country';
import { getMapZoomLevel } from '../../../utils/mapZoomLevel';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { countriesActions } from '../../../store/countries';

interface CountryInfo {
  id: string;
  multiPolygon: any;
  name: string;
}

const CountryMap: FC<{ countryData: CountryType }> = ({
  countryData,
}) => {
  const theme = useSelector(
    (state: RootState) => state.countries.theme,
  );

  const countries = useSelector(
    (state: RootState) => state.countries.countries,
  );
  const dispatch = useDispatch();

  const handleSelectedCountry = useCallback(
    (countryCode: string) => {
      if (!countries || countries?.length === 0) return null;

      const foundCountry = countries?.find(
        (country) => country.cca2 === countryCode,
      );

      if (foundCountry) {
        dispatch(countriesActions.setCountry(foundCountry));
      }
    },
    [countries, dispatch],
  );

  useLayoutEffect(() => {
    let map = am4core.create('chartdiv', am4maps.MapChart);

    // Set map definition
    map.geodata = am4geodata_worldLow;

    // Set projection
    map.projection = new am4maps.projections.Miller();

    // Bg color
    map.background.fill = am4core.color('#087f8c');
    map.background.fillOpacity = 1;

    // Create map polygon series
    let polygonSeries = map.series.push(
      new am4maps.MapPolygonSeries(),
    );

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = am4core.color(
      theme.colors.secondaryVariant
        ? theme.colors.secondaryVariant
        : '#fcc',
    );
    polygonTemplate.stroke = am4core.color(
      theme.colors.background ? theme.colors.background : '#ccc',
    );

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color(
      theme.colors.secondary ? theme.colors.secondary : '#eaa',
    );

    polygonSeries.data = [
      {
        id: countryData.cca2,
        name: countryData.commonName || '-',
        fill: am4core.color(
          theme.colors.secondary ? theme.colors.secondary : '#eaa',
        ),
      },
    ];

    polygonTemplate.propertyFields.fill = 'fill';

    // Center on Country
    map.homeZoomLevel = getMapZoomLevel(countryData.area) || 7;
    map.homeGeoPoint = {
      latitude: countryData.latlng[0],
      longitude: countryData.latlng[1],
    };

    // Click on country
    polygonTemplate.events.on('hit', function (ev) {
      // get object info
      const countryInfo = ev.target.dataItem
        .dataContext as CountryInfo;
      handleSelectedCountry(countryInfo.id);
    });

    return () => {
      map.dispose();
    };
  }, [
    countryData,
    handleSelectedCountry,
    theme.colors.background,
    theme.colors.primary,
    theme.colors.secondary,
    theme.colors.secondaryVariant,
  ]);

  return (
    <>
      <div
        id="chartdiv"
        style={{ width: '100%', height: '100%' }}
      ></div>
    </>
  );
};

export default CountryMap;
