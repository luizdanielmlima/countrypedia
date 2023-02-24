import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';

export const HeaderLogoStyled = styled(HeaderLogo)`
  max-width: 200px;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.large};
  padding: ${(props) => props.theme.spacings.medium};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
