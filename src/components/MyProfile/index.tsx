import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiSettings, FiUser, FiLogOut } from 'react-icons/fi';

import { Toaster } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import defaultAvatarImg from '../../assets/defaultAvatarImage.png';

import {
  AvatarContainer,
  AvatarContent,
  DropDownContainer,
  Login,
  Option,
} from './styles';

const MyProfile = () => {
  const [dropdown, setDropdown] = useState(false);
  const { signInWithGoogle, signOut, user } = useAuth();

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  function handleSignOut() {
    signOut();
  }

  function handleDropdownClick() {
    setDropdown(!dropdown);
  }

  return (
    <AvatarContainer>
      <Toaster position="top-center" reverseOrder={false} />

      {user ? (
        <AvatarContent onClick={() => handleDropdownClick()}>
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
                <Option onClick={() => handleSignOut()}>
                  <FiLogOut size={24} />
                  <p>SignOut</p>
                </Option>
                <hr />
              </Link>
            </DropDownContainer>
          )}
          <img src={user ? user.avatar : defaultAvatarImg} alt="User Avatar" />
          <FiChevronDown size={24} />
        </AvatarContent>
      ) : (
        <Login onClick={() => handleSignIn()}>Sign In</Login>
      )}
    </AvatarContainer>
  );
};

export default MyProfile;
