import { useEffect, useMemo, useState } from 'react';

import { Toaster } from 'react-hot-toast';
import api from '../../../services/api';
import useDebounce from '../../../utils/debounce';
import ErrorHandler from '../../../helpers/Toast/Error';

import SmallCardItem from './SmallCardItem';
import LoadingSpinner from '../../LoadingSpinner';

import { CardsContainer, ItemNotFoundContainer } from './styles';
import notFoundImg from '../../../assets/notFound.svg';

interface ISmallCardProps {
  searchTerm: string;
  fetchUrl: string;
}

interface IGameItemProps {
  id: number;
  name: string;
  rating: number;
  background_image: string;
}

const SmallCard = ({ searchTerm, fetchUrl }: ISmallCardProps) => {
  const [games, setGames] = useState<IGameItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const debounceSearchTerm = useDebounce(searchTerm, 200);

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
        const res = await api.get(
          `fasdfadsfasd/${fetchUrl}${debounceSearchTerm}`,
        );
        setGames(res.data.results);
      } catch (error) {
        ErrorHandler(`Oops, Something Went Wrong in Our Servers ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGames();
  }, [debounceSearchTerm, fetchUrl]);

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
          <h2>Are you sure this game exists ? 😢</h2>
        </ItemNotFoundContainer>
      )}
    </CardsContainer>
  );
};

export default SmallCard;
