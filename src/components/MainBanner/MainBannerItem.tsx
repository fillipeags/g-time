import { Container, Content, Button, Platforms, Wrapper } from './styles';

import PlatformsIcons from '../PlatformsIcons';

import IGamesApiDTO from '../../dtos/apiDTO';

const MainBannerItem = ({
  name,
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
          <Button type="button">See Details</Button>

          <Platforms>
            <PlatformsIcons size={30} parent_platforms={parent_platforms} />
          </Platforms>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default MainBannerItem;
