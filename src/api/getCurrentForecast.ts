import openWeatherAPIUrl from './constants';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;

const getCurrentForecast = (
  lat?: number,
  lon?: number,
  units: string = 'metric',
) => {
  return fetch(
    `${openWeatherAPIUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
  );
};

export default getCurrentForecast;
