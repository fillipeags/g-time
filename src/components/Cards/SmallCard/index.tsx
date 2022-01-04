/* eslint-disable camelcase */
import { useEffect, useMemo, useState } from 'react';
import SmallCardItem from './SmallCardItem';
import { CardsContainer, ItemNotFoundContainer } from './styles';
import notFoundImg from '../../../assets/notFound.svg';
import api from '../../../services/api';
import { searchGame } from '../../../services/api/requests';

interface ISmallCardProps {
  searchTerm: string;
}

const SmallCard = ({ searchTerm }: ISmallCardProps) => {
  const [games, setGames] = useState<any[]>([]);

  const results = useMemo(
    () =>
      games.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [games, searchTerm],
  );

  useEffect(() => {
    async function fetchGames() {
      try {
        await api.get(`/${searchGame}${searchTerm}`).then(response => {
          setGames(response.data.results);
          console.log(response.data.results);
        });
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchGames();
  }, []);

  return (
    <CardsContainer>
      {results.length ? (
        results.map(({ id, name, rating, background_image }) => (
          <SmallCardItem
            key={id}
            title={name}
            score={rating}
            coverImage={background_image}
          />
        ))
      ) : (
        <ItemNotFoundContainer>
          <img src={notFoundImg} alt="" />
          <h2>Nenhum Resultado Encontrando 😢</h2>
        </ItemNotFoundContainer>
      )}
    </CardsContainer>
  );
};

export default SmallCard;
