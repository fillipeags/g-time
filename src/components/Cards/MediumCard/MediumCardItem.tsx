import { AiOutlineStar } from 'react-icons/ai';
import IGamesApiDTO from '../../../dtos/apiDTO';

import MediumCardDetails from './Details';

import { Container, Content, GameInfo, Rating } from './styles';

const MediumCardItem = ({
  name,
  rating,
  background_image,
  released,
  parent_platforms,
  genres,
}: IGamesApiDTO) => {
  return (
    <Container>
      <Content
        style={{
          backgroundImage: `linear-gradient(65deg,rgba(0, 0, 0, 1) 2%,rgba(0, 0, 0, 1) 8%,rgba(0, 0, 0, 0.22452731092436973) 76%), url(${background_image})`,
        }}
      >
        <GameInfo id="gameInfo">
          <h4>{name}</h4>
          <Rating>
            <p>{rating}</p>
            <AiOutlineStar size={24} color="yellow" />
          </Rating>
        </GameInfo>

        <MediumCardDetails
          id="cardHover"
          name={name}
          rating={rating}
          released={released}
          parent_platforms={parent_platforms}
          genres={genres}
        />
      </Content>
    </Container>
  );
};

export default MediumCardItem;
