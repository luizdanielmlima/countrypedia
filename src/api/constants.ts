// See https://openweathermap.org/current and https://openweathermap.org/api/one-call-api
export const openWeatherAPIUrl = 'https://api.openweathermap.org/data/2.5';

export const restCountriesAPIUrl = 'https://restcountries.com/v3.1/all';

// From the restcountries docs: You must specify the fields you need (up to 10 fields) when calling the all endpoints
// otherwise you’ll get a bad request response

// Available fields: https://www.npmjs.com/package/@yusifaliyevpro/countries#available-fields
export const countryFields1 = [
  'area',
  'name',
  'capital',
  'capitalInfo',
  'flags',
  'latlng',
  'languages',
  'population',
  'region',
  'subregion',
];
export const countryFields2 = [
  'borders',
  'cioc',
  'cca2',
  'cca3',
  'currencies',
  'name',
];
