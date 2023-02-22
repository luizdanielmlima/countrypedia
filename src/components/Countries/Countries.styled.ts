import styled from 'styled-components';

export const CountriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: ${(props) => props.theme.spacings.medium};
`;
