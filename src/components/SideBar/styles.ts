import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

interface MenuItemProps {
  active?: boolean;
  $isexpanded?: boolean;
}

export const Container = styled.div<MenuItemProps>`
  width: ${({ $isexpanded }) => ($isexpanded ? '25%' : '10%')};

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  transition: 0.3s ease-in;
`;

export const Content = styled.div`
  position: fixed;
`;

export const BackHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// eslint-disable-next-line prettier/prettier
export const Logo = styled(LogoImg) <MenuItemProps>`
  ${({ $isexpanded }) =>
    $isexpanded
      ? css`
          width: 120px;
          margin: 16px 0px 50px 50px;
        `
      : css`
          width: 80px;
          margin: 0px 0px 20px 40px;
        `}

  @media screen and (max-width: 1400px) {
    width: 80px;
    margin: 0px 0px 20px 30px;
    transition: 0.3s ease-in;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.li<MenuItemProps>`
  display: flex;
  align-items: center;

  margin-bottom: 30px;

  padding: 14px;

  ${({ $isexpanded }) =>
    $isexpanded
      ? css`
          width: 200px;
          margin-left: 50px;
        `
      : css`
          width: 44px;
          margin-left: 40px;

          span {
            display: none;
          }
        `}

  text-transform: uppercase;
  list-style-type: none;

  span {
    font-size: 24px;
    font-weight: medium;
  }

  ${({ active }) =>
    active &&
    css`
      background: linear-gradient(
        83.93deg,
        #4316db -6.08%,
        rgba(70, 27, 214, 0.445656) 67.34%,
        rgba(58, 0, 255, 0) 158.91%
      );
      filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
      border-radius: 15px;

      &:hover {
        opacity: 0.8;
      }
    `}

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        opacity: 0.8;
      }
    `}

    @media screen and (max-width: 1400px) {
    width: 40px;
    margin-left: 40px;

    span {
      display: none;
    }

    transition: 0.3s ease-in;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  margin-left: 8px;
`;

export const CollapseContainer = styled.div`
  margin-top: 60px;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
