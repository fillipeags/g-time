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

interface IMediumCardDetailsProps {
  id: string;
  title: string;
  score: number;
}

const MediumCardDetails = ({ id, title, score }: IMediumCardDetailsProps) => {
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
            Released Year <span>2020</span>
          </p>
          <p>
            Genre <span>Adventure</span>
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
