/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import * as Icons from 'react-icons/si';

interface PlatformsIconsProps {
  size?: number;
  platforms: any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Icon = ({ name, size }: any) => {
  const IconComponent = Icons[name];
  return <IconComponent size={size} />;
};

const platformsTranslator = {
  'Apple Macintosh': 'SiApple',
  PlayStation: 'SiPlaystation',
  Xbox: 'SiXbox',
  PC: 'SiSteam',
  Linux: 'SiLinux',
  Web: 'SiGooglechrome',
  Nintendo: 'SiNintendoswitch',
  Android: 'SiAndroid',
  iOS: 'SiIos',
};

const PlatformsIcons = ({ size, platforms }: PlatformsIconsProps) => {
  return (
    <>
      {platforms.map(({ platform }) => (
        <>
          <Icon
            key={platform.id}
            name={platformsTranslator[platform.name]}
            size={size}
          />
        </>
      ))}
    </>
  );
};

export default PlatformsIcons;
