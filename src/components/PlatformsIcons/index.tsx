/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Icons from 'react-icons/si';
import Container from './styles';

interface PlatformsIconsProps {
  size?: number;
  platforms: any;
}

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
    <Container>
      {platforms.slice(0, 4).map(({ platform }) => (
        <Icon name={platformsTranslator[platform.name]} size={size} />
      ))}
    </Container>
  );
};

export default PlatformsIcons;
