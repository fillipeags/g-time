import React from 'react';
import { Link } from 'react-router-dom';

import { FiChevronsLeft } from 'react-icons/fi';

import {
  Container,
  Content,
  Logo,
  MenuItem,
  OptionContainer,
  Nav,
  CollapseContainer,
  BackHome,
} from './styles';

import SideBarMenu from './SideBarMenu';
import usePathName from '../../hooks/usePathName';

const SideBar: React.FC = () => {
  const currentPath = usePathName();

  return (
    <Container>
      <Content>
        <BackHome to="/">
          <Logo />
        </BackHome>

        <Nav>
          <ul>
            {SideBarMenu.map(item => {
              return (
                <MenuItem active={currentPath === item.path} key={item.path}>
                  <Link to={item.path}>
                    <OptionContainer>
                      {item.icon}
                      <span>{item.title}</span>
                    </OptionContainer>
                  </Link>
                </MenuItem>
              );
            })}
          </ul>
        </Nav>

        <CollapseContainer>
          <FiChevronsLeft size={18} />
          <a href="/">collapse</a>
        </CollapseContainer>
      </Content>
    </Container>
  );
};

export default SideBar;
