import { useCallback, useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import useAuth from '../../hooks/useAuth';
import FireStoreService from '../../services/database';

interface IGamesCollection {
  id: number;
  name: string;
  userId: string;
}

const MyGames = () => {
  const [gameList, setGameList] = useState<IGamesCollection[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  const getGamesList = useCallback(async () => {
    const data: IGamesCollection[] = await FireStoreService.getAll(user?.id);
    if (data) {
      setGameList(data);
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    setLoading(true);
    getGamesList();
  }, [getGamesList]);

  return (
    <div>
      {loading && <LoadingSpinner isLoading={loading} />}
      {gameList.map(game => (
        <div key={game.id}>
          <h1>{game.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default MyGames;
