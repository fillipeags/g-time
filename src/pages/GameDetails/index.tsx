import { useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { Rating } from '../../components/Cards/SmallCard/styles';
import WideCard from '../../components/Cards/WideCard';
import Header from '../../components/Header';
import LoadingSpinner from '../../components/LoadingSpinner';
import Pill from '../../components/Pills';
import api from '../../services/api';
import requests from '../../services/api/requests';
import {
  AlignContainer,
  BoxInfo,
  Container,
  Content,
  GameBanner,
  GridContainer,
  LeftContent,
  RightContent,
} from './styles';

const GameDetails = () => {
  const [gameInfo, setGameInfo] = useState<any>([]);
  const [screenshots, setScreenshots] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const getGameDetails = async () => {
      const gameData = await api.get(requests.getSpecificGame(Number(id)));
      const screenshotsLinks = await api.get(
        requests.getScreenshots(Number(id)),
      );

      setGameInfo(gameData.data);
      console.log('Game Info: ', { gameInfo });
      setScreenshots(screenshotsLinks.data.results);
      setIsLoading(false);
    };

    getGameDetails();
  }, [id]);

  return (
    <Container>
      {isLoading && <LoadingSpinner isLoading={isLoading} size={200} />}

      {!isLoading && (
        <>
          <Header />
          <Content>
            <GridContainer>
              <LeftContent>
                <h1>{gameInfo.name}</h1>
                <Rating>
                  <h3>Rating - {gameInfo.rating}</h3>
                  <AiOutlineStar size={24} color="yellow" />
                </Rating>

                <h2>Description</h2>
                <p>{gameInfo.description_raw}</p>

                <h2>Tags</h2>
                {gameInfo.tags.map(tag => (
                  <Pill>{tag.name}</Pill>
                ))}
              </LeftContent>

              <RightContent>
                <GameBanner>
                  <img src={gameInfo.background_image} alt="" />
                  <button type="button">Add to my games</button>
                </GameBanner>
                <h3>
                  Average Playtime <span>{gameInfo.playtime} Hours</span>
                </h3>
                <h3>
                  Release Date{' '}
                  <span>
                    {gameInfo.released === null
                      ? 'Upcoming'
                      : gameInfo.released}
                  </span>
                </h3>

                <BoxInfo>
                  <h3>Rating Age</h3>
                  <p>
                    {gameInfo.esrb_rating === null ? (
                      'Upcoming'
                    ) : (
                      <p>{gameInfo.esrb_rating.name}</p>
                    )}
                  </p>
                </BoxInfo>
                <BoxInfo>
                  <h3>Publisher</h3>
                  <p>{gameInfo.publishers && gameInfo.publishers[0].name}</p>
                </BoxInfo>

                <h3>Genres</h3>
                <BoxInfo>
                  <AlignContainer>
                    {gameInfo.genres.map(genre => (
                      <Pill key={genre.id}>{genre.name}</Pill>
                    ))}
                  </AlignContainer>
                </BoxInfo>
              </RightContent>
            </GridContainer>

            <br />
            <h2>Trailers and screenshots</h2>
            <WideCard screenshots={screenshots} />

            <h2>Platforms</h2>

            {gameInfo.platforms.map(({ platform, requirements }) => (
              <ul key={platform.id}>
                <li>
                  {platform.name}
                  {platform.slug === 'pc' && (
                    <>
                      <p>{requirements?.minimum}</p>
                      <br />
                      <p>{requirements?.recommended}</p>
                      <br />
                    </>
                  )}
                </li>
              </ul>
            ))}

            <h2>Games Recomendation</h2>
          </Content>
        </>
      )}
    </Container>
  );
};

export default GameDetails;
