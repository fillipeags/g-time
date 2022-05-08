import { useEffect, useState } from 'react';
import FireStoreService from '../../services/database';

interface IGamesProps {
  id: number;
  name: string;
}

const MyGames = () => {
  const [gameList, setGameList] = useState<IGamesProps[]>([]);

  useEffect(() => {
    async function getGamesList() {
      const data: any = await FireStoreService.getAll();

      if (data) {
        setGameList(data);
      }
    }

    getGamesList();
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
