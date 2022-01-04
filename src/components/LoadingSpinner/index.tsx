import { Container, Spinner } from './styles';

interface ILoadingSpinner {
  isLoading: boolean;
}

const LoadingSpinner = ({ isLoading }: ILoadingSpinner) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Container>
      <Spinner />
      <h1>Just Wait a Second...</h1>
    </Container>
  );
};

export default LoadingSpinner;
