import { Route, Routes as Switch } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import { Home, MyGames, News, Search } from '../pages';
import GameDetails from '../pages/GameDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="/mygames" element={<MyGames />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/game/:id" element={<GameDetails />} />
    </Switch>
  );
}
