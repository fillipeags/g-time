import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import IGamesApiDTO from '../../../dtos/apiDTO';
import truncate from '../../../utils/trucate';
import { Button, CardBanner, Container, Description, GameInfo } from './styles';

const LargeCard = ({ background_image, name, rating, id }: IGamesApiDTO) => {
  return (
    <Container>
      <CardBanner>
        <img src={background_image} alt="large card" />
      </CardBanner>

      <GameInfo>
        <Description>
          <p>{truncate(name, 18)} </p>
          <p>{rating}</p>
          <AiOutlineStar size={24} color="yellow" />
        </Description>
        <Link to={`/game/${id}`}>
          <Button>Go to Game Page</Button>
        </Link>
      </GameInfo>
    </Container>
  );
};

export default LargeCard;
