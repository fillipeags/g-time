import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import breakpoints from '../../../utils/swiper-settings';

import MediumCardItem from './MediumCardItem';
import { CardsContainer } from './styles';

// import data from '../../../database/mock';
import api from '../../../services/api';
import ErrorHandler from '../../../helpers/Toast/Error';

interface IMediumCardsProps {
  category: string;
  fetchUrl: string;
}

interface IGameItemProps {
  id: number;
  name: string;
  rating: number;
  background_image: string;
}

const MediumCard = ({ category, fetchUrl }: IMediumCardsProps) => {
  const [games, setGames] = useState<IGameItemProps[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        setGames([]);
        const res = await api.get(fetchUrl);
        setGames(res.data.results);
      } catch (error) {
        ErrorHandler('Oops, Something Went Wrong in our Servers');
      }
    }

    fetchGames();
  }, [fetchUrl]);

  return (
    <CardsContainer>
      <h2>{category}</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={260}
        navigation
        breakpoints={breakpoints}
      >
        {games.map(({ id, name, rating, background_image }) => (
          <SwiperSlide key={id}>
            <MediumCardItem
              coverImage={background_image}
              title={name}
              score={rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CardsContainer>
  );
};

export default MediumCard;
