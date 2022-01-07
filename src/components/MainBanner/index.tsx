import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import MainBannerItem from './MainBannerItem';
import { MainBannerContainer } from './styles';

import data from '../../database/mock';
import '../../utils/swiper-settings';
import api from '../../services/api';
import ErrorHandler from '../../helpers/Toast/Error';

interface IMainBannerProps {
  fetchUrl: string;
}

interface IGameItemProps {
  id: number;
  name: string;
  rating: number;
  background_image: string;
  released?: Date | string | number;
}

const MainBanner = ({ fetchUrl }: IMainBannerProps) => {
  const [games, setGames] = useState<IGameItemProps[]>([]);

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
    <MainBannerContainer>
      <Toaster position="top-center" reverseOrder={false} />
      <Swiper
        spaceBetween={800}
        autoplay={{
          delay: 2500,
        }}
        speed={700}
      >
        {games.map(({ id, name, background_image }) => (
          <SwiperSlide key={id}>
            <MainBannerItem title={name} coverImage={background_image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MainBannerContainer>
  );
};

export default MainBanner;
