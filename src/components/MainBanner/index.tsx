import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Slider from 'react-slick';
import IGamesApiDTO from '../../dtos/apiDTO';
import ErrorHandler from '../../helpers/Toast/Error';
import api from '../../services/api';
import { mainBannerSlider } from '../../utils/slider/sliderSettings';
import MainBannerSkeleton from '../Skeletons/MainBannerSkeleton';
import MainBannerItem from './MainBannerItem';
import { MainBannerContainer } from './styles';

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
        <section>
          <Slider {...mainBannerSlider}>
            {games.map(({ id, name, background_image, parent_platforms }) => (
              <MainBannerItem
                key={id}
                id={id}
                name={name}
                background_image={background_image}
                parent_platforms={parent_platforms}
              />
            ))}
          </Slider>
        </section>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </MainBannerContainer>
  );
};

export default MainBanner;
