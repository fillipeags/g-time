import styled from 'styled-components';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

export const Container = styled.div`
  width: 25%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  color: white;

  border-right: 1px solid white;
`;

export const Logo = styled(LogoImg)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 164px;
  height: 212px;

  margin-top: 25px;
  margin-bottom: 90px;
`;

export const MenuItem = styled.li`
  /* width: 250px; */
  height: 50px;

  text-transform: uppercase;

  list-style-type: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;
