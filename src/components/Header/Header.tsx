import React from 'react';

import styled from 'styled-components';

import HeaderLogo from './HeaderLogo';

export const HeaderLogoStyled = styled(HeaderLogo)`
  max-width: 200px;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
`;

const ActionsBar = () => {
  return (
    <div>
      <p>Order By</p>
      <p>Show Region or All</p>
    </div>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogoStyled />
      <ActionsBar />
    </HeaderWrapper>
  );
};

export default Header;
