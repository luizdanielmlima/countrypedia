export interface Currency {
  name: string;
  symbol: string;
}

export interface Capital {
  attributes: {
    administrative: boolean;
    constitutional: boolean;
    executive: boolean;
    judicial: boolean;
    legislative: boolean;
    primary: boolean;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Language {
  bcp47: string;
  iso639_1: string;
  iso639_2b: string;
  iso639_2t: string;
  iso639_3: string;
  name: string;
  native_name: string;
}

export interface CountryType {
  area: {
    kilometers: number;
    miles: number;
  };
  borders: string[];
  capitals: Capital[];
  codes: {
    alpha_2: string;
    alpha_3: string;
    ccn3: string;
    cioc: string;
    fifa: string;
    fips: string;
    gec: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  coatOfArms: Record<string, string>;
  commonName: string; // added this to make sorting easier
  continents: string[];
  currencies: Record<string, Currency>;
  flag: { unicode: string; url_png: string; url_svg: string };
  independent: boolean;
  languages: Language[];
  links: {
    google_maps: string;
    official: string;
    open_street_maps: string;
    wikipedia: string;
  };
  names: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  timezones: string[];
  tlds: string[];
  uuid: string;
}
