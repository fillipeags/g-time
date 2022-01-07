import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
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
  released?: Date | string | number;
}

const MediumCard = ({ category, fetchUrl }: IMediumCardsProps) => {
  const [games, setGames] = useState<IGameItemProps[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        setGames([]);
        const res = await api.get(fetchUrl);
        setGames(res.data.results);
        // console.log(res);
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
        {games.map(({ id, name, rating, background_image, released }) => (
          <SwiperSlide key={id}>
            <MediumCardItem
              coverImage={background_image}
              title={name}
              score={rating}
              released_year={released}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CardsContainer>
  );
};

export default MediumCard;
