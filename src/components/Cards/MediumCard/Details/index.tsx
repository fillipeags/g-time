import { FaPlaystation, FaSteam, FaXbox, FaPlay } from 'react-icons/fa';
import { PlatformsContainer } from '../../../MainBanner/styles';
import { Container, Content, PlayContainer } from './styles';

interface IMediumCardDetailsProps {
  id: string;
  title: string;
}

const MediumCardDetails = ({ id, title }: IMediumCardDetailsProps) => {
  return (
    <Container id={id}>
      <PlayContainer>
        <FaPlay size={18} />
      </PlayContainer>
      <Content>
        <h4>{title}</h4>
        <PlatformsContainer>
          <FaPlaystation size={18} />
          <FaSteam size={18} />
          <FaXbox size={18} />
        </PlatformsContainer>

        <p>
          Released Year <span>2020</span>
        </p>
        <p>
          Genre <span>Adventure, Zombies</span>
        </p>

        <button type="button">See More</button>
        <button type="button">Add To My Games</button>
      </Content>
    </Container>
  );
};

export default MediumCardDetails;
