import { configureStore } from '@reduxjs/toolkit';

import countriesReducer from './countries';

const store = configureStore({
  reducer: { countries: countriesReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
