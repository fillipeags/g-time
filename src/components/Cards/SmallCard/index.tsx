import { useEffect } from 'react';
import data from '../../../database/mock';
import SmallCardItem from './SmallCardItem';
import { CardsContainer, ItemNotFoundContainer } from './styles';
import notFoundImg from '../../../assets/notFound.svg';
import api from '../../../services/api';
import allGames from '../../../services/api/requests';

interface ISmallCardProps {
  filter: string;
}

const SmallCard = ({ filter }: ISmallCardProps) => {
  const results = !filter
    ? data
    : data.filter(cardItem =>
        cardItem.title.toLowerCase().includes(filter.toLocaleLowerCase()),
      );

  const fetch = () => {
    api.get(allGames).then(response => {
      console.log(response);
    });
  };

  return (
    <CardsContainer>
      <button type="button" onClick={() => fetch()}>
        Fetch data
      </button>
      {results.length ? (
        results.map(({ id, title, score, coverImage }) => (
          <SmallCardItem
            key={id}
            title={title}
            score={score}
            coverImage={coverImage}
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
