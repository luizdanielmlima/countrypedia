import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const HomeContent = styled.div`
  flex: 1 1 0;
  /* below this the app shell scrolls instead of squeezing the list */
  min-height: 360px;

  display: grid;
  grid-template-columns: 1.5fr 1fr;
  /* without minmax(0, ...) the row grows with its content and the panels never scroll */
  grid-template-rows: minmax(0, 1fr);
  grid-gap: ${(props) => props.theme.spacings.large};

  ${down('xl')} {
    display: flex;
    flex-direction: column;
  }
`;
