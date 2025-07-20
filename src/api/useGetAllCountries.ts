import { useQuery } from 'react-query';
import { CountryType } from '../models/Country';
import {
  countryFields1,
  countryFields2,
  restCountriesAPIUrl,
} from './constants';

export const useGetAllCountries = () => {
  const { isLoading, error, data } = useQuery<CountryType[], Error>({
    queryKey: 'mergedCountryData',
    queryFn: async () => {
      const params1 = `fields=${countryFields1.join(',')}`;
      const params2 = `fields=${countryFields2.join(',')}`;

      const [response1, response2] = await Promise.all([
        fetch(`${restCountriesAPIUrl}?${params1}`, {
          headers: { accept: 'application/json' },
        }),
        fetch(`${restCountriesAPIUrl}?${params2}`, {
          headers: { accept: 'application/json' },
        }),
      ]);

      const data1 = (await response1.json()) as CountryType[];
      const data2 = (await response2.json()) as CountryType[];

      // Merge by country name (assuming unique name)
      const mergedMap = new Map<string, CountryType>();
      data1.forEach((country) => {
        if (country.name?.common)
          mergedMap.set(country.name.common, { ...country });
      });
      data2.forEach((country) => {
        const name = country.name?.common;
        if (name) {
          mergedMap.set(name, { ...mergedMap.get(name), ...country });
        }
      });

      return Array.from(mergedMap.values());
    },
  });

  return {
    countries: !isLoading && data,
    countriesLoading: isLoading,
    countriesError: error,
  };
};

// export const useGetAllCountries = () => {
//   const { isLoading, error, data } = useQuery<CountryType[], Error>({
//     queryKey: "countryData",
//     queryFn: async () => {
//       // https://restcountries.com/v3.1/all?fields=name,flags
//       const extraParams = `fields=${countryFields1.join(",")}`;
//       const response = await fetch(`${restCountriesAPIUrl}?${extraParams}`, {
//         headers: {
//           accept: "application/json",
//         },
//       });

//       return (await response.json()) as CountryType[];
//     },
//   });

//   return {
//     countries: !isLoading && data,
//     countriesLoading: isLoading,
//     countriesError: error,
//   };
// };

// export const useGetAllCountries2 = () => {
//   const { isLoading, error, data } = useQuery<CountryType[], Error>({
//     queryKey: "countryData",
//     queryFn: async () => {
//       // https://restcountries.com/v3.1/all?fields=name,flags
//       const extraParams = `fields=${countryFields2.join(",")}`;
//       const response = await fetch(`${restCountriesAPIUrl}?${extraParams}`, {
//         headers: {
//           accept: "application/json",
//         },
//       });

//       return (await response.json()) as CountryType[];
//     },
//   });

//   return {
//     countries2: !isLoading && data,
//     countries2Loading: isLoading,
//     countries2Error: error,
//   };
// };
