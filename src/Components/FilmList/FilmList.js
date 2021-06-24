import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilmDetailFromApi, getFilmFromApi, getTheaterFilmFromApi } from '../../Redux/Actions/FilmAction'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import { darkOrange, orange } from '../../Util/var';
import { history } from '../../App';


const useButton = makeStyles((theme) => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            background: orange,
            color: "white !important",
            transition: 'all 0.5s',
            '&:hover': {
                background: darkOrange,
            },
        },
        '& .MuiButton-root.Mui-disabled': {
            background: 'gray',
        },
        '& a': {
            color: 'white !important'
        }
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
    limitText: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    }
}));

const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        maxHeight: 400,
        height: 'fit-content',
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
}));

const useClickListener = makeStyles((theme) => ({
    root: {
        position: 'relative',
        cursor: 'pointer'
    },
    dropdown: {
        position: 'absolute',
        borderRadius: 5,
        top: '90%',
        right: 0,
        left: 0,
        zIndex: 1,
        boxShadow: '0px 7px 20px 3px rgb(0 0 0 / 75%)',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function FilmList(propsRoute) {
    const dispatch = useDispatch()
    let filmArr = useSelector((state) => state.FilmDetailReducer.filmArr)
    const chiTietPhim = useSelector(state => state.FilmDetailReducer.chiTietPhim)


    const grid = useGrid();
    const clickListener = useClickListener();
    const list = useList();
    const btn = useButton();


    const [phimSearch, setPhimSearch] = useState('Phim')
    const [rapSearch, setRapSearch] = useState('Rạp')
    const [timeSearch, setTimeSearch] = useState('Thời gian')
    const [openPhim, setOpenPhim] = useState(false);
    const [openRap, setOpenRap] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [heThongRapIndex, setHeThongRapIndex] = useState();
    const [cumRapIndex, setCumRapIndex] = useState();
    const [lichIndex, setLichIndex] = useState();
    const [maPhimTimKiem, setMaPhimTimKiem] = useState();
    const [disabled, setDisabled] = useState(true)
    const [maLichChieuTimKiem, setMaLichChieuTimKiem] = useState();


    const handleSetOpenPhim = () => {
        setOpenPhim((prev) => !prev);
    };

    const handleClickAwayPhim = () => {
        setOpenPhim(false);
    };
    const handleSetOpenRap = () => {
        setOpenRap((prev) => !prev);
    };

    const handleClickAwayRap = () => {
        setOpenRap(false);
    };
    const handleSetOpenTime = () => {
        setOpenTime((prev) => !prev);
    };

    const handleClickAwayTime = () => {
        setOpenTime(false);
    };

    useEffect(async () => {
        dispatch(getFilmFromApi('GP03'))
    }, [])
    useEffect(() => {
        dispatch(getFilmDetailFromApi(maPhimTimKiem))
    }, [maPhimTimKiem])

    if (timeSearch !== 'Thời gian' && disabled == true) { setDisabled(false) }
    if (timeSearch === 'Thời gian' && disabled == false) { setDisabled(true) }
    const dropDownFilm = () => {
        return (
            <div className={list.root}>
                <List component="nav" aria-label="main mailbox folders">
                    {
                        filmArr.map((film, index) => {
                            return (
                                <ListItem key={index}
                                    button
                                    onClick={(event) => {
                                        setPhimSearch(film.tenPhim)
                                        setMaPhimTimKiem(film.maPhim)
                                        setRapSearch('Rạp')
                                        setTimeSearch('Thời gian')
                                    }}
                                >
                                    <ListItemText primary={film.tenPhim} />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
    const dropDownRap = () => {
        if (phimSearch === 'Phim') {
            return (
                <div className={list.root}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem >
                            <ListItemText primary="Vui lòng chọn phim" />
                        </ListItem>
                    </List>
                </div>
            )
        } else {
            return (
                <div className={list.root}>
                    <List component="nav" aria-label="main mailbox folders">
                        {
                            chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                                return heThongRap.cumRapChieu.map((rap, i) => {
                                    // console.log(i);

                                    return (
                                        <ListItem key={i}
                                            button
                                            onClick={(event) => {
                                                setCumRapIndex(i)
                                                setHeThongRapIndex(index)
                                                setRapSearch(rap.tenCumRap)
                                                setTimeSearch('Thời gian')
                                                // set(film.tenPhim)
                                            }}
                                        >
                                            <ListItemText primary={rap.tenCumRap} />
                                        </ListItem>
                                    )
                                })

                            })
                        }
                    </List>
                </div>
            )
        }

    }
    const dropDownTime = () => {
        if (rapSearch === 'Rạp') {
            return (
                <div className={list.root}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem >
                            <ListItemText primary="Vui lòng chọn rạp" />
                        </ListItem>
                    </List>
                </div>
            )
        } else {
            return (
                <div className={list.root}>
                    <List component="nav" aria-label="main mailbox folders">
                        {
                            chiTietPhim.heThongRapChieu?.[heThongRapIndex]?.cumRapChieu?.[cumRapIndex]?.lichChieuPhim.map((lich, index) => {
                                return (
                                    <ListItem key={index}
                                        button
                                        onClick={(event) => {
                                            setTimeSearch(lich.ngayChieuGioChieu.replace('T', ' - '))
                                            setLichIndex(index)
                                        }}
                                    >
                                        <ListItemText primary={`${lich.ngayChieuGioChieu.replace('T', ' - ')} (${lich.tenRap})`} />
                                    </ListItem>
                                )

                            })
                        }
                    </List>
                </div>
            )
        }
    }

    const renderFilm = (i) => {
        return (
            filmArr.slice(i, i + 8).map((film, index) => {
                return (
                    <div key={index} class="film-list-item">
                        <div class="poster" style={{ backgroundImage: `url('${film.hinhAnh}')` }}>
                            <div class="overlay">
                                <a data-lity href={film.trailer}><i class="fas fa-play"></i></a>
                            </div>
                        </div>
                        <div class="film-info">
                            <div className="film-name">
                                <span class="age-limit mr-2">C18</span>
                                <Typography variant="button" gutterBottom>
                                    {film.tenPhim}
                                </Typography>

                            </div>
                            <NavLink to={`/filmdetail/${film.maPhim}`}>
                                <button class="btn btn-danger">MUA VÉ</button>
                            </NavLink>
                        </div>
                    </div>
                )
            })
        )

    }


    const renderCarousel = () => {
        let num = Math.floor(filmArr.length / 8);
        let filmCarouselArr = []

        if (filmArr.length % 8 !== 0) {
            num += 1
        }

        for (let i = 0; i < num; i++) {
            filmCarouselArr.push(
                <div class="list-line-1">
                    {renderFilm(i + 7 * i)}
                </div>
            )
        }
        return (
            <Slider>
                {filmCarouselArr}
            </Slider>
        )
    }

    const mangRenderThanhTimKiem = [
        { title: phimSearch, dropDown: dropDownFilm(), open: openPhim, click: handleSetOpenPhim, away: handleClickAwayPhim },
        { title: rapSearch, dropDown: dropDownRap(), open: openRap, click: handleSetOpenRap, away: handleClickAwayRap },
        { title: timeSearch, dropDown: dropDownTime(), open: openTime, click: handleSetOpenTime, away: handleClickAwayTime },
    ]
    return (
        <section id="film-list" class="container">
            <div class="filter container" style={{ position: 'relative', zIndex: 2 }}> {/* cho postion vào để có thể dùng z index vì slick slider có z index làm che  mất dropdown */}
                <div className={grid.root}>
                    <Grid container spacing={0}>
                        {mangRenderThanhTimKiem.map((item, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                    <ClickAwayListener onClickAway={item.away}>
                                        <Grid onClick={item.click} className={clickListener.root} container spacing={3}>
                                            <Grid className={grid.limitText} item xs={10}>
                                                <a >{item.title}</a>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <i class="fas fa-angle-down"></i>
                                            </Grid>

                                            {item.open ? (
                                                <div className={clickListener.dropdown}>
                                                    {item.dropDown}
                                                </div>
                                            ) : null}

                                        </Grid>
                                    </ClickAwayListener>
                                </Grid>
                            )
                        })}


                        <Grid item xs={3}>
                            <Grid container spacing={3}>
                                <Grid className={btn.root} item xs={12}>
                                    {/* Dùng button rồi push do dùng Navlink bên trong Button gây ra onClick (href) phải vào chữ mua vé 
                                    (được nằm trong navlink) mới vào đc link, nếu bấm ở rìa button thì sẽ k có onClick */}
                                    <Button onClick={() => history.push(`/chitietphongve/${chiTietPhim.heThongRapChieu?.[heThongRapIndex]?.cumRapChieu?.[cumRapIndex]?.lichChieuPhim?.[lichIndex]?.maLichChieu}`)} disabled={disabled} >
                                        Mua vé ngay
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            {/* Do layout này đã làm trước lúc vừa tiếp cận scss (chưa học React) nên em chủ yếu dùng bs4 và css thuần
    nhưng API không chia ra phim sắp chiếu và phim đang chiếu (em làm phần này chỉ cho layout thêm phần sinh động)
     nên phần này em không sửa lại 
*/}
            {/*  Nav pills  */}
            <ul id="film-nav" class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#premiere">Đang chiếu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#coming">Sắp chiếu</a>
                </li>

            </ul>

            {/*  Tab panes  */}
            <div class="tab-content">
                <div id="premiere" class="slick-carousel-noDots film-list-showing tab-pane  active">
                    <div class="container" id="">
                        {renderCarousel()}
                    </div>
                </div>



                <div id="coming" class="tab-pane container fade" >
                    <div class="container" id="">
                        {renderCarousel()}
                    </div>
                </div>
            </div>
        </section >
    )
}
