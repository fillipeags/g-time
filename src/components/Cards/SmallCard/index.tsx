import { useEffect, useMemo, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { MdError } from 'react-icons/md';
import SmallCardItem from './SmallCardItem';
import LoadingSpinner from '../../LoadingSpinner';

import { CardsContainer, ItemNotFoundContainer } from './styles';

import useDebounce from '../../../hooks/useDebounce';
import api from '../../../services/api';
import ErrorHandler from '../../../helpers/Toast/Error';
import requests from '../../../services/api/requests';

interface ISmallCardProps {
  searchTerm: string;
  fetchUrl: string;
  filter: string;
}

interface IGameItemProps {
  id: number;
  name: string;
  rating: number;
  background_image: string;
}

const SmallCard = ({ searchTerm, fetchUrl, filter }: ISmallCardProps) => {
  const [games, setGames] = useState<IGameItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const debounceSearchTerm = useDebounce(searchTerm, 300);

  const results = useMemo(
    () =>
      games.filter(game =>
        game.name.toLowerCase().includes(debounceSearchTerm.toLowerCase()),
      ),
    [games, debounceSearchTerm],
  );

  useEffect(() => {
    let req;
    async function fetchGames() {
      try {
        setIsLoading(true);
        setGames([]);

        if (filter === 'searchGame') {
          req = await api.get(`/${fetchUrl}${debounceSearchTerm}`);
        } else {
          req = await api.get(requests[filter]);
        }
      } catch (error) {
        ErrorHandler(`Oops, Something Went Wrong in Our Servers ${error}`);
      } finally {
        setGames(req.data.results);
        setIsLoading(false);
      }
    }

    fetchGames();
  }, [debounceSearchTerm, fetchUrl, filter]);

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
          <MdError size={140} />
          <br />
          <h2>Nothing Found ...</h2>
        </ItemNotFoundContainer>
      )}
    </CardsContainer>
  );
};

export default SmallCard;
