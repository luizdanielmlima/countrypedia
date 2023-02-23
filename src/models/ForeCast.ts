export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Coordinate {
  lat: number;
  lon: number;
}

export interface Wind {
  deg: number;
  speed: number;
  gust: number;
}

export interface ForecastMain {
  feels_like: number;
  grnd_level?: number;
  humidity: number;
  pressure: number;
  sea_level?: number;
  temp: number;
  temp_kf?: number;
  temp_max: number;
  temp_min: number;
}

export interface Forecast {
  base: string;
  clouds: any;
  cod?: number;
  coord?: Coordinate;
  dayOfTheWeek?: string; // added these
  dt_txt: string;
  dt: number;
  id?: number;
  main: ForecastMain;
  name?: string;
  pop?: number;
  rain?: any;
  sys: {
    country?: string;
    id?: number;
    pod?: string;
    sunrise?: number;
    sunset?: number;
  };
  timezone?: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

// model for the getMultipleDaysForecast response (see /api/index.ts)
export interface MultipleForecast {
  cod: string;
  message: number;
  cnt: number;
  list: Forecast[];
}

export interface SimplifiedForecast {
  dayOfTheWeek: string | undefined;
  timeOfTheDay: string;
  main: string;
  description: string;
  min?: number;
  max?: number;
  temp_min: string | number;
  temp_max: string | number;
}
