import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';

import { RootState } from '../../store';
import { countriesActions } from '../../store/countries';
import { Rotate } from '../../styles/Animations.styled';
import { darkTheme, lightTheme } from '../../styles/theme';

const StyledSVGIcon = styled(ReactSVG)<{ animate: 'true' | 'false' }>`
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin-left: ${(props: any) => props.theme.spacings.medium};

  animation: ${(props) =>
    props.animate === 'true' &&
    css`
      ${Rotate} 0.5s 1 forwards
    `};

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.primaryVariant};
    }
  }
`;

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const theme = useSelector(
    (state: RootState) => state.countries.theme,
  );

  const [anim, setAnim] = useState<'true' | 'false'>('false');

  const stopAnimation = () => {
    setTimeout(() => setAnim('false'), 500);
  };

  const handleSwitchTheme = () => {
    setAnim('true');
    if (theme.name === 'dark') {
      dispatch(countriesActions.setTheme(lightTheme));
      stopAnimation();
    }
    if (theme.name === 'light') {
      dispatch(countriesActions.setTheme(darkTheme));
      stopAnimation();
    }
  };

  return (
    <StyledSVGIcon
      src="/icons/theme-switch.svg"
      width="100%"
      height="100%"
      onClick={handleSwitchTheme}
      aria-label="theme-switch"
      animate={anim}
    />
  );
};

export default ThemeSwitcher;
