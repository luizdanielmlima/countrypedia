import styled from 'styled-components';

export const InfoButton = styled.button`
  cursor: pointer;
  flex: none;
  width: 18px;
  height: 18px;
  margin-left: ${(props) => props.theme.spacings.medium};
  padding: 0;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => props.theme.colors.primaryVariant};
  }
`;

export const InfoDialogStyled = styled.dialog`
  /* margin: auto centers the dialog on screen (the global * reset removes it) */
  margin: auto;
  width: min(320px, calc(100vw - 2 * ${(props) => props.theme.spacings.medium}));
  padding: 0;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.small};
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.xLarge};

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const DialogContent = styled.div`
  position: relative;
  padding: ${(props) =>
    `${props.theme.spacings.xxLarge} ${props.theme.spacings.large}`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${(props) => props.theme.spacings.xLarge};

  a,
  a:visited {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
    font-weight: 600;
  }

  a:hover,
  a:active {
    color: ${(props) => props.theme.colors.secondaryVariant};
  }
`;

export const Chunk = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacings.xSmall};
`;

export const Label = styled.p`
  /* !important: AppWrapper sets the size of every p */
  font-size: ${(props) => props.theme.fontSizes.xSmall} !important;
  font-weight: 300;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.theme.spacings.xSmall};
  right: ${(props) => props.theme.spacings.xSmall};
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
  line-height: 1;

  &:hover {
    color: ${(props) => props.theme.colors.primaryVariant};
  }
`;
