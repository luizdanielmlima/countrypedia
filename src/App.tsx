import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { AppWrapper } from './App.styled';
import Home from './pages/Home';
import { RootState } from './store';

function App() {
  const queryClient = new QueryClient();
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
