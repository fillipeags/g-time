import { Container, Content, Button, PlatformsWrapper } from './styles';
import '../../utils/swiper-settings';
import PlatformsIcons from '../PlatformsIcons';

interface IMainBannerProps {
  title: string;
  summary: string;
  coverImage: string;
}

const MainBannerItem = ({ title, summary, coverImage }: IMainBannerProps) => {
  return (
    <Container
      style={{
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(51deg,rgba(0, 0, 0, 1) 27%,rgba(0, 0, 0, 1) 38%,rgba(0, 0, 0, 0.22452731092436973) 100%), url(${coverImage})`,
      }}
    >
      <Content>
        <h1>{title}</h1>
        <p>{summary}</p>

        <PlatformsWrapper>
          <h3>Platforms: </h3>
          <PlatformsIcons />
        </PlatformsWrapper>

        <Button type="button">See More</Button>
      </Content>
    </Container>
  );
};

export default MainBannerItem;
