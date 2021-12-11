import data from '../../../database/mock';
import SmallCardItem from './SmallCardItem';
import { CardsContainer } from './styles';

const SmallCard = () => {
  return (
    <CardsContainer>
      {data.map(({ id, title, score, coverImage }) => (
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
