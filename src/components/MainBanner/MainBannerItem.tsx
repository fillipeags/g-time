import { Container, Content, Button, PlatformsWrapper } from './styles';
import '../../utils/swiper-settings';
import PlatformsIcons from '../PlatformsIcons';

interface IMainBannerProps {
  title: string;
  coverImage: string;
}

const MainBannerItem = ({ title, coverImage }: IMainBannerProps) => {
  return (
    <Container
      style={{
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(51deg,rgba(0, 0, 0, 1) 27%,rgba(0, 0, 0, 1) 38%,rgba(0, 0, 0, 0.22452731092436973) 100%), url(${coverImage})`,
      }}
    >
      <Content>
        <h1>{title}</h1>

        {/* <PlatformsWrapper>
          <PlatformsIcons />
        </PlatformsWrapper> */}

        <Button type="button">See Details</Button>
      </Content>
    </Container>
  );
};

export default MainBannerItem;
