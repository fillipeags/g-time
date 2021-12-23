import data from '../../../database/mock';
import SmallCardItem from './SmallCardItem';
import { CardsContainer, ItemNotFoundContainer } from './styles';

interface ISmallCardProps {
  filter: string;
}

const SmallCard = ({ filter }: ISmallCardProps) => {
  const results = !filter
    ? data
    : data.filter(cardItem =>
        cardItem.title.toLowerCase().includes(filter.toLocaleLowerCase()),
      );

  return (
    <CardsContainer>
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
          <h1>Nenhum Resultado Encontrando 😢</h1>
        </ItemNotFoundContainer>
      )}
    </CardsContainer>
  );
};

export default SmallCard;
