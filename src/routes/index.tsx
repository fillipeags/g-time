import { Routes as Switch, Route } from 'react-router-dom';

import { Home, Search, MyGames, News } from '../pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="/mygames" element={<MyGames />} />
      <Route path="/news" element={<News />} />
    </Switch>
  );
}
