import { Link } from 'react-router-dom';
import IGamesApiDTO from '../../dtos/apiDTO';
import PlatformsIcons from '../PlatformsIcons';
import { Button, Container, Content, Platforms, Wrapper } from './styles';

const MainBannerItem = ({
  name,
  id,
  background_image,
  parent_platforms,
}: IGamesApiDTO) => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(51deg,rgba(0, 0, 0, 1) 27%,rgba(0, 0, 0, 1) 38%,rgba(0, 0, 0, 0.22452731092436973) 100%), url(${background_image})`,
      }}
    >
      <Content>
        <h1>{name}</h1>

        <Wrapper>
          <Link to={`game/${id}`}>
            <Button type="button">See Details</Button>
          </Link>

          <Platforms>
            <PlatformsIcons size={30} parent_platforms={parent_platforms} />
          </Platforms>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default MainBannerItem;
