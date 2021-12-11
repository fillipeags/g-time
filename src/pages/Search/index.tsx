/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';

import SmallCard from '../../components/Cards/SmallCard';
import MyProfile from '../../components/MyProfile';
import SearchInput from '../../components/SearchInput';
import {
  Container,
  Filter,
  FilterButton,
  FilterIcon,
  HeaderContainer,
} from './styles';

const Search: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <SearchInput />
        <MyProfile />
      </HeaderContainer>

      <Filter>
        <FilterIcon size={28} color="#DEE3ED" />
        <p>Quick Filter</p>
        <FilterButton
          type="button"
          active={isActive}
          onClick={() => setIsActive(isActive)}
        >
          Popular
        </FilterButton>
        <FilterButton type="button" active={isActive}>
          New Games
        </FilterButton>
        <FilterButton type="button" active={isActive}>
          Just Released
        </FilterButton>
      </Filter>

      <SmallCard />
    </Container>
  );
};

export default Search;
