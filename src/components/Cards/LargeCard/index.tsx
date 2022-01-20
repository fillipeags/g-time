/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';

import Slider from 'react-slick';
import LargeCardItem from './LargeCardItem';
import { CardsContainer } from './styles';

import IGamesApiDTO from '../../../dtos/apiDTO';
import api from '../../../services/api';
import requests from '../../../services/api/requests';
import ErrorHandler from '../../../helpers/Toast/Error';
import { largeCardSlider } from '../../../utils/slider/sliderSettings';

const LargeCard = () => {
  const [games, setGames] = useState<IGamesApiDTO[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        setGames([]);
        const res = await api.get(requests.popularGames);
        setGames(res.data.results);

        // eslint-disable-next-line no-console
        // console.log(res);
      } catch (error) {
        ErrorHandler('Oops, Something Went Wrong in our Servers');
      }
    }

    fetchGames();
  }, []);

  return (
    <CardsContainer>
      <h1>Best Scored Games</h1>
      <h3>The best games to be played according to the community</h3>
      <section>
        <Slider {...largeCardSlider}>
          {games.map(({ id, name, rating, background_image }) => (
            <LargeCardItem
              key={id}
              background_image={background_image}
              name={name}
              rating={rating}
            />
          ))}
        </Slider>
      </section>
    </CardsContainer>
  );
};

export default LargeCard;
