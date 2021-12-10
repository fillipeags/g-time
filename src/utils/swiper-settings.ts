// swiper core styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay, Parallax } from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay, Parallax]);

const breakpoints = {
  '640': {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 4,
    spaceBetween: 50,
  },
  '1024': {
    slidesPerView: 3,
    spaceBetween: 300,
  },
  '1366': {
    slidesPerView: 4,
    spaceBetween: 300,
  },
  '1920': {
    slidesPerView: 5,
    spaceBetween: 310,
  },
};

// install Swiper modules
export default breakpoints;
