import React from 'react';
import MyProfile from '../MyProfile';

import Container from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>
        Welcome Back, <strong>John</strong>
      </h1>

      <MyProfile />
    </Container>
  );
};

export default Header;
