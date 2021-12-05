/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';

import SmallCard from '../../components/Cards/SmallCard';
import MyProfile from '../../components/MyProfile';
import SearchInput from '../../components/SearchInput';
import {
  CardsContainer,
  Container,
  Filter,
  FilterButton,
  FilterIcon,
  HeaderContainer,
} from './styles';
import data from '../../database/mock';

const Search: React.FC = () => {
  const [filter, setFilter] = useState(false);

  function handleFilterButton() {
    setFilter(!filter);
  }

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
          active={filter}
          onClick={handleFilterButton}
        >
          Popular
        </FilterButton>
        <FilterButton
          type="button"
          active={filter}
          onClick={handleFilterButton}
        >
          New Games
        </FilterButton>
        <FilterButton
          type="button"
          active={filter}
          onClick={handleFilterButton}
        >
          Just Released
        </FilterButton>
      </Filter>

      <CardsContainer>
        {data.map(({ id, title, score, coverImage }) => (
          <SmallCard
            key={id}
            title={title}
            score={score}
            coverImage={coverImage}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Search;
