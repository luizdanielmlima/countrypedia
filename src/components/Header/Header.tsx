import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import ThemeSwitcher from '../ThemeSwitcher';
import {
  HeaderCredits,
  HeaderLogoStyled,
  HeaderRightSide,
  HeaderWrapper,
} from './Header.styled';

const Header = () => {
  const theme = useSelector(
    (state: RootState) => state.countries.theme,
  );

  return (
    <HeaderWrapper>
      <HeaderLogoStyled color={theme.colors.primary} />
      <HeaderRightSide>
        <HeaderCredits>
          <p>Developed by &nbsp; </p>
          <a
            href="http://luizdaniellima.com.br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my website"
          >
            Luiz Daniel Lima
          </a>
        </HeaderCredits>
        <HeaderCredits>
          <p>
            &nbsp; <span>|&nbsp;</span>Data from &nbsp;{' '}
          </p>
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="openweather"
          >
            Open Weather &nbsp;
          </a>
          <p>and &nbsp; </p>
          <a
            href="https://restcountries.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="restcountries"
          >
            Rest Countries
          </a>
        </HeaderCredits>

        <ThemeSwitcher />
      </HeaderRightSide>
    </HeaderWrapper>
  );
};

export default Header;
