import { SlickArrowLeft, SlickArrowRight } from './customArrows';
import {
  largeCardResponsive,
  mainBannerResponsive,
  mediumCardResponsive,
} from './responsiveSettings';

const mainBannerSlider = {
  slidesToScroll: 1,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  dots: false,
  arrows: false,
  responsive: mainBannerResponsive,
};

const mediumCardSlider = {
  slidesToScroll: 1,
  initialSlide: 0,
  // infinite: false,
  speed: 600,
  slidesToShow: 4,
  variableWidth: true,
  adaptiveHeight: true,
  prevArrow: <SlickArrowLeft currentSlide={undefined} slideCount={undefined} />,
  nextArrow: (
    <SlickArrowRight currentSlide={undefined} slideCount={undefined} />
  ),
  responsive: mediumCardResponsive,
};

const largeCardSlider = {
  slidesToScroll: 1,
  initialSlide: 0,
  // infinite: false,
  speed: 600,
  slidesToShow: 1,
  variableWidth: true,
  adaptiveHeight: true,
  responsive: largeCardResponsive,
  arrows: false,
};

export { mediumCardSlider, mainBannerSlider, largeCardSlider };
