import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 240px;
  height: 240px;

  margin: 60px;

  border: 20px solid ${({ theme }) => theme.colors.gray[0]};
  border-radius: 50%;
  border-color: ${({ theme }) => theme.colors.primary.medium} transparent
    transparent transparent;

  animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 0.2) infinite;

  .loading div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .loading div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .loading div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
