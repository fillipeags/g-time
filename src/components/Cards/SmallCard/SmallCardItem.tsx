import { AiOutlineStar } from 'react-icons/ai';
import IGamesApiDTO from '../../../dtos/apiDTO';
import truncate from '../../../utils/trucate';
import SmallCardDetails from './Details';
import { Container, GameInfo, Rating } from './styles';

const SmallCardItem = ({
  id,
  name,
  rating,
  background_image,
}: IGamesApiDTO) => {
  return (
    <Container
      style={{
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(65deg,rgba(0, 0, 0, 1) 2%,rgba(0, 0, 0, 1) 8%,rgba(0, 0, 0, 0.22452731092436973) 76%), url(${background_image})`,
      }}
    >
      <GameInfo id="gameInfo">
        <h4>{truncate(name, 40)}</h4>
        <Rating>
          <p>{rating}</p>
          <AiOutlineStar size={24} color="yellow" />
        </Rating>
      </GameInfo>
      <SmallCardDetails id="cardHover" gameId={id!} name={name} />
    </Container>
  );
};

export default SmallCardItem;
