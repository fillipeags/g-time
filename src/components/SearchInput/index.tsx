import { FiSearch } from 'react-icons/fi';

import { Container, Search } from './styles';

const SearchInput = () => {
  return (
    <Container>
      <Search type="text" placeholder="Search Game..." />
      <FiSearch size={28} color="#F8F9FC" />
    </Container>
  );
};

export default SearchInput;
