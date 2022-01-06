import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import SideBarMenu from './SideBarMenu';
import usePathName from '../../hooks/usePathName';

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

const SideBar = () => {
  const currentPath = usePathName();

  const sideBarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(!sideBarCollapsed);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);

      localStorage.setItem('sidebar-collapsed', JSON.stringify(true));
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  return (
    <Container $isexpanded={isExpanded}>
      <Content>
        <BackHome to="/">
          <Logo $isexpanded={isExpanded} />
        </BackHome>

        <Nav>
          <ul>
            {SideBarMenu.map(item => {
              return (
                <MenuItem
                  active={currentPath === item.path}
                  key={item.path}
                  $isexpanded={isExpanded}
                >
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

        <CollapseContainer onClick={handleToggler}>
          {isExpanded ? (
            <FiChevronsLeft size={18} />
          ) : (
            <FiChevronsRight size={18} />
          )}
          <p>{isExpanded ? 'collapse' : 'expand'}</p>
        </CollapseContainer>
      </Content>
    </Container>
  );
};

export default SideBar;
