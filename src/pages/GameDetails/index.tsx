import { useCallback, useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { Rating } from '../../components/Cards/SmallCard/styles';
import Header from '../../components/Header';
import LoadingSpinner from '../../components/LoadingSpinner';
import Pill from '../../components/Pills';
import useGamesStore from '../../hooks/useGamesStore';
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
  Requirements,
  RightContent,
  ScreenShotsContainer,
} from './styles';

interface ScreenShot {
  id: number;
  image: string;
}

const GameDetails = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [gameInfo, setGameInfo] = useState<any>([]);
  const [screenshots, setScreenshots] = useState<ScreenShot[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const { savedToList, loading, handleStoreGame, filterStoredGames } =
    useGamesStore(Number(id!), gameInfo.name);

  const getGameDetails = useCallback(async () => {
    const gameData = await api.get(requests.getSpecificGame(Number(id)));
    const screenshotsLinks = await api.get(requests.getScreenshots(Number(id)));
    setGameInfo(gameData.data);
    setScreenshots(screenshotsLinks.data.results);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    filterStoredGames();
    getGameDetails();
  }, [filterStoredGames, getGameDetails]);

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
                  <button
                    type="button"
                    disabled={loading}
                    onClick={handleStoreGame}
                  >
                    {savedToList ? 'Remove from List' : 'Add To My Games'}
                  </button>
                </GameBanner>
                <h3>
                  Average Playtime <span>{gameInfo.playtime} Hours</span>
                </h3>
                <h3>
                  Release Date
                  <span>
                    {gameInfo.released === null
                      ? 'Upcoming'
                      : new Date(gameInfo.released).toLocaleDateString('en-us')}
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
            <h2>Screenshots</h2>
            <ScreenShotsContainer>
              {screenshots.map(({ id: ScreenShotId, image }) => (
                <div key={ScreenShotId}>
                  <img src={image} alt={image} />
                </div>
              ))}
            </ScreenShotsContainer>

            <h2>Available Platforms</h2>

            {gameInfo.platforms.map(({ platform, requirements }) => (
              <Requirements>
                <ul key={platform.id}>
                  <li>
                    {platform.name}
                    {platform.slug === 'pc' && (
                      <>
                        <p>{requirements?.minimum}</p>
                        <br />
                        <p>{requirements?.recommended}</p>
                      </>
                    )}
                  </li>
                </ul>
              </Requirements>
            ))}
          </Content>
        </>
      )}
    </Container>
  );
};

export default GameDetails;
