import { AiOutlineStar } from 'react-icons/ai';
import truncate from '../../../utils/trucate';
import SmallCardDetails from './Details';

import { Container, GameInfo, Rating } from './styles';

interface ISmallCardProps {
  coverImage: string;
  title: string;
  score: number;
}

const SmallCardItem = ({ title, score, coverImage }: ISmallCardProps) => {
  return (
    <Container
      style={{
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(65deg,rgba(0, 0, 0, 1) 2%,rgba(0, 0, 0, 1) 8%,rgba(0, 0, 0, 0.22452731092436973) 76%), url(${coverImage})`,
      }}
    >
      <GameInfo id="gameInfo">
        <h4>{truncate(title, 20)}</h4>
        <Rating>
          <p>{score}</p>
          <AiOutlineStar size={24} color="yellow" />
        </Rating>
      </GameInfo>
      <SmallCardDetails id="cardHover" />
    </Container>
  );
};

export default SmallCardItem;
