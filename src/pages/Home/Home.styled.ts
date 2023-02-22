import styled from 'styled-components';

export const HomeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${(props) => props.theme.spacings.large};
`;
