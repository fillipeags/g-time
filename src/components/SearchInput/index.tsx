import { FiSearch } from 'react-icons/fi';

import themes from '../../styles/themes';

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
      <FiSearch size={28} color={themes.colors.gray[100]} />
    </Container>
  );
};

export default SearchInput;
