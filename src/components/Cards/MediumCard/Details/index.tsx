/* eslint-disable prettier/prettier */
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import IGamesApiDTO from '../../../../dtos/apiDTO';
import useGamesStore from '../../../../hooks/useGamesStore';
import truncate from '../../../../utils/trucate';
import Modal from '../../../Modal';
import PlatformsIcons from '../../../PlatformsIcons';
import {
  ActionContainer,
  Button,
  Container,
  Content,
  GameDetails,
  Heading,
  PlayButton,
  PlayContainer,
  Rating,
  Wrapper
} from './styles';

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

  const toggleModal = useCallback(() => {
    setModal(prevState => !prevState);
  }, []);

  const { savedToList, loading, handleStoreGame, filterStoredGames } = useGamesStore(id!, name)

  useEffect(() => {
    filterStoredGames();
  }, [filterStoredGames]);


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
              <Link to={`game/${id}`}>
                <Button>View Details</Button>
              </Link>
              <>
                {loading ? (
                  <Button disabled={loading}>
                    <RotatingLines width="26" strokeColor="#FFF" />
                  </Button>
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
