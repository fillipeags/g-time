import { Container, Spinner } from './styles';

const LoadingSpinner: React.FC = () => {
  return (
    <Container>
      <Spinner />
      <h1>Just Wait a Second...</h1>
    </Container>
  );
};

export default LoadingSpinner;
