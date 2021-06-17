import React from 'react'

export default function News() {
    return (
        <section id="news">
            {/* Nav tabs */}
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#news0">Điện Ảnh 24h</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#news1">Review</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#news2">Khuyến Mãi</a>
                </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
                <div className="tab-pane container active" id="news0">
                    <div className="row news-content">
                        <div className="col-md-6">
                            <img className="img-fluid" src="./img/news-1.jpg" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src="./img/news-2.jpg" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                    </div>
                    <div className="row news-content">
                        <div className="col-md-4">
                            <img className="img-fluid" src="./img/news-3.png" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src="./img/news-3.png" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                        <div className="col-md-4 sub-news">
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane container fade" id="news1">
                    <div className="row news-content">
                        <div className="col-md-6">
                            <img className="img-fluid" src="./img/news-1.jpg" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src="./img/news-2.jpg" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                    </div>
                    <div className="row news-content">
                        <div className="col-md-4">
                            <img className="img-fluid" src="./img/news-3.png" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src="./img/news-3.png" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                        <div className="col-md-4 sub-news">
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane container fade" id="news2">
                    <div className="row news-content">
                        <div className="col-md-6">
                            <img className="img-fluid" src="./img/news-1.jpg" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src="./img/news-2.jpg" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                    </div>
                    <div className="row news-content">
                        <div className="col-md-4">
                            <img className="img-fluid" src="./img/news-3.png" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src="./img/news-3.png" />
                            <a className="news-title" href="#">
                                <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                            </a>
                            <p className="news-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây
                            thành phố HCM sẽ
                            chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
                            <a href="#"><i className="far fa-thumbs-up">2</i></a>
                            <a href="#"><i className="far fa-comment-alt">0</i></a>
                        </div>
                        <div className="col-md-4 sub-news">
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 sub-news-img">
                                    <img src="./img/sub-news-1.png" />
                                </div>
                                <div className="col-md-9 sub-news-text">
                                    <a href="#">
                                        <p>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành
                                        phố
                                        HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu
                                        tiên
                  tại Việt Nam!</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn ">Xem Thêm</button>
            </div>
        </section>

    )
}
