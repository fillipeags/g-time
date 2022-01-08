/* eslint-disable react/require-default-props */
import { AiOutlineStar } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';

import PlatformsIcons from '../../../PlatformsIcons';

import truncate from '../../../../utils/trucate';

import {
  Container,
  Content,
  GameDetails,
  Heading,
  PlayButton,
  PlayContainer,
  Rating,
  ActionContainer,
  Button,
} from './styles';
import IGamesApiDTO from '../../../../dtos/apiDTO';

const MediumCardDetails = ({ id, name, rating, released }: IGamesApiDTO) => {
  const year = new Date(released).getFullYear();

  return (
    <Container id={id}>
      <PlayContainer>
        <PlayButton>
          <FiPlay size={34} color="white" />
        </PlayButton>
      </PlayContainer>
      <Content>
        <Heading>
          <h4>{truncate(name, 15)}</h4>
          {/* <PlatformsIcons /> */}
        </Heading>
        <Rating>
          <p>{rating}</p>
          <AiOutlineStar size={24} color="yellow" />
        </Rating>

        <GameDetails>
          <p>
            Released Year <span>{year}</span>
          </p>
          <p>
            Genre <span>Aventura</span>
          </p>
        </GameDetails>

        <ActionContainer>
          <Button>See More</Button>
          <Button>Add To My Games</Button>
        </ActionContainer>
      </Content>
    </Container>
  );
};

export default MediumCardDetails;
