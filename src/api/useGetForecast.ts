import { useQuery } from 'react-query';
import { Forecast } from '../models/ForeCast';
import { openWeatherAPIUrl } from './constants';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;

const useGetForecast = (
  lat?: number,
  lon?: number,
  units: string = 'metric',
) => {
  const { isLoading, error, data } = useQuery({
    // every value the request depends on must be part of the key
    queryKey: ['forecast', lat, lon, units],
    queryFn: async () => {
      const response = await fetch(
        `${openWeatherAPIUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
      );

      if (!response.ok) {
        throw new Error(`Forecast request failed (${response.status})`);
      }

      return (await response.json()) as Forecast;
    },
    // The query will not execute until the coordinates exist
    // (0 is a valid latitude/longitude, so don't rely on truthiness)
    enabled: lat !== undefined && lon !== undefined,
  });

  return {
    currentForecast: !isLoading && data,
    currentForecastLoading: isLoading,
    currentForecastError: error,
  };
};

export default useGetForecast;
