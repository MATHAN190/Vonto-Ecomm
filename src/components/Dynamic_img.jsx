import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vonto from '../assets/1000139000.jpg'

export default function BannerSlider() {
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/cb30642fe40a294e.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/74f0ad81e44e6e6f.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/88d74305bb85e58c.jpg?q=60",
    vonto
  ];

  const settings = {
    dots: true,          // small dots bottom la show
    infinite: true,      // infinite loop
    speed: 500,          // speed of transition
    slidesToShow: 1,     // one image at a time
    slidesToScroll: 1,
    autoplay: true,      // auto move
    autoplaySpeed: 2000, // 3 sec ku oru image
    arrows: false        // left/right arrow remove
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`banner-${index}`} className="w-fit md:w-full h-[150px] md:h-[300px] md:object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
