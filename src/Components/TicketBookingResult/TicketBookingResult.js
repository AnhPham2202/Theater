import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TheatersIcon from '@material-ui/icons/Theaters';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WeekendIcon from '@material-ui/icons/Weekend';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { history } from '../../App';
import { darkOrange, orange } from '../../Util/var';

const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const useAvatar = makeStyles((theme) => ({
    root: {
        background: orange
    },

}));

const useGrid = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    verticalCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}));
const useBox = makeStyles((theme) => ({
    root: {
        display: "inline-block",
        width: 50,
        color: '#fff',
        padding: '8px 0',
        background: orange,
        textAlign: 'center',
        borderRadius: 4,
        marginRight: 3
    },

}));
const useCard = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
        width: '100%',
        '& .MuiCardHeader-root': {
            textAlign: 'center',
            background: orange,
            textAlign: 'center',
            color: "white"
        },
        background: 'rgba(238, 238, 238, 0.88)'
    },
    footer: {
        display: 'flex',
        justifyContent: "space-between",
        '& button': {
            background: orange,
            color: "white",
            transition: 'all 0.5s',
            '&:hover': {
                background: darkOrange,
                color: "white",
                // opacity: 0.9
            }
        }

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function TicketBookingResult() {
    const thongTinChiTietPhongVe = useSelector(state => state.TicketBookingReducer.thongTinChiTietPhongVe)
    const mangGheDangDat = useSelector(state => state.TicketBookingReducer.mangGheDangDat)
    const { diaChi, gioChieu, hinhAnh, ngayChieu, tenCumRap, tenPhim, tenRap } = thongTinChiTietPhongVe.thongTinPhim ?? ''
    const user = JSON.parse(localStorage.getItem('user')).taiKhoan

    const card = useCard();
    const grid = useGrid();
    const box = useBox()
    const avatar = useAvatar()

    let tongTien = 0

   
    const renderDanhSachGhe = () => {
        return mangGheDangDat.map((ghe, index) => {
            tongTien += ghe.giaVe
            return (
                <Box key={index} className={box.root} color="text.primary">
                    {ghe.tenGhe}
                </Box>
            )
        })
    }

    return (
        <Container style={{ padding: "80px 0" }} maxWidth="sm">
            <Card className={card.root}>
                <CardHeader
                    title="?????t v?? th??nh c??ng"
                />

                <CardContent>
                    <div className={grid.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <Avatar className={avatar.root}>
                                    <AccountBoxIcon />
                                </Avatar>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="body1" component="p">
                                    <b>T??i kho???n:</b>  {user}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <Avatar className={avatar.root}>
                                    <TheatersIcon />
                                </Avatar>
                            </Grid>
                            <Grid className={grid.verticalCenter} item xs={10}>
                                <Typography variant="body1" component="p">
                                    <b>T??n phim:</b>  {tenPhim}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <Avatar className={avatar.root}>
                                    <LocationCityIcon />
                                </Avatar>
                            </Grid>
                            <Grid className={grid.verticalCenter} item xs={10}>
                                <Typography variant="body1" component="p">
                                    <b>R???p:</b>  {`${tenCumRap} - ${tenRap}`}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    <b>Th???i gian chi???u:</b>  {`${ngayChieu} - ${gioChieu}`}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <Avatar className={avatar.root}>
                                    <WeekendIcon />
                                </Avatar>
                            </Grid>
                            <Grid className={grid.verticalCenter} item xs={10}>
                                <Typography variant="body1" component="p">
                                    <b>Danh s??ch gh???:</b> {renderDanhSachGhe()}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <Avatar className={avatar.root}>
                                    <LocalAtmIcon />
                                </Avatar>
                            </Grid>
                            <Grid className={grid.verticalCenter} item xs={10}>
                                <Typography variant="body1" component="p">
                                    <b>Th??nh ti???n:</b> {tongTien}??
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
                <CardActions className={card.footer} disableSpacing>
                    <Button variant="contained" onClick={() => history.push('/')}>V??? trang ch???</Button>

                    <Button variant="contained" onClick={() => window.location.reload()}>?????t v?? m???i</Button>

                </CardActions>

            </Card>
        </Container>
    )
}
