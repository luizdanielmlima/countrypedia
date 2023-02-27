import styled from 'styled-components';

export const CountriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountriesList = styled.div`
  max-height: calc(100vh - 220px);
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: ${(props) => props.theme.spacings.medium};
`;

export const CountriesListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoadingWrapper = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
