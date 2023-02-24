import styled from 'styled-components';

export const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContryContentWrapper = styled.div`
  height: calc(100vh - 220px);
  max-height: calc(100vh - 220px);
  overflow-y: auto;
  padding: ${(props) =>
    `${props.theme.spacings.large} ${props.theme.spacings.large}`};
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.small};
  box-shadow: ${(props) => props.theme.shadows.xSmall};

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
`;

export const CountryHeaderRegion = styled.h4`
  font-weight: 300;
`;

export const FlagMapWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${(props) => props.theme.spacings.medium};
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
`;
