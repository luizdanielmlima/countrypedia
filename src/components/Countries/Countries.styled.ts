import styled from 'styled-components';
import { down } from 'styled-breakpoints';

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

  ${down('xl')} {
    max-height: 240px;
    margin-right: -12px; // align to right, scroll handle adds padding right

    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacings.xSmall};
  }
`;

export const CountriesListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${down('xl')} {
    margin-bottom: ${(props) => props.theme.spacings.medium};
    flex-direction: column;
  }
`;

export const LoadingWrapper = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
