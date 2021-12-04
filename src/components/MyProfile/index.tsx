import { FiChevronDown } from 'react-icons/fi';
import AvatarContainer from './styles';

const MyProfile: React.FC = () => {
  return (
    <AvatarContainer>
      <img
        src="https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png"
        alt="User Avatar"
      />

      <FiChevronDown size={24} />
    </AvatarContainer>
  );
};

export default MyProfile;
