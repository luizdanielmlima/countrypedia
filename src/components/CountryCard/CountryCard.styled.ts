import styled from 'styled-components';
import { BsPeopleFill } from 'react-icons/bs';

export const CountryCardHeader = styled.div`
  position: relative;
  min-height: 2rem;
  width: 100%;
  text-align: center;
`;

export const CountryCardTitle = styled.p<{ fontSize: string }>`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
`;

export const CountryCardRegion = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
`;

export const CountryCardFlagWrapper = styled.figure<{
  selected: boolean;
}>`
  height: 90px;
  width: 100%;
  margin: 16px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    filter: ${({ theme, selected }) =>
      selected ? 'grayscale(0%)' : 'grayscale(80%)'};
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CountryCardFlag = styled.img`
  border: 1px solid ${(props) => props.theme.colors.surface};
`;

export const CountryCardBody = styled.div`
  text-align: center;
  width: 100%;
`;

export const CountryCardFooter = styled.div`
  text-align: center;
  width: 100%;
`;

export const CountryCardFooterIcon = styled(BsPeopleFill)`
  color: ${(props) => props.theme.colors.primaryVariant};
`;

export const CountryCardWrapper = styled.div<{ selected: boolean }>`
  cursor: pointer;
  width: 160px;
  padding: ${(props) => props.theme.spacings.medium};
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.small};
  box-shadow: ${({ theme, selected }) =>
    selected ? theme.shadows.xLarge : theme.shadows.xSmall};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 300ms ease-in;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.xLarge};

    img {
      filter: grayscale(0%);
    }

    ${CountryCardTitle}, ${CountryCardFooterIcon} {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 900;
    }

    ${CountryCardRegion} {
      font-weight: 600;
    }
  }
`;
