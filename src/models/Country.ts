interface Currency {
  name: string;
  symbol: string;
}

export interface CountryType {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: { latlng: number[] };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: Record<string, string>;
  continents: string[];
  currencies: Record<string, Currency>;
  flags: { alt: string; png: string; svg: string };
  independent: boolean;
  languages: Record<string, string>;
  latlng: number[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    nativeName: any;
    official: string;
  };
  population: number;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: any;
  unMember: boolean;
}
