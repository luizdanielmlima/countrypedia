import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';

export const HeaderLogoStyled = styled(HeaderLogo)`
  max-width: 200px;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.large};
  padding: ${(props) => props.theme.spacings.medium};

  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  /* background-color: ${(props) => props.theme.colors.surface};
  border-bottom-left-radius: ${(props) =>
    props.theme.borderRadius.medium};
  border-bottom-right-radius: ${(props) =>
    props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.shadows.small}; */

  display: flex;
  justify-content: flex-start;
`;
