import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    font-size: ${(props) => props.theme.fontSizes.small};
    margin-right: ${(props) => props.theme.spacings.small};
  }

  select {
    width: 140px;
    background-color: ${(props) => props.theme.colors.surface};
    color: ${(props) => props.theme.colors.primary};
    padding: 8px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius.small};
    box-shadow: none;
    outline: none;
    font-size: inherit;
  }

  /* Order By and Region side by side, each label above its select */
  ${down('xl')} {
    flex: 1;
    min-width: 0;
    flex-direction: column;
    align-items: stretch;

    label {
      margin-right: 0;
      margin-bottom: ${(props) => props.theme.spacings.xxSmall};
      font-size: ${(props) => props.theme.fontSizes.xSmall};
    }

    select {
      width: 100%;
      /* 16px+ stops iOS Safari from zooming the page when a select gets focus */
      font-size: 16px;
    }
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 74px;

  ${FilterWrapper}:first-child {
    margin-right: ${(props) => props.theme.spacings.xLarge};
  }

  ${down('xl')} {
    width: 100%;
    height: auto;
    margin-bottom: ${(props) => props.theme.spacings.large};
    gap: ${(props) => props.theme.spacings.small};
    align-items: flex-start;

    ${FilterWrapper}:first-child {
      margin-right: 0;
    }
  }
`;
