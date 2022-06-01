import styled from 'styled-components';

export const Container = styled.main``;

export const Content = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Unauthorized = styled.div`
  height: 60vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-transform: uppercase;
    font-size: 48px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 32px;
    }

    height: 70vh;
  }
`;
