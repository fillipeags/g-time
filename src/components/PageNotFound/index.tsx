import { MdOutlineErrorOutline } from 'react-icons/md';
import Container from './styles';

function PageNotFound() {
  return (
    <Container>
      <h1>Oops ! This Page doesnt seem to exist Yet</h1>
      <MdOutlineErrorOutline size={120} />
    </Container>
  );
}

export default PageNotFound;
