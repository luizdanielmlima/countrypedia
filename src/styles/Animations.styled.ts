import styled, { keyframes } from 'styled-components';

export const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2%)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimatedEntrance = styled.div<{ delay: number }>`
  animation: ${FadeIn} 0.5s 1 forwards;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0;
`;

export const FadeFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const AnimatedEntranceFromBottom = styled.div<{
  delay: number;
}>`
  animation: ${FadeFromBottom} 0.5s 1 forwards;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0;
`;

export const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
