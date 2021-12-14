import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 54px;
    height: 54px;

    border-radius: 10px;
  }
  z-index: 9999999;

  cursor: pointer;
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

export const SignInButton = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-weight: 300;
`;
