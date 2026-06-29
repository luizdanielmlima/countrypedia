import { useQuery } from 'react-query';
import { CountryType } from '../models/Country';
import { REGIONS, restCountriesAPIUrl } from './constants';

const apiKey = process.env.REACT_APP_REST_COUNTRIES_API_KEY as string;

export const useGetAllCountries = () => {
  const { isLoading, error, data } = useQuery<CountryType[], Error>({
    queryKey: 'mergedCountryData',
    queryFn: async () => {
      const params = `?limit=100`;
      const headers = {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      };

      const [africa, americas, asia, europe, oceania] = await Promise.all(
        REGIONS.map((region) => {
          return fetch(`${restCountriesAPIUrl}/region/${region}${params}`, {
            headers,
          });
        }),
      );

      const data1 = (await africa.json()).data.objects as CountryType[];
      const data2 = (await americas.json()).data.objects as CountryType[];
      const data3 = (await asia.json()).data.objects as CountryType[];
      const data4 = (await europe.json()).data.objects as CountryType[];
      const data5 = (await oceania.json()).data.objects as CountryType[];

      // const resp = await fetch(
      //   // 'https://api.restcountries.com/countries/region/REGION_NAME',
      //   `${restCountriesAPIUrl}${params}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${apiKey}`,
      //     },
      //   },
      // );
      // const data = await resp.json();

      // return data.data.objects as CountryType[];

      return [
        ...data1,
        ...data2,
        ...data3,
        ...data4,
        ...data5,
      ] as CountryType[];
    },
  });

  return {
    countries: !isLoading && data,
    countriesLoading: isLoading,
    countriesError: error,
  };
};
