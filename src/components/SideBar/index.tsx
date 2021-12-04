import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

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

  const sideBarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(!sideBarCollapsed);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);

      localStorage.setItem('repositories', JSON.stringify(true));
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  return (
    <Container isExpanded={isExpanded}>
      <Content>
        <BackHome to="/">
          <Logo isExpanded={isExpanded} />
        </BackHome>

        <Nav>
          <ul>
            {SideBarMenu.map(item => {
              return (
                <MenuItem
                  active={currentPath === item.path}
                  key={item.path}
                  collapsed={isExpanded}
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
