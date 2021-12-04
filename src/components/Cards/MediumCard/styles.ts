import styled from 'styled-components';

import mediumCardImg from '../../../assets/mediumCardEx.png';

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 48px;
  flex-wrap: wrap;

  padding-bottom: 40px;
`;

export const Content = styled.div`
  width: 300px;
  height: 450px;
  background-image: linear-gradient(
      65deg,
      rgba(0, 0, 0, 1) 2%,
      rgba(0, 0, 0, 1) 8%,
      rgba(0, 0, 0, 0.22452731092436973) 76%
    ),
    url(${mediumCardImg});

  background-size: cover;

  display: flex;
  align-items: flex-end;

  border-radius: 40px;
`;

export const GameInfo = styled.div`
  p {
    font-size: 20px;
    margin-left: 25px;
  }
`;
