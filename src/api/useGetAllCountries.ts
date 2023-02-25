import { useQuery } from 'react-query';
import { CountryType } from '../models/Country';
import { baseCountriesAPIUrl } from '../shared/variables';

const useGetAllCountries = () => {
  const { isLoading, error, data } = useQuery<CountryType[], Error>(
    'countryData',
    async () => {
      const response = await fetch(`${baseCountriesAPIUrl}/all`, {
        headers: {
          accept: 'application/json',
        },
      });

      return (await response.json()) as CountryType[];
    },
  );

  return {
    countries: !isLoading && data,
    countriesLoading: isLoading,
    countriesError: error,
  };
};

export default useGetAllCountries;
