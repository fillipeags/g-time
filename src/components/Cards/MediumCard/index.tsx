import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Toaster } from 'react-hot-toast';
import breakpoints from '../../../utils/swiper-settings';

import MediumCardItem from './MediumCardItem';
import MediumCardSkeleton from '../../Skeletons/MediumCardSkeleton';
import { CardsContainer } from './styles';

import api from '../../../services/api';
import IGamesApiDTO from '../../../dtos/apiDTO';
import ErrorHandler from '../../../helpers/Toast/Error';

interface IMediumCardsProps {
  category: string;
  fetchUrl: string;
}

const MediumCard = ({ category, fetchUrl }: IMediumCardsProps) => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<IGamesApiDTO[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        setGames([]);
        const res = await api.get(fetchUrl);
        setGames(res.data.results);
        setLoading(false);
        // eslint-disable-next-line no-console
        console.log(res);
      } catch (error) {
        ErrorHandler('Oops, Something Went Wrong in our Servers');
      }
    }

    fetchGames();
  }, [fetchUrl]);

  return (
    <CardsContainer>
      {loading && <MediumCardSkeleton />}

      {!loading && (
        <>
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
                genres,
              }) => (
                <SwiperSlide key={id}>
                  <MediumCardItem
                    name={name}
                    rating={rating}
                    background_image={background_image}
                    released={released}
                    parent_platforms={parent_platforms}
                    genres={genres}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </CardsContainer>
  );
};

export default MediumCard;
