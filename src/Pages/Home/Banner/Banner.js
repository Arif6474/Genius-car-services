import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    
    return (
    <div >
        <Carousel fade>
  <Carousel.Item>
    <img height={550}
      className="d-block w-100 "
      src="https://i.ibb.co/XxWZDT3/mohsen-taheri-h-P1-T2-EM1d-Uw-unsplash-ccexpress.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={550}
      className="d-block w-100 "
      src="https://i.ibb.co/2ZJ0C1p/irish83-q-Bu-Yqr-LXUDI-unsplash-ccexpress.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={550}
      className="d-block w-100 "
      src="https://i.ibb.co/4scdspb/cadu-de-castro-alves-h-ECLlj-C7-Wm8-unsplash-ccexpress.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
};

export default Banner;