import styled from 'styled-components';

export const AppWrapper = styled.div`
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
