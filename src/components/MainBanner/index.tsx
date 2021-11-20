import { FaPlaystation, FaSteam, FaXbox } from 'react-icons/fa';
import {
  Container,
  Content,
  PlatformsContainer,
  Button,
  BackLine,
} from './styles';

const MainBanner: React.FC = () => {
  return (
    <>
      <BackLine />
      <Container>
        <Content>
          <h1>Spider Man</h1>
          <p>
            From legendary game creator Hideo Kojima comes an all-new,
            genre-defying experience. Sam Bridges must brave a world utterly
            transformed by the Death ...
          </p>

          <PlatformsContainer>
            <h3>Platforms: </h3>
            <FaPlaystation size={18} />
            <FaSteam size={18} />
            <FaXbox size={18} />
          </PlatformsContainer>

          <Button type="button">See More</Button>
        </Content>
      </Container>
    </>
  );
};

export default MainBanner;
