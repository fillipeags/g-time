import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
