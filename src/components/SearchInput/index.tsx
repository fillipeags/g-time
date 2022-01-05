import { FiSearch } from 'react-icons/fi';
import { ISearchProps } from '../../pages/Search';

import { Container, Search } from './styles';

interface ISearchInputProps {
  handleSearchInput: (event: ISearchProps) => void;
  searchTerm: string;
}

const SearchInput = ({ handleSearchInput, searchTerm }: ISearchInputProps) => {
  return (
    <Container>
      <Search
        type="text"
        placeholder="Search Game..."
        onChange={handleSearchInput}
        value={searchTerm}
      />
      <FiSearch size={28} color="#F8F9FC" />
    </Container>
  );
};

export default SearchInput;
