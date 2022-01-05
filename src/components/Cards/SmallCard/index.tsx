import { useEffect, useMemo, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SmallCardItem from './SmallCardItem';
import { CardsContainer, ItemNotFoundContainer } from './styles';
import notFoundImg from '../../../assets/notFound.svg';
import api from '../../../services/api';
import { searchGame } from '../../../services/api/requests';
import LoadingSpinner from '../../LoadingSpinner';
import useDebounce from '../../../utils/debounce';

interface ISmallCardProps {
  searchTerm: string;
}

interface IGameItemProps {
  id: number;
  name: string;
  rating: number;
  background_image: string;
}

const SmallCard = ({ searchTerm }: ISmallCardProps) => {
  const [games, setGames] = useState<IGameItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const debounceSearchTerm = useDebounce(searchTerm, 150);

  const results = useMemo(
    () =>
      games.filter(game =>
        game.name.toLowerCase().includes(debounceSearchTerm.toLowerCase()),
      ),
    [games, debounceSearchTerm],
  );

  useEffect(() => {
    async function fetchGames() {
      try {
        setIsLoading(true);
        setGames([]);
        const res = await api.get(`adas/${searchGame}${debounceSearchTerm}`);
        setGames(res.data.results);
      } catch (error) {
        // eslint-disable-next-line no-console
        toast.error('Oops! Something went wrong in our servers');
      } finally {
        setIsLoading(false);
      }
    }

    fetchGames();
  }, [debounceSearchTerm]);

  return (
    <CardsContainer>
      <LoadingSpinner isLoading={isLoading} />
      <Toaster position="top-center" reverseOrder={false} />
      {results.map(({ id, name, rating, background_image }) => (
        <SmallCardItem
          key={id}
          title={name}
          rating={rating}
          background_image={background_image}
        />
      ))}

      {!isLoading && results.length === 0 && (
        <ItemNotFoundContainer>
          <img src={notFoundImg} alt="" />
          <h2>Nenhum Resultado Encontrando 😢</h2>
        </ItemNotFoundContainer>
      )}
    </CardsContainer>
  );
};

export default SmallCard;
