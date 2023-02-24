import React, { useEffect, useMemo, useState, FC } from 'react';
import getCurrentForecast from '../../api/getCurrentForecast';
import { CountryType } from '../../models/Country';
import { Forecast, Weather } from '../../models/ForeCast';
import { InfoLabel } from '../Country/Country.styled';
import WeatherIcon from '../WeatherIcon';
import {
  ForecastMain,
  ForecastMainText,
  ForecastTemperature,
  ForecastTemperatures,
  ForecastWrapper,
} from './CapitalForecast.styled';

const CapitalForecast: FC<{ country: CountryType }> = ({
  country,
}) => {
  const [currentForecast, setCurrentForecast] = useState<Forecast>();
  const [currentForecastLoading, setCurrentForecastLoading] =
    useState(false);
  const [currentForecastError, setCurrentForecastError] =
    useState(false);

  useEffect(() => {
    if (country && country.capital.length > 0) {
      const city = {
        name: country.capital[0],
        lat: country.capitalInfo.latlng[0],
        lon: country.capitalInfo.latlng[1],
      };
      const fetchData = async () => {
        setCurrentForecastLoading(true);
        const response = await getCurrentForecast(
          city.lat,
          city.lon,
          'metric',
        );
        const json = await response.json();
        setCurrentForecast(json);
      };

      fetchData()
        .catch((err) => setCurrentForecastError(err))
        .finally(() => setCurrentForecastLoading(false));
    }
  }, [country]);

  const weatherCondition = useMemo(() => {
    if (
      currentForecast &&
      currentForecast.weather &&
      currentForecast.weather.length > 0
    ) {
      const condition: Partial<Weather> = {
        main: currentForecast.weather[0].main.toLowerCase(),
        description:
          currentForecast.weather[0].description.toLowerCase(),
      };
      return condition;
    }
    return { main: 'unknown', description: 'unknown' };
  }, [currentForecast]);

  return (
    <>
      {!currentForecastLoading && currentForecast && (
        <ForecastWrapper>
          <ForecastMain>
            <ForecastMainText>
              <InfoLabel>Forecast</InfoLabel>
              <h4>
                {currentForecast.weather &&
                  currentForecast.weather.length > 0 &&
                  currentForecast.weather[0].main}
              </h4>
            </ForecastMainText>
            {weatherCondition && (
              <WeatherIcon condition={weatherCondition} />
            )}
            <ForecastTemperatures>
              <ForecastTemperature>
                <p>Min:&nbsp;</p>
                <p>{Math.round(currentForecast.main.temp_min)}°C</p>
              </ForecastTemperature>
              <ForecastTemperature>
                <p>Max&nbsp;</p>
                <p>{Math.round(currentForecast.main.temp_max)}°C</p>
              </ForecastTemperature>
            </ForecastTemperatures>
          </ForecastMain>
        </ForecastWrapper>
      )}
    </>
  );
};

export default CapitalForecast;
