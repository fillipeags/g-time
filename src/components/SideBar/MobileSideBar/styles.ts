import styled from 'styled-components';

interface MenuItemProps {
  active?: boolean;
}

export const Wrapper = styled.div``;

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  left: 50%;
  right: 0;
  z-index: 1000;

  transform: translate(-50%, 0);

  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 22px;

  border-radius: 28px 28px 0px 0px;

  background-color: ${({ theme }) => theme.colors.gray[800]};
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const MenuItem = styled.li<MenuItemProps>`
  list-style-type: none;

  a {
    color: ${({ active, theme }) => active && theme.colors.primary.medium};
  }
`;
