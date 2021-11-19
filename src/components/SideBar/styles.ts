import styled from 'styled-components';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

export const Container = styled.div`
  width: 25%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled(LogoImg)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;

  margin-bottom: 50px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 30px;
  margin-left: 90px;

  width: 250px;
  height: 50px;

  text-transform: uppercase;
  list-style-type: none;

  span {
    font-size: 24px;
    font-weight: medium;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  &:hover {
    transition: 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.primary.medium};
  }
`;
