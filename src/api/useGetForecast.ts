import { useQuery } from 'react-query';
import { CountryType } from '../models/Country';
import { Forecast } from '../models/ForeCast';
import { openWeatherAPIUrl } from './constants';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;

const useGetForecast = (
  lat?: number,
  lon?: number,
  units: string = 'metric',
) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['forecast', lat, lon], // dynamic querykey to avoid caching
    queryFn: async () => {
      const response = await fetch(
        `${openWeatherAPIUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
      );

      return (await response.json()) as Forecast;
    },
    // The query will not execute until the lat exists
    enabled: !!lat,
  });

  return {
    currentForecast: !isLoading && data,
    currentForecastLoading: isLoading,
    currentForecastError: error,
  };
};

export default useGetForecast;
