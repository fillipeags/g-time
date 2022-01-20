import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px 0px 40px 0px;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);

  background-position: center;
  background-size: cover;

  padding: 0px;
  width: 100%;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 90%;
    padding: 25px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
    padding: 16px;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    width: 90%;
    padding: 14px;
  }
`;

export const Content = styled.div`
  padding: 80px 0px 40px 80px;
  height: 320px;

  h1 {
    font-weight: bold;
    font-size: 72px;
    text-transform: uppercase;
    margin: 0;
    padding-bottom: 20px;
    word-break: break-word;
    max-width: 900px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) and (max-width: 1440px) {
    h1 {
      font-size: 56px;
    }
    padding: 20px 0px 10px 20px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 40px;
      max-width: 400px;
    }
    padding: 20px 0px 20px 30px;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    h1 {
      font-size: 40px;
      max-width: 400px;
    }
    padding: 20px 0px 20px 30px;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    h1 {
      font-size: 24px;
      max-width: 250px;
    }

    padding: 40px 0px 20px 40px;
  }
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

  &:hover {
    opacity: 0.8;
    transition: 0.3s ease-in-out;
  }
`;

export const MainBannerContainer = styled.div`
  width: 75vw;
`;

export const PlatformsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 20px;

  margin-bottom: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 425px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const Platforms = styled.div`
  display: flex;
  margin-right: 40px;
`;
