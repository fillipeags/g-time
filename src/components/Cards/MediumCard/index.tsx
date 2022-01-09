/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import breakpoints from '../../../utils/swiper-settings';

import MediumCardItem from './MediumCardItem';
import { CardsContainer } from './styles';

import api from '../../../services/api';
import IGamesApiDTO from '../../../dtos/apiDTO';
import ErrorHandler from '../../../helpers/Toast/Error';

interface IMediumCardsProps {
  category: string;
  fetchUrl: string;
}

const MediumCard = ({ category, fetchUrl }: IMediumCardsProps) => {
  const [games, setGames] = useState<IGamesApiDTO[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        setGames([]);
        const res = await api.get(fetchUrl);
        setGames(res.data.results);

        console.log(res);
      } catch (error) {
        ErrorHandler('Oops, Something Went Wrong in our Servers');
      }
    }

    fetchGames();
  }, [fetchUrl]);

  return (
    <CardsContainer>
      <Toaster position="top-center" reverseOrder={false} />
      <h2>{category}</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={260}
        navigation
        breakpoints={breakpoints}
      >
        {games.map(
          ({
            id,
            name,
            rating,
            background_image,
            released,
            parent_platforms,
          }) => (
            <SwiperSlide key={id}>
              <MediumCardItem
                name={name}
                rating={rating}
                background_image={background_image}
                released={released}
                parent_platforms={parent_platforms}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </CardsContainer>
  );
};

export default MediumCard;
