import styled from 'styled-components';

export const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacings.medium};
`;

export const ForecastMain = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.medium};
`;

export const ForecastMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ForecastTemperatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacings.small};
`;

export const ForecastTemperature = styled.div`
  display: flex;
  align-items: center;

  p:not(:first-child) {
    font-size: ${(props) => props.theme.fontSizes.xSmall};
    font-weight: 600;
  }
`;
