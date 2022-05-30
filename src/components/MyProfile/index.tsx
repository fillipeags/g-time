import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import {
  FiChevronDown,
  FiSettings,
  FiUser,
  FiLogOut,
  FiX,
} from 'react-icons/fi';

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

  const handleSignIn = async () => {
    if (!user) {
      await signInWithGoogle();
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  const handleDropdownClick = () => {
    setDropdown(!dropdown);
  };

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

          <img
            src={user.avatar !== '' ? user.avatar : defaultAvatarImg}
            alt="User Avatar"
          />

          {dropdown ? <FiX size={24} /> : <FiChevronDown size={24} />}
        </AvatarContent>
      ) : (
        <Login onClick={() => handleSignIn()}>Sign In</Login>
      )}
    </AvatarContainer>
  );
};

export default MyProfile;
