/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import * as Icons from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Icon = ({ name, size }: any) => {
  const IconComponent = Icons[name];
  return <IconComponent size={size} />;
};

interface PlatformsIconsProps {
  size?: number;
  platforms: any;
}

// const platforms = [
//   {
//     id: '1',
//     name: 'PlayStation',
//   },
//   {
//     id: '2',
//     name: 'Xbox',
//   },
//   {
//     id: '3',
//     name: 'PC',
//   },
//   {
//     id: '4',
//     name: 'Apple Macintosh',
//   },
//   {
//     id: '5',
//     name: 'Linux',
//   },
// ];

const platformsTranslator = {
  'Apple Macintosh': 'FaApple',
  PlayStation: 'FaPlaystation',
  Xbox: 'FaXbox',
  PC: 'FaSteam',
  Linux: 'FaLinux',
  Web: 'FaLinux',
  Nintendo: 'FaLinux',
  Android: 'FaLinux',
  iOS: 'FaLinux',
};

const PlatformsIcons = ({ size, platforms }: PlatformsIconsProps) => {
  return (
    <>
      {platforms.map(platform => (
        <Icon
          key={platform.id}
          name={platformsTranslator[platform.name]}
          size={size}
        />
      ))}
    </>
  );
};

export default PlatformsIcons;
