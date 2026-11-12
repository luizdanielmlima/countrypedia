import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryType } from '../models/Country';
import { lightTheme, ThemeModel } from '../styles/theme';

export interface CountriesSliceState {
  country?: CountryType;
  countries?: CountryType[] | [];
  theme: ThemeModel;
  /** Mobile only: whether the country modal is showing. */
  modalOpen: boolean;
}

const initialCountriesState: CountriesSliceState = {
  countries: [],
  theme: lightTheme,
  modalOpen: false,
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
    openModal(state) {
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
  },
});

const { actions, reducer } = countriesSlice;

export const countriesActions = actions;

export default reducer;
