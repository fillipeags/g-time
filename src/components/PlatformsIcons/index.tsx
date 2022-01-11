/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Icons from 'react-icons/si';
import '../../utils/swiper-settings';

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
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 0,
      }}
      speed={1600}
    >
      {platforms.map(({ platform }) => (
        <SwiperSlide key={platform.id}>
          <Icon name={platformsTranslator[platform.name]} size={size} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PlatformsIcons;
