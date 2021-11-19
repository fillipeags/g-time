import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container, Content } from './styles/generic/Reset';

import SideBar from './components/SideBar';
import Routes from './routes';
import defaultTheme from './styles/themes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <SideBar />
          <Content>
            <Routes />
          </Content>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
