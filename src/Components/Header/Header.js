import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/img/logo.png'
import avatar from './../../assets/img/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { dangXuat, layThongTinTaiKhoan } from '../../Redux/Actions/UserActions'
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { history } from '../../App'
const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        '& .MuiTypography-body1': {
            fontSize: '13px !important',
            fontWeight: 'bold'
        },
        '& .MuiListItem-gutters': {
            padding: '4px 0',
            textAlign: 'center',
        },
        '& .MuiList-padding': {
            padding: 0
        }
    },
}));



const useDropDown = makeStyles((theme) => ({
    root: {
        position: 'relative',
        '& .MuiButton-root': {
            borderRadius: '50px !important',
            width: 'fit-content',
            minWidth: 140
        },
    },
    dropdown: {
        position: 'absolute',
        borderRadius: 5,
        top: 40,
        right: 0,
        left: 0,
        zIndex: 1,
        boxShadow: '0px 7px 20px 3px rgb(0 0 0 / 75%)',
        padding: '8px 0',
        backgroundColor: theme.palette.background.paper,
    },
}));
const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            borderRadius: '50px !important',
        },


    },
}));

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const tenDN = useSelector(state => state.UserReducer.tenDangNhap)
    const thongTinTaiKhoan = useSelector(state => state.UserReducer.thongTinTaiKhoan)
    const [open, setOpen] = useState(false);

    const dropdown = useDropDown();
    const btn = useButton();
    const list = useList();


    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    const handleClickAway = () => {
        setOpen(false);
    };


    useEffect(() => {
        dispatch(layThongTinTaiKhoan(user?.taiKhoan))
    }, [user?.taiKhoan])

    const dropDown = () => {
        return (
            <div className={list.root}>
                <List component="nav" aria-label="secondary mailbox folders">
                    <NavLink to="/thongtincanhan" >
                        <ListItem button>
                            <ListItemText primary={tenDN ? 'Thông tin tài khoản' : ''} />
                        </ListItem>
                    </NavLink>
                    {thongTinTaiKhoan?.[0]?.maLoaiNguoiDung === "QuanTri" ? (
                        <NavLink to="/admin" >
                            <ListItem button>
                                <ListItemText primary="Quản trị / Admin " />
                            </ListItem>
                        </NavLink>
                    ) : ''}
                </List>
            </div>
        )
    }
    return (
        <header>
            <div className="navbar container">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <ul>
                    <li>Lịch chiếu</li>
                    <li>Cụm rạp</li>
                    <li>Tin Tức</li>
                    <li>Ứng dụng</li>
                </ul>

                {/* Đăng nhập  */}
                <div className="heading__item__right">
                    <ClickAwayListener
                        mouseEvent="onMouseDown"
                        touchEvent="onTouchStart"
                        onClickAway={handleClickAway}
                    >
                        <div style={{ display: 'inline-block' }} className={dropdown.root}>


                            {tenDN == '' ?
                                (<Button variant="outlined" className="mr-2" type="button" onClick={() => history.push('/dangnhap')}>Đăng nhập</Button>)
                                :
                                (<Button variant="outlined" className="mr-2" type="button" onClick={handleClick}>Hi, {tenDN}</Button>)}

                            {open && tenDN ? (
                                <div className={dropdown.dropdown}>
                                    {dropDown()}
                                </div>
                            ) : null}
                        </div>
                    </ClickAwayListener>

                    {/* Đăng ký / đăng xuất */}
                    <span className={btn.root}>
                        {/* tách làm 2 BUtton chứ k ghi 1 Button rồi cho điều kiện render vào trong vì như v sẽ 
                    phải để onClick vào thẻ span làm cho lúc click ở viền nút lúc đăng xuất sẽ k handle được function */}
                        {tenDN == '' ? (
                            <Button className variant="outlined" onClick={() => history.push('/dangky')}>
                                Đăng ký
                            </Button>
                        )
                            : (
                                <Button variant="outlined" onClick={() => dispatch(dangXuat())}>
                                    <span>Đăng xuất</span>
                                </Button>
                            )}

                    </span>


                </div>
            </div>

        </header >
    )
}
