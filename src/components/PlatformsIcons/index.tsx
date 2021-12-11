import { FaPlaystation, FaSteam, FaXbox } from 'react-icons/fa';
import PlatformsContainer from './styles';

const PlatformsIcons = () => {
  return (
    <PlatformsContainer>
      <FaPlaystation size={18} />
      <FaSteam size={18} />
      <FaXbox size={18} />
    </PlatformsContainer>
  );
};

export default PlatformsIcons;
