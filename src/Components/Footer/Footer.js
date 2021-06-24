import React from 'react'

import logo_1 from '../../assets/img/logoConnect-1.png'
import logo_2 from '../../assets/img/logoConnect-2.png'
import logo_3 from '../../assets/img/logoConnect-3.png'
import logo_4 from '../../assets/img/logoConnect-4.png'
import logo_5 from '../../assets/img/logoConnect-5.png'
import logo_6 from '../../assets/img/logoConnect-6.png'
import logo_7 from '../../assets/img/logoConnect-7.jpg'
import logo_8 from '../../assets/img/logoConnect-8.png'
import logo_9 from '../../assets/img/logoConnect-9.png'
import logo_10 from '../../assets/img/logoConnect-10.jpg'
import logo_11 from '../../assets/img/logoConnect-11.png'
import logo_12 from '../../assets/img/logoConnect-12.png'
import logo_13 from '../../assets/img/logoConnect-13.png'
import logo_14 from '../../assets/img/logoConnect-14.jpg'
import logo_15 from '../../assets/img/logoConnect-15.png'
import logo_16 from '../../assets/img/logoConnect-16.png'
import logo_17 from '../../assets/img/logoConnect-17.png'
import logo_18 from '../../assets/img/logoConnect-18.png'
import logo_19 from '../../assets/img/logoConnect-19.png'
import logo_20 from '../../assets/img/logoConnect-20.png'
import footer_1 from '../../assets/img/footer-logo-1.png'
import footer_2 from '../../assets/img/footer-logo-2.png'
import footer_3 from '../../assets/img/footer-logo-3.png'
import footer_4 from '../../assets/img/footer-logo-4.png'
import sponsor_1 from '../../assets/img/footer-1.jpg'
import sponsor_2 from '../../assets/img/footer-2.png'


export default function Footer() {
    const logoArr = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8, logo_9, logo_10, logo_11, logo_12, logo_13, logo_14, logo_15, logo_16, logo_17, logo_18, logo_19, logo_20]

    const renderLogo = () => {
        return (
            <div className="row">
                {logoArr.map((logo, index) => {
                    return (
                        <div key={index} className="col-3 logo-footer">
                            <a href="#">
                                <img src={logo} alt />
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }


    
    return (
        <section id="footer">
            <div className="container">
                <div className="row top-footer">
                    <div className="left col-md-4">
                        <p>TIX</p>
                        <div className="row">
                            <div className="col-md-6">
                                <a href="#">FAQ</a>
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="col-md-6">
                                <a href="#">Thoả thuận sử dụng</a>
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    <div className="mid col-md-4">
                        <p>Đối tác</p>
                        {renderLogo()}
                    </div>
                    <div className="right col-md-4">
                        <div className="row">
                            <div className="media-social col-md-6">
                                <p>MOBILE APP</p>

                                <a href="#">
                                    <img src={footer_1} alt />
                                </a>
                                <a href="#">
                                    <img src={footer_2} alt />
                                </a>
                            </div>
                            <div className="app col-md-6">
                                <p>SOCIAL</p>
                                <a href="#">
                                    <img src={footer_3} alt />
                                </a>
                                <a href="#">
                                    <img src={footer_4} alt />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bottom-footer">
                    <div className="col-md-2">
                        <a href="#">
                            <img src={sponsor_1} alt />
                        </a>
                    </div>
                    <div className="col-md-8">
                        <p className="title">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                        <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.<br />
                            Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />
                            đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí
                            Minh cấp.<br />
                            Số Điện Thoại (Hotline): 1900 545 436<br />
                            Email: <a href="#">support@tix.vn</a></p>
                    </div>
                    <div className="col-md-2">
                        <a href="#">
                        <img src={sponsor_2} alt />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
