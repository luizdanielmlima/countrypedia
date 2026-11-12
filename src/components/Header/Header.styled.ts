import styled from 'styled-components';
import { down } from 'styled-breakpoints';

import HeaderLogo from './HeaderLogo';

export const HeaderLogoStyled = styled(HeaderLogo)`
  ${down('xl')} {
    grid-column: 1;
    justify-self: start;
    width: clamp(160px, 62vw, 280px);
    max-width: 100%;
    height: auto;
  }
`;

export const HeaderWrapper = styled.div`
  flex: none;
  padding-top: ${(props) => props.theme.spacings.large};
  padding-bottom: ${(props) => props.theme.spacings.medium};

  display: flex;
  /* stretch so the underline (on the right side) lines up with the bottom of the logo */
  align-items: stretch;
  justify-content: flex-start;

  ${down('xl')} {
    margin-bottom: ${(props) => props.theme.spacings.small};
    padding-top: ${(props) => props.theme.spacings.medium};
    padding-bottom: ${(props) => props.theme.spacings.small};

    /* logo on the left, icons on the right */
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
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

  ${down('xl')} {
    grid-column: 2;
    justify-self: end;
    margin-left: 0;
    padding-top: 0;
    border-bottom: none;
    flex-grow: 0;
    align-items: center;
  }
`;
