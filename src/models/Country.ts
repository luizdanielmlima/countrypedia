interface Currency {
  name: string;
  symbol: string;
}

export interface CountryType {
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: { latlng: string[] };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  continents: string[];
  currencies: Record<string, Currency>;
  flags: { alt: string; png: string; svg: string };
  languages: Record<string, string>[];
  latlng: string[];
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
  subregion: string;
}
