import React, { useMemo, FC } from "react";

import useGetForecast from "../../api/useGetForecast";
import { CountryType } from "../../models/Country";
import { Weather } from "../../models/ForeCast";
import { InfoItemHoriz, InfoLabel } from "../Country/Country.styled";
import LoadingFeedback from "../LoadingFeedback/LoadingFeedback";
import LocalTime from "../LocalTime";
import WeatherIcon from "../WeatherIcon";
import {
  ForecastMain,
  ForecastMainText,
  ForecastTemperature,
  ForecastTemperatures,
  ForecastWrapper,
} from "./CapitalForecast.styled";

const CapitalForecast: FC<{ country: CountryType }> = ({ country }) => {
  const { currentForecast, currentForecastLoading, currentForecastError } =
    useGetForecast(
      country.capitalInfo.latlng[0],
      country.capitalInfo.latlng[1],
      "metric"
    );

  const weatherCondition = useMemo(() => {
    if (
      currentForecast &&
      currentForecast.weather &&
      currentForecast.weather.length > 0
    ) {
      const condition: Partial<Weather> = {
        main: currentForecast.weather[0].main.toLowerCase(),
        description: currentForecast.weather[0].description.toLowerCase(),
      };
      return condition;
    }
    return { main: "unknown", description: "unknown" };
  }, [currentForecast]);

  return (
    <ForecastWrapper>
      <>
        {currentForecastLoading && <LoadingFeedback />}

        {!currentForecastLoading && currentForecastError && (
          <p>An error has occured.</p>
        )}

        {!currentForecastLoading && currentForecast && (
          <>
            <ForecastMain>
              <ForecastMainText>
                <InfoLabel>Forecast</InfoLabel>
                <h4>
                  {currentForecast.weather &&
                    currentForecast.weather.length > 0 &&
                    currentForecast.weather[0].main}
                </h4>
              </ForecastMainText>
              {weatherCondition && <WeatherIcon condition={weatherCondition} />}
              <ForecastTemperatures>
                <ForecastTemperature>
                  <p>Max:&nbsp;</p>
                  <p>{Math.round(currentForecast.main.temp_max)}°C</p>
                </ForecastTemperature>
                <ForecastTemperature>
                  <p>Min:&nbsp;</p>
                  <p>{Math.round(currentForecast.main.temp_min)}°C</p>
                </ForecastTemperature>
              </ForecastTemperatures>
            </ForecastMain>
            <InfoItemHoriz>
              <InfoLabel>Local Time</InfoLabel>
              {currentForecast.timezone && (
                <LocalTime timezone={currentForecast.timezone} />
              )}
            </InfoItemHoriz>
          </>
        )}
      </>
    </ForecastWrapper>
  );
};

export default CapitalForecast;
