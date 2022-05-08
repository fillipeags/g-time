import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import FireStoreService from '../../services/database';

interface IGamesProps {
  id: number;
  name: string;
}

const MyGames = () => {
  const [gameList, setGameList] = useState<IGamesProps[]>([]);

  const { user } = useAuth();

  const getGamesList = async () => {
    const data: any = await FireStoreService.getAll(user?.id);

    if (data) {
      setGameList(data);
    }
  };

  useEffect(() => {
    getGamesList();

    return function cleanup() {
      setGameList([]);
    };
  }, []);

  return (
    <div>
      {gameList.map(game => (
        <div key={game.id}>
          <h1>{game.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default MyGames;
