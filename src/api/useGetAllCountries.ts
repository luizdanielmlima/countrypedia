import { useQuery } from 'react-query';
import { CountryType } from '../models/Country';
import { REGIONS, restCountriesAPIUrl } from './constants';

const apiKey = process.env.REACT_APP_REST_COUNTRIES_API_KEY as string;

export const useGetAllCountries = () => {
  const { isLoading, error, data } = useQuery<CountryType[], Error>({
    queryKey: 'mergedCountryData',
    queryFn: async () => {
      const params = `?limit=100`;
      // const params = `/region/${REGIONS.AFRICA}?limit=100`;

      const resp = await fetch(
        // 'https://api.restcountries.com/countries/region/REGION_NAME',
        `${restCountriesAPIUrl}${params}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );
      const data = await resp.json();

      return data.data.objects as CountryType[];
    },
  });

  return {
    countries: !isLoading && data,
    countriesLoading: isLoading,
    countriesError: error,
  };
};
