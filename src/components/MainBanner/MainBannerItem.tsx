/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import { Container, Content, Button, Platforms } from './styles';
import '../../utils/swiper-settings';
import PlatformsIcons from '../PlatformsIcons';

interface IMainBannerProps {
  name: string;
  background_image?: string;
  parent_platforms?: any;
}

const MainBannerItem = ({
  name,
  background_image,
  parent_platforms,
}: IMainBannerProps) => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(51deg,rgba(0, 0, 0, 1) 27%,rgba(0, 0, 0, 1) 38%,rgba(0, 0, 0, 0.22452731092436973) 100%), url(${background_image})`,
      }}
    >
      <Content>
        <h1>{name}</h1>
        <Button type="button">See Details</Button>

        <Platforms>
          <PlatformsIcons
            size={30}
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
        </Platforms>
      </Content>
    </Container>
  );
};

export default MainBannerItem;
