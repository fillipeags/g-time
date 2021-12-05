// swiper core styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay, Parallax } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay, Parallax]);
