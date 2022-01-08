import { Container, Spinner } from './styles';

interface ILoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner = ({ isLoading }: ILoadingSpinnerProps) => {
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
