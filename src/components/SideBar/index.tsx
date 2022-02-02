import { useState } from 'react';

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
  CollapseContainer,
  LogoContainer,
} from './styles';
import MobileSideBar from './MobileSideBar';

const SideBar = () => {
  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth,
    );
  }

  const currentWidth = getWidth();

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
    <>
      {currentWidth > 768 ? (
        <Container $isexpanded={isExpanded}>
          <Content>
            <LogoContainer to="/">
              <Logo $isexpanded={isExpanded} />
            </LogoContainer>

            <nav>
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
            </nav>

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
      ) : (
        <MobileSideBar />
      )}
    </>
  );
};

export default SideBar;
