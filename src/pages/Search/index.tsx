import React from 'react';
import MyProfile from '../../components/MyProfile';
import SearchInput from '../../components/SearchInput';
import { Container } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <SearchInput />
      <MyProfile />
    </Container>
  );
};

export default Search;
