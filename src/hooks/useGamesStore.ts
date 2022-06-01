import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import ErrorHandler from '../helpers/Toast/Error';
import FireStoreService from '../services/database';
import useAuth from './useAuth';

function useGamesStore(id: number, name: string) {
  const [savedToList, setSavedToList] = useState(false);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  const handleStoreGame = async () => {
    const data = {
      id,
      name,
    };

    const gameAlreadySaved = await FireStoreService.getOne(id, user?.id);

    if (!user) {
      ErrorHandler('Sign-in required');
    } else if (gameAlreadySaved[0]) {
      try {
        await FireStoreService.delete(gameAlreadySaved[0], user?.id);
        setSavedToList(false);
        toast.success('Jogo removido com sucesso', {
          style: {
            backgroundColor: '#F65F5F',
            color: '#FFF',
          },
        });
      } catch (e) {
        ErrorHandler(`Oops - ${e}`);
      }
    } else {
      try {
        await FireStoreService.create(data, user!.id);
        setSavedToList(true);
        toast.success('Jogo adicionado com sucesso', {
          style: {
            backgroundColor: '#4316DB',
            color: '#FFF',
          },
        });
      } catch (e) {
        ErrorHandler(`Oops - ${e}`);
      }
    }
  };

  const filterStoredGames = useCallback(async () => {
    const gameAlreadySaved = await FireStoreService.getOne(id, user?.id);

    if (gameAlreadySaved[0]) {
      setSavedToList(true);
    }

    setLoading(false);
  }, [id, setSavedToList, user?.id]);

  return {
    loading,
    savedToList,
    handleStoreGame,
    filterStoredGames,
  };
}

export default useGamesStore;
