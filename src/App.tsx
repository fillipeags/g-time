import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container, Content } from './styles/generic/Reset';

import SideBar from './components/SideBar';
import Routes from './routes';
import defaultTheme from './styles/themes';
import Footer from './components/Footer';

import { AuthContextProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Container>
            <SideBar />
            <Content>
              <Routes />
              <Footer />
            </Content>
          </Container>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
