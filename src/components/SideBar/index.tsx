import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import SideBarMenu from './nav';

const SideBar: React.FC = () => {
  return (
    <Container>
      <nav>
        <ul>
          {SideBarMenu.map(item => {
            return (
              <li>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default SideBar;
