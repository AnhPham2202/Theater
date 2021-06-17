import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilmDetailFromApi, getFilmFromApi, getTheaterFilmFromApi } from '../../Redux/Actions/FilmAction'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


const usePopOver = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));


export default function FilmList(propsRoute) {
    const dispatch = useDispatch()
    let filmArr = useSelector((state) => state.FilmDetailReducer.filmArr)
    const [phimSearch, setPhimSearch] = useState('Phim')
    const [rapSearch, setRapSearch] = useState('Phim')
    const [timeSearch, setTimeSearch] = useState('Phim')

    const pop = usePopOver();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const list = useList();
    const chiTietPhim = useSelector(state => state.FilmDetailReducer.chiTietPhim)

    console.log(chiTietPhim);
    useEffect(async () => {
        dispatch(getFilmFromApi('GP03'))
        dispatch(getFilmDetailFromApi(5027))
    }, [])
    const dropDownFilm = () => {
        
        return (
            <div className={list.root}>
                <List component="nav" aria-label="main mailbox folders">
                    {
                        filmArr.map((film, index) => {
                            return (
                                <ListItem
                                    button
                                    onClick={(event) => {
                                        handleClose()
                                        setPhimSearch(film.tenPhim)
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
                            {/* <Typography variant="body2"  gutterBottom>
                                    120 phút
                                </Typography> */}

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
        if (filmArr.length % 8 !== 0) {
            num += 1
        }


        let filmCarouselArr = []
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



    return (
        <section id="film-list" class="container">
            <div class="filter container">
                <div class="row">
                    <div onClick={handleClick} class="filter-format col-md-3">
                        <div class="row">
                            <div class="col-md-10">
                                <a >{phimSearch}</a>
                            </div>
                            <div class="col-md-2">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="filter-format col-md-4">
                        <div class="row">
                            <div class="col-md-10">
                                <a href="#">Rạp</a>
                            </div>
                            <div class="col-md-2">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="filter-format col-md-2">
                        <div class="row">
                            <div class="col-md-10">
                                <a href="#">Ngày xem</a>
                            </div>
                            <div class="col-md-2">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>

                    <div class="filter-format col-md-3">
                        <button class="btn btn-success">Mua vé ngay</button>
                    </div>
                </div>
            </div>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                    {dropDownFilm()}
            </Popover>


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
        </section>
    )
}
