import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AvatarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  img {
    width: 54px;
    height: 54px;

    border-radius: 10px;
  }
  z-index: 9999999;

  cursor: pointer;

  @media (min-width: 425px) and (max-width: 1024px) {
    img {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 40px;
      height: 40px;
    }

    gap: 8px;
  }
`;

export const DropDownContainer = styled.div`
  width: 250px;
  height: 210px;

  background: linear-gradient(
    83.93deg,
    #4316db -4.08%,
    rgba(70, 27, 214, 0.8) 67.34%,
    rgba(58, 0, 255, 0) 158.91%
  );
  border-radius: 25px;

  justify-content: center;
  transition: 0.4 ease-in-out;

  position: absolute;

  right: 90px;
  top: 70px;
  z-index: -1;

  gap: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    margin: 0;
    margin-top: 6px;
    width: 160px;
  }
`;

export const Option = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    width: 65px;
    margin: 0;
    text-align: left;
    font-size: 18px;
    font-weight: 300;
  }

  &:hover {
    opacity: 0.8;
    transition: 0.3s ease-in-out;
  }
`;

export const Login = styled.button`
  width: 120px;
  height: 54px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary.medium};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray[100]};

  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
    transition: 0.4s ease-in-out;
  }

  @media (max-width: 425px) {
    width: 100px;
  }
`;
