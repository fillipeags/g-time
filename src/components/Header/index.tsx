import React from 'react';

import { FiChevronDown } from 'react-icons/fi';
import { AvatarContainer, Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>
        Welcome Back, <strong>John</strong>
      </h1>

      <AvatarContainer>
        <img
          src="https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png"
          alt="User Avatar"
        />

        <FiChevronDown size={30} />
      </AvatarContainer>
    </Container>
  );
};

export default Header;
