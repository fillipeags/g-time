import React from 'react';
import useAuth from '../../hooks/useAuth';
import MyProfile from '../MyProfile';

import Container from './styles';

const Header = () => {
  const { user } = useAuth();

  return (
    <Container>
      {user ? (
        <h1>
          Welcome Back, <strong>{user?.name}</strong>
        </h1>
      ) : (
        <h1>Welcome to G-TIME</h1>
      )}

      <MyProfile />
    </Container>
  );
};

export default Header;
