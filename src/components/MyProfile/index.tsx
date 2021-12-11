import { useState } from 'react';
import { FiChevronDown, FiLogOut, FiSettings, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AvatarContainer, DropDownContainer, Option } from './styles';

const MyProfile = () => {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdownClick() {
    setDropdown(!dropdown);
  }

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
              <p>Logout</p>
            </Option>
            <hr />
          </Link>
        </DropDownContainer>
      )}
      <img
        src="https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png"
        alt="User Avatar"
      />

      <FiChevronDown size={24} />
    </AvatarContainer>
  );
};

export default MyProfile;
