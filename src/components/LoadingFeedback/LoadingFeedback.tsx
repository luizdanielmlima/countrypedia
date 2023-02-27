import React from 'react';

import styled from 'styled-components';
import { BounceAnimation } from '../../styles/Animations.styled';

const LoadingContainer = styled.div`
  height: 96px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div<{ delay: string }>`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;

  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

const LoadingFeedback = () => {
  return (
    <>
      <LoadingContainer>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </LoadingContainer>
    </>
  );
};

export default LoadingFeedback;
