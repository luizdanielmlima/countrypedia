import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  margin: 0 ${(props) => props.theme.spacings.medium};

  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    margin: 0 ${(props) => props.theme.spacings.xxSmall};

    &:hover {
      color: ${(props) => props.theme.colors.primaryVariant};
    }
  }
`;

export const PaginationInfo = styled.div`
  margin: 0 ${(props) => props.theme.spacings.small};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationSeparator = styled.div`
  margin: -6px;
`;

export const PaginationValue = styled.div`
  text-align: center;
  min-width: 30px;
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  font-weight: 600;
`;
