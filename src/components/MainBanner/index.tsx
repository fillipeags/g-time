import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../utils/swiper-settings';

import { Toaster } from 'react-hot-toast';

import MainBannerItem from './MainBannerItem';
import MainBannerSkeleton from '../Skeletons/MainBannerSkeleton';
import { MainBannerContainer } from './styles';

import api from '../../services/api';
import ErrorHandler from '../../helpers/Toast/Error';
import IGamesApiDTO from '../../dtos/apiDTO';

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
