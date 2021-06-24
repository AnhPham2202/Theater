import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFilmDetailFromApi } from "../../Redux/Actions/FilmAction";
// import background from '../../assets/img'

export default function FilmInfo(props) {
  let dispatch = useDispatch();
  let filmDetail = useSelector((state) => state.FilmDetailReducer.chiTietPhim);
  let { id } = props.match.params;
  let ngayKhoiChieu = filmDetail.ngayKhoiChieu?.split("T")[0];
  let thoiLuong = filmDetail.heThongRapChieu?.[0]?.cumRapChieu?.[0].lichChieuPhim[0].thoiLuong;

  useEffect(() => {
    dispatch(getFilmDetailFromApi(id));
  }, []);


  return (
    <div id="film-detail">
      <div className="container">
        <div className="row">
          <div
            className="film-bg"
            style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }}
          ></div>
          <div className="bg"></div>

          <div className="col-3">
            <img className="w-100" src={filmDetail.hinhAnh} />
          </div>
          <div className="col-9 film-info">
            <h4 className="title text-white">
              {filmDetail.tenPhim?.toUpperCase()}
            </h4>
            <p className="text-white-50">{filmDetail.moTa}</p>
            <div className="row">
              <div className="col-3 font-weight-bold">
                <p className="text-white">Ngày khởi chiếu</p>
                <p className="text-white">Thời lượng</p>
              </div>
              <div className="col-2">
                <p className="text-white">{ngayKhoiChieu}</p>
                <p className="text-white">{thoiLuong} phút</p>
              </div>
            </div>

            <a data-lity href={filmDetail.trailer}><button className="btn mr-3">Xem Trailer</button></a>
            <a href="#filmCalender">
              <button className="btn mr-3 font-weight-bold">Mua Vé Ngay</button>
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
 
  );
}
