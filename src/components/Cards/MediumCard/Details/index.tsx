/* eslint-disable react/require-default-props */
import { AiOutlineStar } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';

import dayjs from 'dayjs';
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

interface IMediumCardDetailsProps {
  id: string;
  title: string;
  score: number;
  released_year?: any;
}

const MediumCardDetails = ({
  id,
  title,
  score,
  released_year,
}: IMediumCardDetailsProps) => {
  const year = new Date(released_year).getFullYear();

  return (
    <Container id={id}>
      <PlayContainer>
        <PlayButton>
          <FiPlay size={34} color="white" />
        </PlayButton>
      </PlayContainer>
      <Content>
        <Heading>
          <h4>{truncate(title, 15)}</h4>
          <PlatformsIcons />
        </Heading>
        <Rating>
          <p>{score}</p>
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
