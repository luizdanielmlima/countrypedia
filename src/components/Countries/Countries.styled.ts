import styled from 'styled-components';
import { down } from 'styled-breakpoints';

// The list takes all the height left by the filters/pagination header.
export const CountriesWrapper = styled.div`
  flex: 1 1 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const CountriesList = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: grid;
  /* keep rows card-sized when there are only a few countries */
  align-content: start;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: ${(props) => props.theme.spacings.medium};

  ${down('xl')} {
    margin-right: -12px; // align to right, scroll handle adds padding right
    padding-bottom: ${(props) => props.theme.spacings.small};

    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacings.xSmall};

    > * {
      flex: none;
    }
  }
`;

export const CountriesListHeader = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${down('xl')} {
    margin-bottom: ${(props) => props.theme.spacings.small};
    flex-direction: column;
    align-items: stretch;
  }
`;

export const LoadingWrapper = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
