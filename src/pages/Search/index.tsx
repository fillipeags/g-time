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

import smallCardImg from '../../assets/mediumCardEx.png';

const data = [
  {
    id: 1,
    title: 'Dying Light',
    score: 7.6,
    coverImage: smallCardImg,
  },
  {
    id: 2,
    title: 'Naruto',
    score: 8.0,
    coverImage: smallCardImg,
  },
  {
    id: 3,
    title: 'Batman Arkham City',
    score: 9.0,
    coverImage: smallCardImg,
  },
];

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

      <SmallCard title="Teste" score={7.4} coverImage={smallCardImg} />
      <SmallCard title="Teste" score={7.4} coverImage={smallCardImg} />
      <SmallCard title="Teste" score={7.4} coverImage={smallCardImg} />
      <SmallCard title="Teste" score={7.4} coverImage={smallCardImg} />
    </Container>
  );
};

export default Search;
