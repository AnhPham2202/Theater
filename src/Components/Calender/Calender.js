import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getTheaterFilmFromApi,
} from "../../Redux/Actions/FilmAction";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import TodayIcon from '@material-ui/icons/Today';
import Avatar from '@material-ui/core/Avatar';
import { setThongTinRapTheoIndex } from "../../Redux/Actions/TheaterActions";


const useAccordion = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiAccordionDetails-root': {
      display: 'block'
    },
    '& .MuiPaper-elevation1': {
      boxShadow: 'none',
      borderBottom: '0.5px solid #9b9b9b4f'
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const useGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const useButton = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
    '& a': {
      borderBottom: 'none !important',
      opacity: '1 !important'
    }
  },
  colorGreen: {
    color: 'green',
    '&:hover': {
      color: 'green',

    }
  }
}));
const useAvatar = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  rounded: {
    color: '#fff',
  },
}));


export default function Calender() {
  const theaterFilmArr = useSelector((state) => state.TheaterListReducer.theaterFilmArr);
  const dispatch = useDispatch();
  const accordion = useAccordion();
  const btn = useButton()
  const avatar = useAvatar();
  const [expanded, setExpanded] = useState(false);
  const [filmIndex, setfilmIndex] = useState(0);
  const [brandIndex, setBrandIndex] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(getTheaterFilmFromApi());
  }, []);


  let renderLogo = () => {
    return (
      <ul className="nav nav-tabs">{
        theaterFilmArr.map((theaterInfo, index) => {
          return (
            <li key={index} className="left-col nav-item ">
              <a
                onClick={() => {
                  // setTheater(theaterInfo.maHeThongRap);
                  setfilmIndex(0);
                  setBrandIndex(index)
                  setExpanded(false)
                  console.log(index, brandIndex)

                }}
                className="nav-link"
                data-toggle="tab"
              ><Button className={index !== brandIndex ? 'theater-choosing' : ''}>
                  <img src={theaterInfo.logo} />
                </Button>
              </a>
            </li>
          );
        })};
      </ul>
    );
  };
  const renderTime = (timeArr) => {
    return timeArr.map((time, index) => {
      return (
        <span key={index} className={btn.root}>
          <Button variant="outlined">
            <NavLink className={btn.colorGreen} to={`/chitietphongve/${time.maLichChieu}`}>
              <TodayIcon style={{ marginRight: 2, color: 'black' }} />
              {time.ngayChieuGioChieu.replace('T', ' lúc ')}
            </NavLink>
          </Button>
        </span>
      )
    })
  }
  let renderFilm = () => {
    return theaterFilmArr[brandIndex]?.lstCumRap[filmIndex]?.danhSachPhim.map(
      (item, index) => {
        return (
          <div key={index} className={accordion.root}>
            <Accordion expanded={expanded === index} onChange={handleChange(index)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Avatar variant="rounded" className={avatar.rounded}>
                      <img style={{ width: '100%' }} src={item.hinhAnh} />
                    </Avatar>

                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="button" >{item.tenPhim}</Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" style={{ fontWeight: 'bold' }} gutterBottom>2D Digital</Typography>
                <div style={{ textAlign: "center" }} className={btn.root} >
                  <Button variant="outlined">
                    <NavLink to={`/filmdetail/${item.maPhim}`}>
                      Xem tất cả lịch chiếu
                    </NavLink>
                  </Button>

                </div>
                {renderTime(item.lstLichChieuTheoPhim)}
              </AccordionDetails>
            </Accordion>
          </div>
        );
      }
    );
  };
  let renderTheater = () => {
    return theaterFilmArr[brandIndex]?.lstCumRap.map((cumRap, i) => {
      return (
        <a onClick={() => {
          setfilmIndex(i);
          setExpanded(false)
        }}
          key={i}
          style={{ cursor: "pointer" }}
          className={i !== filmIndex ? "row theater-choosing" : "row"}
        >
          <div className="col-md-3">
            <img src={theaterFilmArr[brandIndex]?.logo} />
          </div>
          <div className="col-md-9 theater-text">
            <Typography variant="button" className="theater-name" gutterBottom>
              {cumRap.tenCumRap}
            </Typography>
            <Typography variant="body2" className="theater-address" display="block" gutterBottom>
              {cumRap.diaChi}
            </Typography>
            <NavLink onClick={() => {
              dispatch(setThongTinRapTheoIndex({
                name: cumRap.tenCumRap,
                address: cumRap.diaChi,
                firstRender: i
              }))
            }}

              to={`/theaterdetail/${theaterFilmArr[brandIndex].maHeThongRap}`} className="theater-detail">[Chi Tiết]</NavLink>
          </div>
        </a>
      );
    })
  };

  return (
    <section id="calender">
      <div className="total-table container ">
        <div className="row table-height">
          <div className="col-md-1">{renderLogo()}</div>
          <div className="col-md-5">
            <div className="tab-content">
              <div className="tab-pane container active ">
                {renderTheater()}
              </div>
            </div>
          </div>
          <div className="col-md-6">{renderFilm()}</div>
        </div>
      </div>
    </section>
  )
}
