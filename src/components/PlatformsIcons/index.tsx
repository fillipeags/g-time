/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
import * as Icons from 'react-icons/fa';

// import PlatformsContainer from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Icon = ({ name, size }: any) => {
  const IconComponent = Icons[name];
  return <IconComponent size={size} />;
};

// const checkPlatform = [
//   {
//     iconName: {
//       playStation: 'FaPlaystation',
//       xbox: 'FaXbox',
//       pc: 'FaSteam',
//     },
//   },
// ];

// const platforms = ['playstation', 'xbox'];

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
