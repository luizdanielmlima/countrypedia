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

  ${down('xl')} {
    width: 100%;
    margin-right: 0 !important;
    margin-bottom: ${(props) => props.theme.spacings.small};

    label {
      font-size: ${(props) => props.theme.fontSizes.xSmall};
      min-width: 70px;
    }

    select {
      width: 100%;
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
    margin-bottom: ${(props) => props.theme.spacings.small};
    flex-direction: column;
  }
`;
