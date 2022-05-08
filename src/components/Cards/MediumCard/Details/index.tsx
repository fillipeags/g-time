import { AiOutlineStar } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';

import { useCallback, useEffect, useState } from 'react';
import FireStoreService from '../../../../services/database';
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
import IGamesApiDTO from '../../../../dtos/apiDTO';
import ErrorHandler from '../../../../helpers/Toast/Error';
import useAuth from '../../../../hooks/useAuth';

interface IMediumCardDetailsProps extends IGamesApiDTO {
  hoverId: string;
}

const MediumCardDetails = ({
  id,
  hoverId,
  name,
  rating,
  released,
  parent_platforms,
  genres,
}: IMediumCardDetailsProps) => {
  const year = new Date(released!).getFullYear();
  const gen = genres!.map(genre => genre.name);

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [savedToList, setSavedToList] = useState(false);

  const toggleModal = useCallback(() => {
    setModal(prevState => !prevState);
  }, []);

  const { user } = useAuth();

  const filterStoredGames = useCallback(async () => {
    const gameAlreadySaved = await FireStoreService.getOne(id, user?.id);

    if (gameAlreadySaved[0]) {
      setSavedToList(true);
    }
    setLoading(false);
  }, [id, user?.id]);

  useEffect(() => {
    filterStoredGames();
  }, [filterStoredGames]);

  const handleStoreGame = async () => {
    const data = {
      id,
      name,
    };

    const gameAlreadySaved = await FireStoreService.getOne(id, user?.id);

    if (!user) {
      ErrorHandler('Sign-in required');
    } else if (gameAlreadySaved[0]) {
      FireStoreService.delete(gameAlreadySaved[0], user?.id);
      setSavedToList(false);
    } else {
      FireStoreService.create(data, user!.id)

        .then(() => {
          setSavedToList(true);
        })
        .catch(e => {
          ErrorHandler(`Oops - ${e}`);
        });
    }
  };

  return (
    <>
      {modal && <Modal toggleModal={toggleModal} showModal={modal} />}
      {!modal && (
        <Container id={hoverId}>
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
              <PlatformsIcons size={24} parent_platforms={parent_platforms} />
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
              <>
                {loading ? (
                  <Button disabled={loading}>...</Button>
                ) : (
                  <Button onClick={handleStoreGame} disabled={loading}>
                    {savedToList ? 'Remove from List' : 'Add To My Games'}
                  </Button>
                )}
              </>
            </ActionContainer>
          </Content>
        </Container>
      )}
    </>
  );
};

export default MediumCardDetails;
