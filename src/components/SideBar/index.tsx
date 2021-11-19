import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, MenuItem, OptionContainer } from './styles';
import SideBarMenu from './SideBarMenu';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Logo />

      <nav>
        <ul>
          {SideBarMenu.map(item => {
            return (
              <MenuItem>
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
