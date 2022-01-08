import * as Icons from 'react-icons/fa';

import PlatformsContainer from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Icon = ({ name }: any) => {
  const IconComponent = Icons[name];
  return <IconComponent />;
};

const PlatformsIcons = () => {
  return (
    <PlatformsContainer>
      <Icon name="FaPlaystation" />
      <Icon name="FaXbox" />
      <Icon name="FaSteam" />
    </PlatformsContainer>
  );
};

export default PlatformsIcons;
