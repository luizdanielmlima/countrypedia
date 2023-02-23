import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { RootState } from '../../store';

import HeaderLogo from './HeaderLogo';

export const HeaderLogoStyled = styled(HeaderLogo)`
  max-width: 200px;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.medium};
  display: flex;
  justify-content: space-between;
`;

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
