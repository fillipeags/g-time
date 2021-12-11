import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  padding: 0px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ActionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin-top: 20px;

  gap: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;

  border-radius: 15px;
  border: none;

  color: ${({ theme }) => theme.colors.gray[100]};
  background: linear-gradient(
    83.93deg,
    #4316db -6.08%,
    rgba(70, 27, 214, 0.445656) 67.34%,
    rgba(58, 0, 255, 0) 158.91%
  );

  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    opacity: 0.8;
    transition: 0.3s ease-in-out;
  }
`;
