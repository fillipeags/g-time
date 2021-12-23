import { FiSearch } from 'react-icons/fi';
import { ISearchProps } from '../../pages/Search';

import { Container, Search } from './styles';

interface ISearchInputProps {
  searchValue: (event: ISearchProps) => void;
}

const SearchInput = ({ searchValue }: ISearchInputProps) => {
  return (
    <Container>
      <Search type="text" placeholder="Search Game..." onChange={searchValue} />
      <FiSearch size={28} color="#F8F9FC" />
    </Container>
  );
};

export default SearchInput;
