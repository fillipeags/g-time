import { FaPlaystation, FaSteam, FaXbox } from 'react-icons/fa';
import { Container, Content, PlatformsContainer, Button } from './styles';
import '../../utils/swiper-settings';

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

        <PlatformsContainer>
          <h3>Platforms: </h3>
          <FaPlaystation size={18} />
          <FaSteam size={18} />
          <FaXbox size={18} />
        </PlatformsContainer>

        <Button type="button">See More</Button>
      </Content>
    </Container>
  );
};

export default MainBannerItem;
