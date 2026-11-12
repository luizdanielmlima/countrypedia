import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const PaginationWrapper = styled.div`
  margin: 0 ${(props) => props.theme.spacings.medium};

  display: flex;
  align-items: center;

  ${down('xl')} {
    margin: 0;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: ${(props) => props.theme.spacings.xxSmall};
  }
`;

export const PaginationButton = styled.button`
  cursor: pointer;
  margin: 0 ${(props) => props.theme.spacings.xxSmall};
  padding: 0;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: inherit;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.colors.primaryVariant};
  }

  /* bigger tap targets */
  ${down('xl')} {
    min-width: 36px;
    min-height: 36px;
    margin: 0;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const PaginationInfo = styled.div`
  margin: 0 ${(props) => props.theme.spacings.small};

  display: flex;
  align-items: center;
  justify-content: center;

  ${down('xl')} {
    margin: 0 ${(props) => props.theme.spacings.xSmall};
  }
`;

export const PaginationSeparator = styled.p`
  margin: -6px;
`;

export const PageTotals = styled.div`
  margin-right: ${(props) => props.theme.spacings.small};
  display: flex;
  align-items: center;

  p:last-child {
    font-weight: 600;
  }

  ${down('xl')} {
    margin-right: 0;
  }
`;

export const PaginationValue = styled.div`
  text-align: center;
  min-width: 30px;
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  font-weight: 600;
`;
