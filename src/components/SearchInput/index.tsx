import { FiSearch } from 'react-icons/fi';

import { Container, Search } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <Search type="text" placeholder="Search Game..." />
      <FiSearch size={28} color="#DEE3ED" />
    </Container>
  );
};

export default SearchInput;
