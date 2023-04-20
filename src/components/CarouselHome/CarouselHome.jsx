import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import boom from "../../images/Secciones/entradas/Boom.jpg";
import '../../styles/components/CarouselHome.css'

export function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-640px"
          src={ boom }
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ boom }
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ boom }
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
