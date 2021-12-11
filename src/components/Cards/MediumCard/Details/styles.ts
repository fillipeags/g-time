import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  height: 280px;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0px 0px 40px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PlayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  background: linear-gradient(
    83.93deg,
    #4316db -6.08%,
    rgba(70, 27, 214, 0.445656) 67.34%,
    rgba(58, 0, 255, 0) 158.91%
  );
  border-radius: 50%;
  border: none;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;

  gap: 40px;

  h4 {
    color: ${({ theme }) => theme.colors.gray[200]};
    font-weight: 400;
    font-size: 24px;
  }
`;

export const Rating = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-left: 50px;
`;

export const GameDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 85%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0px;

    span {
      color: ${({ theme }) => theme.colors.gray[500]};
      font-weight: light;
    }
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  gap: 10px;
`;
export const Button = styled.button`
  width: 260px;
  height: 50px;
  border-radius: 15px;
  border: none;
  background: linear-gradient(
    83.93deg,
    #4316db -6.08%,
    rgba(70, 27, 214, 0.445656) 67.34%,
    rgba(58, 0, 255, 0) 158.91%
  );

  color: ${({ theme }) => theme.colors.gray[100]};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    opacity: 0.8;
    transition: 0.3s ease-in-out;
  }
`;
