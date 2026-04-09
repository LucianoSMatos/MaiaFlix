import Slider from 'react-slick';
import './carousel.css';

function Carousel({children}) {

    const settigs = {
        dots: false,
        infinite: false,
        speed: 300,
        centerMode:false,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesToShow: 5,
        slidesToScroll: 1,
    }

  return (
    <div>
        <Slider {...settigs}>
            {children}
        </Slider>
    </div>
  );
}
export default Carousel;    