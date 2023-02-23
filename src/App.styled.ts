import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacings.xxLarge};
  padding-top: 0;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto Slab', serif;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.xLarge};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
  h4 {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;
