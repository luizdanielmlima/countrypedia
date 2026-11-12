import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import InfoDialog from '../InfoDialog';
import ThemeSwitcher from '../ThemeSwitcher';
import {
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
        <InfoDialog />
        <ThemeSwitcher />
      </HeaderRightSide>
    </HeaderWrapper>
  );
};

export default Header;
