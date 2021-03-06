import * as Icons from 'react-icons/si';
import Container from './styles';

interface IIconProps {
  name: string;
  size?: number;
}

interface IPlatformsIconsProps {
  size?: number;
  parent_platforms?: [
    {
      platform: {
        id: number;
        name: string;
      };
    },
  ];
}

const Icon = ({ name, size }: IIconProps) => {
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

const PlatformsIcons = ({ size, parent_platforms }: IPlatformsIconsProps) => {
  return (
    <Container>
      {parent_platforms?.slice(0, 4).map(({ platform }) => (
        <Icon
          name={platformsTranslator[platform.name]}
          size={size}
          key={platform.id}
        />
      ))}
    </Container>
  );
};

export default PlatformsIcons;
