import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Topslide() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    
      const sliderImgStyle = {
        width: "90vw", // Set the desired width
        height: "450px", // Set the desired height
        objectFit: "cover",
        display: "block",
        margin: "0 auto"
     
      };

  return (
    <Slider {...settings}>
    <div className="wdt">
      <img
        style={sliderImgStyle}
        alt="pic1"
        src="/images/Sports.jpg"
      />
    </div>
    <div className="wdt">
      <img
        style={sliderImgStyle}
        alt="pic2"
        src="/images/7.webp"
      />
    </div>
    <div className="wdt">
      <img
        style={sliderImgStyle}
        alt="pic3"
        src="/images/3.webp"
      />
    </div>
    <div className="wdt">
      <img
        style={sliderImgStyle}
        alt="pic4"
        src="/images/6.webp "
      />
    </div>
  </Slider>
  )
}

export default Topslide