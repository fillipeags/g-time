import styled from 'styled-components';

import mediumCardImg from '../../../assets/mediumCardEx.png';

export const Container = styled.div`
  width: 100%;

  h2 {
    margin-bottom: 25px;
  }
`;

export const Content = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 40px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);

  background-size: cover;
  background-image: linear-gradient(
      65deg,
      rgba(0, 0, 0, 1) 2%,
      rgba(0, 0, 0, 1) 8%,
      rgba(0, 0, 0, 0.22452731092436973) 76%
    ),
    url(${mediumCardImg});

  display: flex;
  align-items: flex-end;

  margin-bottom: 40px;
`;

export const GameInfo = styled.div`
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
