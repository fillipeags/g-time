import { AiOutlineStar } from 'react-icons/ai';
import { FaSteam } from 'react-icons/fa';
import { Rating } from '../MediumCard/styles';
import { CardBanner, Container, Content, GameInfo, Title } from './styles';
import largeCardImg from '../../../assets/largeCardeX.png';

const LargeCard: React.FC = () => {
  return (
    <Container>
      <h1>Best Scored Games</h1>
      <h3>The best games to be played according to the community</h3>
      <Content>
        <CardBanner>
          <img src={largeCardImg} alt="large card" />
        </CardBanner>
        <GameInfo>
          <Title>
            <p>Zelda - The Breah of the Wild 2 </p>
            <FaSteam size={18} />
          </Title>
          <Rating>
            <p>7.4</p>
            <AiOutlineStar size={24} color="yellow" />
          </Rating>
        </GameInfo>
      </Content>
    </Container>
  );
};

export default LargeCard;
