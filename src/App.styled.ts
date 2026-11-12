import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const AppWrapper = styled.div`
  /* App shell: fills the viewport (dvh follows mobile browser toolbars) and the
     list / country panel take whatever height is left. It only scrolls on tiny
     viewports, e.g. a phone in landscape. */
  height: 100vh;
  height: 100dvh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacings.xxLarge};
  padding-top: 0;

  p {
    font-size: ${(props) => props.theme.fontSizes.xSmall};
  }

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

  ${down('xl')} {
    padding: ${(props) => props.theme.spacings.medium};
    padding-top: 0;
  }
`;
