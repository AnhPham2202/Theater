import React from 'react'
import Slider from "react-slick";
import slide1 from '../../assets/img/slide-1.jpg'
import slide2 from '../../assets/img/slide-2.jpg'
import slide3 from '../../assets/img/slide-3.jpg'
import slide4 from '../../assets/img/slide-4.jpg'
import slide5 from '../../assets/img/slide-5.jpg'
import slide6 from '../../assets/img/slide-6.jpg'

export default function Apps() {
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 2000,
      };
    return (
        <section id="app">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
        <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn</p>
        <button className="btn btn-danger">App miễn phí - tải về ngay!</button>
        <p>TIX có hai phiên bản <a href="#"> iOS</a> &amp; <a href="#">Android</a></p>
      </div>
      <div className="col-md-6 app-right-content">
        <img src="/img/mobile.png" alt />
        <div className="slide">
          <Slider {...settings} className=" mob slick-carousel-noDotsArrows">
            <img src={slide1} alt />
            <img src={slide2} alt />
            <img src={slide3} alt />
            <img src={slide4} alt />
            <img src={slide5} alt />
            <img src={slide6} alt />
          </Slider>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
