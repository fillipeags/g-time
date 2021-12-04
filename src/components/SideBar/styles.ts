import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

interface MenuItemProps {
  active: boolean;
}

export const Container = styled.div`
  width: 25%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Content = styled.div`
  position: fixed;
`;

export const BackHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(LogoImg)`
  width: 120px;
  margin-bottom: 50px;
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

  padding: 14px 40px;

  width: 200px;

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
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const CollapseContainer = styled.div`
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
