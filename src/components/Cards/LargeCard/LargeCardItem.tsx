import { AiOutlineStar } from 'react-icons/ai';
import { FaSteam } from 'react-icons/fa';

import { Rating } from '../MediumCard/styles';
import { CardBanner, Container, Content, GameInfo, Title } from './styles';

interface ILargeCardItemProps {
  coverImage: string;
  title: string;
  score: number;
}

const LargeCardItem = ({ coverImage, title, score }: ILargeCardItemProps) => {
  return (
    <Container>
      <Content>
        <CardBanner>
          <img src={coverImage} alt="large card" />
        </CardBanner>
        <GameInfo>
          <Title>
            <p>{title}</p>
            <FaSteam size={18} />
          </Title>
          <Rating>
            <p>{score}</p>
            <AiOutlineStar size={24} color="yellow" />
          </Rating>
        </GameInfo>
      </Content>
    </Container>
  );
};

export default LargeCardItem;
