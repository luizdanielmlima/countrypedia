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
        <ThemeSwitcher />
      </HeaderRightSide>
    </HeaderWrapper>
  );
};

export default Header;
