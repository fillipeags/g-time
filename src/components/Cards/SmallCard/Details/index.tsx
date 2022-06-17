import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useGamesStore from '../../../../hooks/useGamesStore';
import { ActionContainer, Button, Container, Content } from './styles';

interface ISmallCardDetailsProps {
  id: string;
  gameId: number;
  name: string;
}

const SmallCardDetails = ({ id, gameId, name }: ISmallCardDetailsProps) => {
  const { savedToList, loading, handleStoreGame, filterStoredGames } =
    useGamesStore(gameId!, name);

  useEffect(() => {
    filterStoredGames();
  }, [filterStoredGames]);

  return (
    <Container id={id}>
      <Content>
        <ActionContainer>
          <Link to={`/game/${gameId}`}>
            <Button>See More</Button>
          </Link>
          {loading ? (
            <Button disabled={loading}>
              <RotatingLines width="26" strokeColor="#FFF" />
            </Button>
          ) : (
            <Button onClick={handleStoreGame} disabled={loading}>
              {savedToList ? 'Remove from List' : 'Add To My Games'}
            </Button>
          )}
        </ActionContainer>
      </Content>
    </Container>
  );
};

export default SmallCardDetails;
