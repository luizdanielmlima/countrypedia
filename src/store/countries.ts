import { createSlice } from '@reduxjs/toolkit';
import { CountryType } from '../models/Country';

interface CountriesSliceState {
  country?: CountryType;
  countries?: CountryType[] | [];
}

const initialCountriesState: CountriesSliceState = { countries: [] };

const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialCountriesState,
  reducers: {
    setCountry(state, action) {
      state.country = action.payload;
    },
  },
});

export const counterActions = countriesSlice.actions;

export default countriesSlice.reducer;
