/* eslint-disable react/require-default-props */
import * as Icons from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Icon = ({ name, size }: any) => {
  const IconComponent = Icons[name];
  return <IconComponent size={size} />;
};

interface PlatformsIconsProps {
  size?: number;
}

const PlatformsIcons = ({ size }: PlatformsIconsProps) => {
  return (
    <>
      <Icon name="FaPlaystation" size={size} />
      <Icon name="FaXbox" size={size} />
      <Icon name="FaSteam" size={size} />
    </>
  );
};

export default PlatformsIcons;
