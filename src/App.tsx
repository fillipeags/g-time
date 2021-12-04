import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container, Content } from './styles/generic/Reset';

import SideBar from './components/SideBar';
import Routes from './routes';
import defaultTheme from './styles/themes';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <SideBar />
          <Content>
            <Routes />
            <Footer />
          </Content>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
