import Slider from 'react-slick';
import Container from './styles';

const WideCard = ({ screenshots }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Container>
      <Slider {...settings}>
        {screenshots.map(({ id, image }) => (
          <div key={id}>
            <img src={image} alt={image} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default WideCard;
