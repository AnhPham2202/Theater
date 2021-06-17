import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTheaterFilmWithParamsFromApi } from '../../Redux/Actions/FilmAction';



export default function CalenderTheaterDetail(props) {
    const { mahethongrap } = props.match.params
    const dispatch = useDispatch();
    const thongTinHeThongRap = useSelector(state => state.TheaterListReducer.paritcularTheaterFilmArr)
    const thongTinRap = useSelector(state => state.TheaterListReducer.theaterInfo)
    const [rapIndex, setRapIndex] = useState(thongTinRap.firstRender)
    const [mangLichChieuCuaPhimDaChon, setMangLichChieu] = useState([])
    const [time, setTime] = useState('')
    const [maPhimDangChon, setMaPhimDangChon] = useState(0)
    let mangLichChieuKhongTrung = []


    useEffect(() => {
        dispatch(getTheaterFilmWithParamsFromApi(mahethongrap));
    }, []);

    mangLichChieuCuaPhimDaChon.map((lichChieu, index) => {
        lichChieu = lichChieu.ngayChieuGioChieu?.split('T')[0]
        mangLichChieuKhongTrung.push(lichChieu);
        mangLichChieuKhongTrung.reverse();
        for (let i = 1; i < mangLichChieuKhongTrung.length; i++) {
            if (mangLichChieuKhongTrung[i] === lichChieu) {
                mangLichChieuKhongTrung.splice(0, 1);
            }
        }
    });
    let renderDate = () => {
        return mangLichChieuKhongTrung.map((lichChieu, index) => {
            let ngayChieuGioChieuCuaPhimDaChon = lichChieu
            lichChieu = 'Ngày ' + lichChieu.split('-')[2] + '-' + lichChieu.split('-')[1] + '-' + lichChieu.split('-')[0]
            return (
                <div className={ngayChieuGioChieuCuaPhimDaChon === time ? 'date text-color' : 'date'}>
                    <a onClick={() => {
                        setTime(ngayChieuGioChieuCuaPhimDaChon.split('T')[0])
                    }}
                        className="font-weight-bold">{lichChieu}</a>
                </div>
            )

        })
    }

    let renderTime = () => {
        return mangLichChieuCuaPhimDaChon.map((lichChieuPhim, index) => {
            let schedule = {
                date: "",
                time: "",
            };
            schedule.date = lichChieuPhim.ngayChieuGioChieu.split("T")[0];
            schedule.time = lichChieuPhim.ngayChieuGioChieu.split("T")[1];
            if (schedule.date === time) {
                return (
                    <NavLink to={`/chitietphongve/${lichChieuPhim.maLichChieu}`}>
                        <button className="btn time-btn mt-2 mr-2">{`${schedule.time} - ${lichChieuPhim.tenRap}`}</button>
                    </NavLink>
                );
            }
        });
    };

    let renderTheater = () => {
        return thongTinHeThongRap[0]?.lstCumRap.map((theater, index) => {
            return (
                <li style={{ cursor: "pointer" }} key={index} className="left-col nav-item w-100 "
                    onClick={() => {
                        setTime('')
                        setMangLichChieu([])
                        dispatch({
                            type: 'SET_THEATER_INFO',
                            theaterInfo: {
                                name: theater.tenCumRap,
                                address: theater.diaChi,
                                firstRender: index
                            }
                        })
                    }}>
                    <a onClick={() => setRapIndex(index)} className={rapIndex === index ? "nav-link text-center active" : "nav-link text-center"} data-toggle="tab">
                        <div className="theater-name">
                            {theater.tenCumRap.toUpperCase()}
                        </div>
                    </a>
                </li>
            );
        })
    }

    let renderFilm = () => {
        return thongTinHeThongRap[0]?.lstCumRap[rapIndex]?.danhSachPhim.map(
            (film, index) => {
                return (
                    <div key={index} className="container mt-3">
                        <div className="row">
                            <div className="col-md-2 w-100">
                                <img className='w-100' src={film.hinhAnh} />
                            </div>
                            <div className="col-md-10 theater-text">
                                <span className="film-name">{film.tenPhim} </span>
                                <button className="btn default-btn" onClick={() => {
                                    setMangLichChieu(film.lstLichChieuTheoPhim)
                                    setMaPhimDangChon(film.maPhim)
                                }}>Xem Chi Tiết Lịch</button>
                                <span className="time">
                                    {maPhimDangChon === film.maPhim && time !== '' ? renderTime() : ''}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            }
        );
    };



    return (
        <section id="calender-theater-detail">
            <div className="total-table container ">
                <div className="row table-height">
                    <div className="col-5 theater-col">
                        <ul className="nav nav-tabs">{renderTheater()}</ul>
                    </div>
                    <div className="col-7 total-right-col">
                        <div className={mangLichChieuKhongTrung.length == 0 ? "row schedule-scroll-bar" : "row schedule-scroll-bar height-10"}>{renderDate()}</div>
                        <div className={mangLichChieuKhongTrung.length == 0 ? "tab-content film-col" : "tab-content film-col height-90"}>
                            <div className="tab-pane container active ">
                                {renderFilm()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

