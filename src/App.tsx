import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { AppWrapper } from './App.styled';
import Home from './pages/Home';
import { RootState } from './store';

// Created once, outside the component: App re-renders when the theme changes
// and a new client would discard the whole query cache.
// The data is effectively static: don't refetch on window focus or mount.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, staleTime: Infinity },
  },
});

function App() {
  const theme = useSelector(
    (state: RootState) => state.countries.theme,
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Home />
        </AppWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
