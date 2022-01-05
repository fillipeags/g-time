import styled from 'styled-components';

export const Container = styled.div`
  width: 248px;
  height: 260px;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);

  background-size: cover;
  background-position: center center;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin-bottom: 40px;
  margin-left: 10px;

  #cardHover {
    z-index: -1;
    transform: scaleY(0.1);
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

export const Content = styled.div``;

export const GameInfo = styled.div`
  position: absolute;
  h4 {
    margin-bottom: 0px;
    font-weight: 400;
    font-size: 16px;
    text-transform: unset;
    word-break: break-word;
    width: 210px;
  }

  h4,
  p {
    margin-left: 25px;
  }

  p {
    font-size: 16px;
  }

  margin-bottom: 10px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
  flex-wrap: wrap;
`;

export const ItemNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 60vh;

  img {
    width: 200px;
  }

  h2 {
    font-weight: 200;
  }
`;
