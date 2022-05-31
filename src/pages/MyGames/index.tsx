/* eslint-disable array-callback-return */
import { useCallback, useEffect, useState } from 'react';
import LargeCardItem from '../../components/Cards/LargeCard/LargeCardItem';
import LoadingSpinner from '../../components/LoadingSpinner';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import requests from '../../services/api/requests';
import FireStoreService from '../../services/database';
import Container from './styles';

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
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    getGamesList();
  }, [getGamesList]);

  return (
    <div>
      <h1>My Games</h1>
      {loading && <LoadingSpinner isLoading={loading} size={240} />}
      <Container>
        {gameList.map(({ id, name, background_image, rating }) => (
          <LargeCardItem
            key={id}
            background_image={background_image}
            name={name}
            rating={rating}
          />
        ))}
      </Container>
    </div>
  );
};

export default MyGames;
