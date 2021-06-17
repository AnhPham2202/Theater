import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getFilmDetailFromApi,
  getLogoFromApi,
  getTheaterFilmFromApi,
} from "../../Redux/Actions/FilmAction";

export default function CalenderFilmDetail(props) {
  //đôi tên biến demo
  let filmDetail = useSelector((state) => state.FilmDetailReducer.demo);
  console.log(filmDetail);
  const dispatch = useDispatch();
  const [theater, setTheater] = useState(0);
  const [time, setTime] = useState("");

  let { id } = props.match.params;
  useEffect(() => {
    dispatch(getFilmDetailFromApi(id));
  }, []);

  let handleSchedule = () => {
    //HÀM XỬ LÝ API ĐỂ LẤY ĐƯỢC NGÀY CHIẾU VÀ XỬ LÝ ĐỂ KHÔNG BỊ TRÙNG

    let showTimeArr = [];
    let dateShowTimeArr = [];
    let dateSplitedFromShowTime = [];
    let noDuplicatedDate = [];

    // Cần tối ưu  và đổi tên biến
    filmDetail.heThongRapChieu?.[theater]?.cumRapChieu.map((cumRap, index) => {
      cumRap.lichChieuPhim.map((lichChieu, i) => {
        showTimeArr.push(lichChieu.ngayChieuGioChieu);
      });
    });

    showTimeArr.map((showTimeElement, i) => {
      dateSplitedFromShowTime = showTimeElement.split("T");
      dateShowTimeArr.push(dateSplitedFromShowTime[0]);
    });

    dateShowTimeArr.map((date, index) => {
      // Ý TƯỞNG: PUSH VÀO MẢNG MỚI RỒI LẤY PHẦN TỬ VỪA PUSH SO SÁNH VỚI CÁC PHẦN TỬ ĐÃ PUSH (TRỪ NÓ) NẾU TRÙNG THÌ SPLICE RA
      noDuplicatedDate.push(date);
      noDuplicatedDate.reverse();
      for (let i = 1; i < noDuplicatedDate.length; i++) {
        if (noDuplicatedDate[i] === date) {
          noDuplicatedDate.splice(0, 1);
        }
      }
    });
    return formatSchedule(noDuplicatedDate);
  };


  let formatSchedule = (scheduleArr) => {
    return scheduleArr.map((item, index) => {
      let stringArr = [];
      let dateString = "";

      stringArr = item.split("-");
      dateString = "Tháng " + stringArr[1] + "-" + stringArr[2] + "-" + stringArr[0];
        return (
          <div className={item === time ? "date text-color" : "date"}>
            <a onClick={() => {
              setTime(item);
              // renderA(dateString, filmDetail.heThongRapChieu?.[theater].cumRapChieu)
            }} className="font-weight-bold ">
              {dateString}
            </a>
          </div>
        )
      
      
    });
  };

  // let renderA = (dateString, cumRapChieu) => {
  //   let date = "";
  //   let time = [];
  //   let originalFormatDateStringArr = [];

  //   originalFormatDateStringArr = dateString.split(" ").pop().split("-");
  //   date = originalFormatDateStringArr[2] + "-" + originalFormatDateStringArr[0] + "-" + originalFormatDateStringArr[1];
  //   console.log(date);
  //   cumRapChieu.map((lichChieuInfo, index) => {
  //     lichChieuInfo.lichChieuPhim.map((showTime, i) => {
  //       if (showTime.ngayChieuGioChieu.split("T")[0] === date) {
  //         time.push(showTime.ngayChieuGioChieu.split("T")[1]);
  //       }
  //     });
  //   });
  //   console.log(time);
  // };

  let renderTime = (arr) => {
    return arr.map((lichChieuPhim, index) => {
      let schedule = {
        date: "",
        time: "",
      };
      schedule.date = lichChieuPhim.ngayChieuGioChieu.split("T")[0];
      schedule.time = lichChieuPhim.ngayChieuGioChieu.split("T")[1];
      if (time === schedule.date) {
        return (
          <button className="btn time-btn mr-2">{schedule.time}</button>
        );
      }
    });
  };

  // =================================================MAIN UI================================================
  let renderLogo = () => {
    return filmDetail.heThongRapChieu?.map((theaterInfo, index) => {
        return (
          <li
            style={{ cursor: "pointer" }}
            key={index}
            className="left-col nav-item w-100 "
          >
            <a
              onClick={() => {
                setTime("");
                setTheater(index);
              }}
              className={index === theater ? 'nav-link text-center active' : 'nav-link text-center'}
              data-toggle="tab"
            >
              <div className="row">
                <div className="col-4">
                  <img src={theaterInfo.logo} />
                </div>
                <div className="col-8 logo-name text-left">
                  <span className="">
                    {theaterInfo.tenHeThongRap.toUpperCase()}
                  </span>
                </div>
              </div>
            </a>
          </li>
        );
      
    });
  };

  let renderTheater = () => {
    return filmDetail.heThongRapChieu?.[theater]?.cumRapChieu.map(
      (theater, index) => {
        return (
          <a key={index} style={{ cursor: "pointer" }} className="row theater-total">
            <div className="col-md-3">
              <img src="./img/address-1.png" />
            </div>
            <div className="col-md-9">
              <p className="theater-name">{theater.tenCumRap}</p>
              <span className="theater-detail">
                {renderTime(theater.lichChieuPhim)}
              </span>
            </div>
          </a>
        );
      }
    );
  };

  return (
    <section id="calender-film-detail">
      <div className="total-table container ">
        <div className="row table-height">
          <div className="col-md-3 logo">
            <ul className="nav nav-tabs">{renderLogo()}</ul>
          </div>
          <div className="col-md-9">
            <div className="row schedule-scroll-bar">{handleSchedule()}</div>
            <div className="tab-content">
              <div className="tab-pane container active ">
                {renderTheater()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
