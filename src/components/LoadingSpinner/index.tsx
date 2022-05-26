import { Container, Spinner } from './styles';

interface ILoadingSpinnerProps {
  isLoading: boolean;
  size?: number;
}

const LoadingSpinner = ({ isLoading, size }: ILoadingSpinnerProps) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Container>
      <Spinner size={size ?? 100} />
      <h1>Just Wait a Second...</h1>
    </Container>
  );
};

export default LoadingSpinner;
