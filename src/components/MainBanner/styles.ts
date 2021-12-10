import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px 0px 40px 2px;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
  background-position: center;

  padding: 4px;
`;

export const Content = styled.div`
  padding: 80px 0px 40px 80px;

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

  color: ${({ theme }) => theme.colors.gray[100]};

  background: linear-gradient(
    83.93deg,
    #4316db -6.08%,
    rgba(70, 27, 214, 0.445656) 67.34%,
    rgba(58, 0, 255, 0) 158.91%
  );
  box-shadow: 0 8px 32px 0 rgba(70, 27, 214, 0.445656);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

export const MainBannerContainer = styled.div`
  width: 72vw;
`;
