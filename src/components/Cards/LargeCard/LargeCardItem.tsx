import { AiOutlineStar } from 'react-icons/ai';
import { FaSteam } from 'react-icons/fa';
import IGamesApiDTO from '../../../dtos/apiDTO';

import { Rating } from '../MediumCard/styles';
import { CardBanner, Container, Content, GameInfo, Title } from './styles';

const LargeCardItem = ({ background_image, name, rating }: IGamesApiDTO) => {
  return (
    <Container>
      <Content>
        <CardBanner>
          <img src={background_image} alt="large card" />
        </CardBanner>
        <GameInfo>
          <Title>
            <p>{name}</p>
            <FaSteam size={18} />
          </Title>
          <Rating>
            <p>{rating}</p>
            <AiOutlineStar size={24} color="yellow" />
          </Rating>
        </GameInfo>
      </Content>
    </Container>
  );
};

export default LargeCardItem;
