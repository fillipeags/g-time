/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';

import SmallCard from '../../components/Cards/SmallCard';
import MyProfile from '../../components/MyProfile';
import SearchInput from '../../components/SearchInput';
import api from '../../services/api';
import { searchGame } from '../../services/api/requests';
import {
  Container,
  Filter,
  FilterButton,
  FilterIcon,
  HeaderContainer,
} from './styles';

export interface ISearchProps {
  target: HTMLInputElement;
}

const Search: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (event: ISearchProps) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <HeaderContainer>
        <SearchInput searchValue={handleSearchInput} />
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

      <SmallCard searchTerm={searchTerm} />
    </Container>
  );
};

export default Search;
