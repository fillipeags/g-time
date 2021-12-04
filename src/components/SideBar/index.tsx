import React from 'react';
import { Link } from 'react-router-dom';

import { FiChevronsLeft } from 'react-icons/fi';

import {
  Container,
  Logo,
  MenuItem,
  OptionContainer,
  Nav,
  CollapseContainer,
} from './styles';

import SideBarMenu from './SideBarMenu';
import usePathName from '../../hooks/usePathName';

const SideBar: React.FC = () => {
  const currentPath = usePathName();

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

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
    </Container>
  );
};

export default SideBar;
