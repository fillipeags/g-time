/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineStar } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';

import { useCallback, useRef, useState } from 'react';
import PlatformsIcons from '../../../PlatformsIcons';

import truncate from '../../../../utils/trucate';

import {
  Container,
  Content,
  GameDetails,
  Heading,
  PlayButton,
  PlayContainer,
  Wrapper,
  Rating,
  ActionContainer,
  Button,
} from './styles';
import Modal from '../../../Modal';

const MediumCardDetails = ({
  id,
  name,
  rating,
  released,
  platforms,
  genres,
}: any) => {
  const year = new Date(released).getFullYear();

  const gen = genres.map(genre => genre.name);

  const [modal, setModal] = useState(false);

  const toggleModal = useCallback(() => {
    setModal(prevState => !prevState);
  }, []);

  return (
    <>
      {modal && <Modal toggleModal={toggleModal} showModal={modal} />}
      {!modal && (
        <Container id={id}>
          <PlayContainer>
            <PlayButton>
              <FiPlay size={34} color="white" onClick={toggleModal} />
            </PlayButton>
          </PlayContainer>
          <Content>
            <Heading>
              <h4>{truncate(name, 24)}</h4>
            </Heading>

            <Wrapper>
              <PlatformsIcons size={24} platforms={platforms} />
              <Rating>
                <p>{rating}</p>
                <AiOutlineStar size={24} color="yellow" />
              </Rating>
            </Wrapper>

            <GameDetails>
              <p>
                Released Year <span>{year}</span>
              </p>
              <p>
                Genre <span>{gen[0]}</span>
              </p>
            </GameDetails>

            <ActionContainer>
              <Button>See More</Button>
              <Button>Add To My Games</Button>
            </ActionContainer>
          </Content>
        </Container>
      )}
    </>
  );
};

export default MediumCardDetails;
