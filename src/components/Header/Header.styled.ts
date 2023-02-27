import styled from 'styled-components';
import { down } from 'styled-breakpoints';

import HeaderLogo from './HeaderLogo';

export const HeaderLogoStyled = styled(HeaderLogo)`
  max-width: 200px;
`;

export const HeaderWrapper = styled.div`
  padding-top: ${(props) => props.theme.spacings.large};
  padding-bottom: ${(props) => props.theme.spacings.medium};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${down('xl')} {
    flex-direction: column;

    p span {
      display: none;
    }

    svg {
      width: 100%;
    }
  }
`;
export const HeaderCredits = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${down('xl')} {
    flex-direction: column;
  }
`;

export const HeaderRightSide = styled.div`
  margin-left: ${(props) => props.theme.spacings.xSmall};
  padding-top: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};

  flex-grow: 1;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  p,
  a {
    margin-bottom: ${(props) => props.theme.spacings.xSmall};
  }

  svg {
    margin-bottom: ${(props) => props.theme.spacings.xxSmall};
  }

  a,
  a:visited {
    font-size: ${(props) => props.theme.fontSizes.xSmall};
    color: ${(props) => props.theme.colors.secondary} !important;
    text-decoration: none;
    font-weight: 600;
  }

  a:hover,
  a:active {
    color: ${(props) => props.theme.colors.secondaryVariant};
  }

  ${down('xl')} {
    border-bottom: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      margin: 0;
    }

    svg {
      margin-top: ${(props) => props.theme.spacings.xxSmall};
    }
  }
`;
