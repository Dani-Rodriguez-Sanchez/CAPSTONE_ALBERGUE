import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/carousel/ages1.webp';
import image2 from '../images/carousel/ages2.webp';
import image3 from '../images/carousel/camino.webp';
import image4 from '../images/carousel/desayuno.webp';
import image5 from '../images/carousel/literas.webp';
import image6 from '../images/carousel/mochila.webp';
import image7 from '../images/carousel/peregrinas.webp';
import image8 from '../images/carousel/peregrinos.webp';

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card">
          <img src={image1} alt="" className="images-carousel"/>
        </div>
        <div className="card">
          <img src={image2} alt="" className="images-carousel"/>
        </div>
        <div className="card">
          <img src={image3} alt="" className="images-carousel"/>
        </div>
        <div className="card">
          <img src={image4} alt="" className="images-carousel"/>
        </div>
        <div className="card">
          <img src={image5} alt="" className="images-carousel"/>
        </div>
        <div className="card">
          <img src={image6} alt="" className="images-carousel"/>
        </div>
        <div className="card">
          <img src={image7} alt="" className="images-carousel"/>
        </div>
        <div className="card">
          <img src={image8} alt="" className="images-carousel" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
