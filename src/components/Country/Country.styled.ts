import styled from 'styled-components';
import { down } from 'styled-breakpoints';

// Desktop: fills the grid cell next to the list and scrolls inside it.
// `$flat` (used inside the country modal) drops the card styling and the inner
// scrolling: the modal body does the scrolling.
export const CountryWrapper = styled.div<{ $flat?: boolean }>`
  min-height: 0;
  display: ${({ $flat }) => ($flat ? 'block' : 'flex')};
  flex-direction: column;
`;

export const ContryContentWrapper = styled.div<{ $flat?: boolean }>`
  flex: 1;
  min-height: 0;
  overflow-y: ${({ $flat }) => ($flat ? 'visible' : 'auto')};
  padding: ${({ $flat, theme }) =>
    $flat ? '0' : `${theme.spacings.large} ${theme.spacings.large}`};
  background-color: ${({ $flat, theme }) =>
    $flat ? 'transparent' : theme.colors.surface};
  border: ${({ $flat, theme }) =>
    $flat ? 'none' : `1px solid ${theme.colors.surface}`};
  border-radius: ${({ $flat, theme }) =>
    $flat ? '0' : theme.borderRadius.small};
  box-shadow: ${({ $flat, theme }) => ($flat ? 'none' : theme.shadows.large)};

  display: flex;
  flex-direction: column;

  transition: all 200ms ease-in;
`;

export const CountryHeader = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.medium};
  display: flex;
  align-items: center;
`;

export const CountryHeaderDivider = styled.h4`
  margin: 0 ${(props) => props.theme.spacings.medium};
  font-weight: 300;
`;

export const CountryHeaderName = styled.h1`
  font-weight: 800;

  ${down('xl')} {
    font-size: ${(props) => props.theme.fontSizes.medium} !important;
  }
`;

export const CountryHeaderRegion = styled.h4`
  font-weight: 300;
`;

export const FlagMapWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${(props) => props.theme.spacings.medium};

  ${down('xl')} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

export const CountryFlag = styled.img`
  width: 100%;
`;

export const InfoItems = styled.div`
  margin-top: ${(props) => props.theme.spacings.medium};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InfoItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${(props) => props.theme.spacings.medium};

  ${down('xl')} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

export const InfoItemVert = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InfoItemHoriz = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoLabel = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  font-weight: 300;
`;

export const InfoValue = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;

  ${down('xl')} {
    font-size: ${(props) => props.theme.fontSizes.small} !important;
  }
`;
