import { AiOutlineStar } from 'react-icons/ai';
import MediumCardDetails from './Details';

import { Container, Content, GameInfo, Rating } from './styles';

interface IMediumCardProps {
  coverImage: string;
  title: string;
  score: number;
}

const MediumCardItem = ({ title, score, coverImage }: IMediumCardProps) => {
  return (
    <Container>
      <Content
        style={{
          backgroundSize: 'cover',
          backgroundImage: `linear-gradient(65deg,rgba(0, 0, 0, 1) 2%,rgba(0, 0, 0, 1) 8%,rgba(0, 0, 0, 0.22452731092436973) 76%), url(${coverImage})`,
        }}
      >
        <GameInfo id="gameInfo">
          <h4>{title}</h4>
          <Rating>
            <p>{score}</p>
            <AiOutlineStar size={24} color="yellow" />
          </Rating>
        </GameInfo>

        <MediumCardDetails id="cardHover" title={title} />
      </Content>
    </Container>
  );
};

export default MediumCardItem;
