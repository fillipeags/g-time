import MyProfile from '../MyProfile';
import Container from './styles';

import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user } = useAuth();

  return (
    <Container>
      {user && (
        <h1>
          Welcome Back, <strong>{user?.name}</strong>
        </h1>
      )}

      {!user && <h1>Welcome to G-TIME</h1>}

      <MyProfile />
    </Container>
  );
};

export default Header;
