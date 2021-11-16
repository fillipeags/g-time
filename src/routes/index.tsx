import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Search from '../pages/Search';
import MyGames from '../pages/MyGames';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="/mygames" element={<MyGames />} />
    </Switch>
  );
};

export default Routes;
