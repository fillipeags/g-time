import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  width: 100%;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
  background-position: center;
  margin-left: 2px;
`;

export const Content = styled.div`
  padding-top: 80px;
  padding-left: 80px;

  padding-bottom: 40px;

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

  margin-bottom: 60px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 20px 0px;
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
