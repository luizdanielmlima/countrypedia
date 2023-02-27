import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const HomeContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: ${(props) => props.theme.spacings.large};

  ${down('xl')} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
