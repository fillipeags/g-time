/* eslint-disable no-console */
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import MainBannerItem from './MainBannerItem';
import { MainBannerContainer } from './styles';

import '../../utils/swiper-settings';
import api from '../../services/api';
import ErrorHandler from '../../helpers/Toast/Error';
import IGamesApiDTO from '../../dtos/apiDTO';
import MainBannerSkeleton from '../Skeletons/MainBannerSkeleton/MainBannerSkeleton';

interface IMainBannerProps {
  fetchUrl: string;
}

const MainBanner = ({ fetchUrl }: IMainBannerProps) => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<IGamesApiDTO[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        setGames([]);
        const res = await api.get(fetchUrl);
        setGames(res.data.results);
        setLoading(false);
      } catch (error) {
        ErrorHandler('Oops, Something Went Wrong in our Servers');
      }
    }

    fetchGames();
  }, [fetchUrl]);

  return (
    <MainBannerContainer>
      {loading && <MainBannerSkeleton />}

      {!loading && (
        <Swiper
          spaceBetween={800}
          autoplay={{
            delay: 2500,
          }}
          speed={700}
        >
          {games.map(({ id, name, background_image, parent_platforms }) => (
            <SwiperSlide key={id}>
              <MainBannerItem
                name={name}
                background_image={background_image}
                parent_platforms={parent_platforms}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </MainBannerContainer>
  );
};

export default MainBanner;
