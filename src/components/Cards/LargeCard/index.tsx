import { AiOutlineStar } from 'react-icons/ai';
import IGamesApiDTO from '../../../dtos/apiDTO';
import { Button, CardBanner, Container, Description, GameInfo } from './styles';

const LargeCard = ({ background_image, name, rating }: IGamesApiDTO) => {
  return (
    <Container>
      <CardBanner>
        <img src={background_image} alt="large card" />
      </CardBanner>

      <GameInfo>
        <Description>
          <p>{name} </p>
          <p>{rating}</p>
          <AiOutlineStar size={24} color="yellow" />
        </Description>
        <Button>Go to Game Page</Button>
      </GameInfo>
    </Container>
  );
};

export default LargeCard;
