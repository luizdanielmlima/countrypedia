import styled from 'styled-components';

import { FadeFromBottom } from '../../styles/Animations.styled';

export const ModalDialog = styled.dialog`
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: none;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};

  /* only when open: setting display on the closed dialog would show it */
  &[open] {
    display: flex;
    flex-direction: column;
    animation: ${FadeFromBottom} 250ms ease-out;
  }

  &::backdrop {
    background-color: ${(props) => props.theme.colors.background};
  }

  @media (prefers-reduced-motion: reduce) {
    &[open] {
      animation: none;
    }
  }
`;

export const ModalTopBar = styled.div`
  flex: none;
  padding: ${(props) =>
    `calc(${props.theme.spacings.small} + env(safe-area-inset-top)) ${props.theme.spacings.medium} ${props.theme.spacings.small}`};
  padding-left: ${(props) =>
    `calc(${props.theme.spacings.medium} + env(safe-area-inset-left))`};
  padding-right: ${(props) =>
    `calc(${props.theme.spacings.medium} + env(safe-area-inset-right))`};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

export const BackButton = styled.button`
  cursor: pointer;
  min-height: 40px;
  padding: 0;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.primary};
  font: inherit;
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.xSmall};

  &:hover {
    color: ${(props) => props.theme.colors.primaryVariant};
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: ${(props) => props.theme.spacings.medium};
  padding-left: ${(props) =>
    `calc(${props.theme.spacings.medium} + env(safe-area-inset-left))`};
  padding-right: ${(props) =>
    `calc(${props.theme.spacings.medium} + env(safe-area-inset-right))`};
  padding-bottom: ${(props) =>
    `calc(${props.theme.spacings.medium} + env(safe-area-inset-bottom))`};
`;
