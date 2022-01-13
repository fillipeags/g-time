import React, { useState } from 'react';

import requests from '../../services/api/requests';

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

export interface ISearchProps {
  target: HTMLInputElement;
}

const Search: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // eslint-disable-next-line no-console
  console.log(setIsActive);

  const handleSearchInput = (event: ISearchProps) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <HeaderContainer>
        <SearchInput
          handleSearchInput={handleSearchInput}
          searchTerm={searchTerm}
        />
        <MyProfile />
      </HeaderContainer>

      <Filter>
        <FilterIcon size={28} color="#DEE3ED" />
        <p>Quick Filter</p>
        <FilterButton type="button" active={isActive}>
          Popular
        </FilterButton>
        <FilterButton type="button" active={isActive}>
          New Games
        </FilterButton>
        <FilterButton type="button" active={isActive}>
          Just Released
        </FilterButton>
      </Filter>

      <SmallCard searchTerm={searchTerm} fetchUrl={requests.searchGame} />
    </Container>
  );
};

export default Search;
