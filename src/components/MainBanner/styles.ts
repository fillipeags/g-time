import styled from 'styled-components';

import MiranhaImg from '../../assets/miranha.png';

export const BackLine = styled.div`
  width: 45%;
  height: 500px;

  border: 4px solid rgba(67, 22, 219, 1);
  border-radius: 20px;

  margin-left: 375px;
  margin-top: 120px;

  position: absolute;

  z-index: -1;
`;

export const Container = styled.div`
  margin-top: 90px;

  width: 100%;
  height: 450px;

  border-radius: 25px;

  background: linear-gradient(
    258.98deg,
    rgba(0, 0, 0, 0) 11.89%,
    #000000 82.8%
  );

  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);

  background-image: linear-gradient(
      51deg,
      rgba(0, 0, 0, 1) 27%,
      rgba(0, 0, 0, 1) 38%,
      rgba(0, 0, 0, 0.22452731092436973) 100%
    ),
    url(${MiranhaImg});

  background-position: center;
`;

export const Content = styled.div`
  padding-top: 80px;
  padding-left: 80px;

  h1 {
    font-weight: bold;
    font-size: 64px;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    width: 480px;
    font-weight: normal;
    font-size: 20px;
    color: ${({ theme }) => theme.colors[600]};
  }

  h3 {
    font-weight: normal;
    color: ${({ theme }) => theme.colors[600]};
    margin: 0;
  }
`;

export const PlatformsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 18px;

  margin-bottom: 50px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 26px 0px;
  border-radius: 15px;
  border: none;

  font-size: 20px;
  font-weight: medium;
  text-transform: uppercase;

  background: linear-gradient(
    83.93deg,
    #4316db -6.08%,
    rgba(70, 27, 214, 0.445656) 67.34%,
    rgba(58, 0, 255, 0) 158.91%
  );

  filter: drop-shadow(0px 2px 20px rgba(255, 255, 255, 0.2))
    drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12))
    drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.2));

  color: ${({ theme }) => theme.colors.gray[100]};
`;
