import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 450px;

  padding: 4px;

  #cardHover {
    z-index: -1;
    transform: scaleY(0.4);
    transform-origin: bottom;
    transition: transform 0.4s ease-out;
  }

  &:hover {
    #cardHover {
      z-index: 0;
      transform: scaleY(1);
      transition: transform 0.2s ease-in;
    }

    #gameInfo {
      z-index: -1;
    }
  }
`;

export const Content = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 40px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);

  background-size: cover;

  display: flex;
  align-items: flex-end;
`;

export const GameInfo = styled.div`
  position: absolute;
  h4 {
    margin-bottom: 0px;
    font-weight: 400;
    font-size: 20px;
  }

  h4,
  p {
    margin-left: 25px;
  }

  p {
    font-size: 18px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardsContainer = styled.div`
  width: 72vw;

  margin-bottom: 40px;
`;
