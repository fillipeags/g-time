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
  ResetButton,
} from './styles';

export interface ISearchProps {
  target: HTMLInputElement;
}

const Search: React.FC = () => {
  const filterOptions = ['Popular', 'New Games', 'Upcoming Games'];

  const filterTranslation = {
    Popular: 'popularGames',
    'New Games': 'newGames',
    'Upcoming Games': 'upcomingGames',
    '': 'searchGame',
  };

  const [active, setActive] = useState('');

  const [searchTerm, setSearchTerm] = useState('');

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

        {filterOptions.map(type => (
          <FilterButton
            key={type}
            type="button"
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </FilterButton>
        ))}

        <ResetButton type="button" onClick={() => setActive('')}>
          Reset Filter
        </ResetButton>
      </Filter>

      <SmallCard
        searchTerm={searchTerm}
        fetchUrl={requests.searchGame}
        filter={filterTranslation[active]}
      />
    </Container>
  );
};

export default Search;
