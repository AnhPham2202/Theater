import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/img/logo.png'
import avatar from './../../assets/img/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { dangXuat } from '../../Redux/Actions/UserActions'

export default function Header() {
    let tenDN = useSelector(state => state.UserReducer.tenDangNhap)
    const dispatch = useDispatch()
    return (
        <header>
            <div className="navbar container">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <ul>
                    <NavLink to="/calender">
                        <li>Lịch chiếu</li>
                    </NavLink>
                    <NavLink to="/theater">
                        <li>Cụm rạp</li>
                    </NavLink>
                    <NavLink to="/news">
                        <li>Tin Tức</li>
                    </NavLink>
                    <NavLink to="/app">
                        <li>Ứng dụng</li>
                    </NavLink>
                </ul>
                <div className="heading__item__right">
                    <a href=" #">
                        <img className="avatar mr-2" src={avatar} alt />
                    </a>
                    
                    {tenDN == '' ?  
                    <NavLink to="/dangnhap"><span>Đăng nhập</span></NavLink> : <NavLink to="/thongtincanhan"><span>{tenDN}</span></NavLink>}
                    <a className="heading-location" href=" #">
                        {tenDN == '' ? 
                    <NavLink to='/dangky'>Đăng ký</NavLink> :  <span onClick={()=>dispatch(dangXuat())}>Đăng xuất</span>}
                    </a>
                </div>
            </div>

        </header>
    )
}
