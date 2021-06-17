import React, { useState } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
// import 'lity/dist/lity' 
import logo from './../../assets/img/logo.png'

export default function Carousel(props) {
  let infoArr = [
    { class: `bg1`, href: 'https://www.youtube.com/watch?v=kEgUgrh2rdA' },
    { class: `bg2`, href: 'https://www.youtube.com/watch?v=4zYGlqyCVk4' },
    { class: `bg3`, href: 'https://www.youtube.com/watch?v=T36HGZagV5w' },
    { class: `bg4`, href: 'https://www.youtube.com/watch?v=kJcfrHDTSEQ' },
    { class: `bg5`, href: 'https://www.youtube.com/watch?v=iCw-LfLw_Zk' }
  ]
  let renderCarousel = () => {
    return infoArr.map((obj, index) => {
      return (
        <div id='carousel' key={index} className={`carousel__item ${obj.class}`}>
          <div>
            <a data-lity href={obj.href}>
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      )
    })




  }
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  return (
    <div id="carousel" className="slick-carousel">
      <Slider {...settings} >
        {renderCarousel()}
      </Slider>
    </div>
  )
}







