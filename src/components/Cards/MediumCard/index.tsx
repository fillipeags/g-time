import { AiOutlineStar } from 'react-icons/ai';
import { Container, Content, GameInfo, Rating } from './styles';

const MediumCard: React.FC = () => {
  return (
    <Container>
      <h2>Category</h2>
      <Content>
        <GameInfo>
          <h4>Game Title</h4>
          <Rating>
            <p>7.4</p>
            <AiOutlineStar size={24} color="yellow" />
          </Rating>
        </GameInfo>
      </Content>
    </Container>
  );
};

export default MediumCard;
