import data from '../../../database/mock';
import SmallCardItem from './SmallCardItem';
import { CardsContainer } from './styles';

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
      {results.map(({ id, title, score, coverImage }) => (
        <SmallCardItem
          key={id}
          title={title}
          score={score}
          coverImage={coverImage}
        />
      ))}
    </CardsContainer>
  );
};

export default SmallCard;
