import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiLogOut, FiSettings, FiUser } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';

import {
  AvatarContainer,
  DropDownContainer,
  Option,
  SignInButton,
} from './styles';

const MyProfile = () => {
  const [dropdown, setDropdown] = useState(false);

  const { signInWithGoogle, user } = useAuth();

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  function handleDropdownClick() {
    setDropdown(!dropdown);
  }

  const defaultImage =
    'https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png';

  return (
    <AvatarContainer onClick={() => handleDropdownClick()}>
      {dropdown && (
        <DropDownContainer>
          <Link to="/">
            <Option>
              <FiUser size={24} />
              <p>Profile</p>
            </Option>
            <hr />
          </Link>
          <Link to="/">
            <Option>
              <FiSettings size={24} />
              <p>Settings</p>
            </Option>
            <hr />
          </Link>
          <Link to="/">
            <Option>
              <FiLogOut size={24} />
              <SignInButton onClick={() => handleSignIn()}>
                <p>SignIn</p>
              </SignInButton>
            </Option>
            <hr />
          </Link>
        </DropDownContainer>
      )}
      <img src={user ? user?.avatar : defaultImage} alt="User Avatar" />

      <FiChevronDown size={24} />
    </AvatarContainer>
  );
};

export default MyProfile;
