import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Logo, MenuItem, OptionContainer } from './styles';
import SideBarMenu from './SideBarMenu';

const SideBar: React.FC = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const currentPath = usePathname();

  return (
    <Container>
      <Logo />

      <nav>
        <ul>
          {SideBarMenu.map(item => {
            return (
              <MenuItem active={currentPath === item.path}>
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
    </Container>
  );
};

export default SideBar;
