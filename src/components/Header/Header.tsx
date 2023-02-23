import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { HeaderLogoStyled, HeaderWrapper } from './Header.styled';

const Header = () => {
  const theme = useSelector(
    (state: RootState) => state.countries.theme,
  );

  return (
    <HeaderWrapper>
      <HeaderLogoStyled color={theme.colors.primary} />
    </HeaderWrapper>
  );
};

export default Header;
