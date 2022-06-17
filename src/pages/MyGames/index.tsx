import { useCallback, useEffect, useState } from 'react';
import { MdVideogameAssetOff } from 'react-icons/md';
import LargeCard from '../../components/Cards/LargeCard';
import Header from '../../components/Header';
import LoadingSpinner from '../../components/LoadingSpinner';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import requests from '../../services/api/requests';
import FireStoreService from '../../services/database';
import { Container, Content, Unauthorized } from './styles';

interface IDatabaseInfo {
  id: number;
  name: string;
  userId: string;
}

interface IGamesList {
  id: number;
  background_image: string;
  rating: number;
  name: string;
}

const MyGames = () => {
  const [gameList, setGameList] = useState<IGamesList[]>([]);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  const getGamesList = useCallback(async () => {
    const firebaseData: IDatabaseInfo[] = await FireStoreService.getAll(
      user?.id,
    );

    if (firebaseData) {
      const gameInfo: IGamesList[] = [];

      firebaseData.map(async ({ id }) => {
        const res = await api.get(requests.getSpecificGame(id));
        gameInfo.push(res.data);

        if (firebaseData.length === gameInfo.length) {
          setGameList(gameInfo);
          setLoading(false);
        }
      });
    }
  }, [user?.id]);

  useEffect(() => {
    if (user) {
      setLoading(true);
      getGamesList();
    }
  }, [getGamesList, user]);

  return (
    <Container>
      <Header />
      {user && <h1>My Games</h1>}
      {loading && <LoadingSpinner isLoading={loading} size={240} />}
      <Content>
        {gameList.map(({ id, name, background_image, rating }) => (
          <LargeCard
            key={id}
            background_image={background_image}
            name={name}
            rating={rating}
            id={id}
          />
        ))}

        {!loading && gameList.length === 0 && (
          <Unauthorized>
            <h1>Login First To See Your Games</h1>
            <MdVideogameAssetOff size={180} />
          </Unauthorized>
        )}
      </Content>
    </Container>
  );
};

export default MyGames;
