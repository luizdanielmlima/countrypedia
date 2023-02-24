import styled from 'styled-components';

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
`;

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 74px;

  ${FilterWrapper}:first-child {
    margin-right: ${(props) => props.theme.spacings.xLarge};
  }
`;
