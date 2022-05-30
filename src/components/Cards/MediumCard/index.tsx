/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Slider from 'react-slick';

import MediumCardItem from './MediumCardItem';
import MediumCardSkeleton from '../../Skeletons/MediumCardSkeleton';
import { CardsContainer } from './styles';
import api from '../../../services/api';
import IGamesApiDTO from '../../../dtos/apiDTO';
import ErrorHandler from '../../../helpers/Toast/Error';
import { mediumCardSlider } from '../../../utils/slider/sliderSettings';

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
          <section>
            <Slider {...mediumCardSlider}>
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
                  <MediumCardItem
                    key={id}
                    id={id}
                    name={name}
                    rating={rating}
                    background_image={background_image}
                    released={released}
                    parent_platforms={parent_platforms}
                    genres={genres}
                  />
                ),
              )}
            </Slider>
          </section>
        </>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </CardsContainer>
  );
};

export default MediumCard;
