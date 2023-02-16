import { useQuery } from 'react-query';
import { CountryType } from '../models/Country';
import { baseCountriesAPIUrl } from '../shared/variables';

const useGetCountryByName = (name: string) => {
  const { isLoading, error, data } = useQuery<CountryType[], Error>(
    'countryData',
    async () => {
      const response = await fetch(
        `${baseCountriesAPIUrl}/name/${name}`,
        {
          headers: {
            accept: 'application/json',
          },
        },
      );

      return (await response.json()) as CountryType[];
    },
  );

  return {
    country: !isLoading && data && data[0],
    countryLoading: isLoading,
    countryError: error,
  };
};

export default useGetCountryByName;
