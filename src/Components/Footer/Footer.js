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

export default function Footer() {

    const renderLogo = () => {
        const logoContent = []
        for (let i = 1; i <= 16; i += 5) {
            logoContent.push(
                <div className="row">
                    {renderRow(i)}
                </div>
            )
        }
        return logoContent;
    }
    const renderRow = (start) => {
        let rowContent = []

        for (let i = start; i <= start + 4; i++) {

            if (i == 7 || i == 10 || i == 14) {
                rowContent.push(
                    <a href="#">
                        <img src={logo_1} alt />
                    </a>
                )
            } else {
                rowContent.push(
                    <a href="#">
                        <img src={`./img/logoConnect-${i}.png`} alt />
                    </a>
                )
            }
        }
        return rowContent;
    }

    const renderOtherLogo = (start, end) => {
        let content = [];
        for (let i = start; i <= end; i++) {
            content.push(
                <a href="#">
                    <img src={`./img/footer-logo-${i}.png`} alt />
                </a>
            )
        }
        return content;
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
                                    {renderOtherLogo(1,2)}
                                </div>
                                <div className="app col-md-6">
                                    <p>SOCIAL</p>
                                    {renderOtherLogo(3,4)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bottom-footer">
                        <div className="col-md-2">
                            <a href="#">
                                <img src="./img/footer-1.jpg" alt />
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
                                <img src="./img/footer-2.png" alt />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
