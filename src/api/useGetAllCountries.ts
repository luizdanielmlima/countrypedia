import { useQuery } from 'react-query';
import { CountryType } from '../models/Country';
import { restCountriesAPIUrl } from './constants';

const useGetAllCountries = () => {
  const { isLoading, error, data } = useQuery<CountryType[], Error>({
    queryKey: 'countryData',
    queryFn: async () => {
      const response = await fetch(`${restCountriesAPIUrl}/all`, {
        headers: {
          accept: 'application/json',
        },
      });

      return (await response.json()) as CountryType[];
    },
  });

  return {
    countries: !isLoading && data,
    countriesLoading: isLoading,
    countriesError: error,
  };
};

export default useGetAllCountries;
