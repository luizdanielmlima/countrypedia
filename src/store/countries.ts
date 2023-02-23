import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryType } from '../models/Country';
import { lightTheme, ThemeModel } from '../styles/theme';

export interface CountriesSliceState {
  country?: CountryType;
  countries?: CountryType[] | [];
  theme: ThemeModel;
}

const initialCountriesState: CountriesSliceState = {
  countries: [],
  theme: lightTheme,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialCountriesState,
  reducers: {
    setCountries(state, action: PayloadAction<CountryType[]>) {
      state.countries = action.payload;
    },
    setCountry(state, action: PayloadAction<CountryType>) {
      state.country = action.payload;
    },
    setTheme(state, action: PayloadAction<ThemeModel>) {
      state.theme = action.payload;
    },
  },
});

const { actions, reducer } = countriesSlice;

export const countriesActions = actions;

export default reducer;
