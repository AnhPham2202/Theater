import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinNguoiDung, layThongTinTaiKhoan } from '../../Redux/Actions/UserActions';
import { darkOrange, orange } from '../../Util/var';

const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            background: orange,
            color:'white',
            display: 'inline-block',
            width: '50%',
            '&:hover': {
                background: darkOrange,
            }
        },

    },

}));
const useForm = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50%',
        },
    },
}));

export default function InfoChanging() {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const thongTinTaiKhoan = useSelector(state => state.UserReducer.thongTinTaiKhoan)
    console.log(thongTinTaiKhoan)
    // let { taiKhoan, hoTen, email, soDT, matKhau, maNhom } = thongTinTaiKhoan
    

    const list = useList();
    const btn = useButton();
    const form = useForm();
    
    const [emailInput, setMail] = useState()
    const [soDTInput, setSoDT] = useState()
    const [hoTenInput, setHoTen] = useState()
    const [taiKhoanInput, setTaiKhoan] = useState()
    
    let taiKhoanGuiLenApi = {
        taiKhoan: user.taiKhoan
    }

    useEffect(() => {
        dispatch(layThongTinTaiKhoan(user.taiKhoan)) // lấy thông tin từ api để sửa chức năng đăng nhập lưu pass vào local
        setMail(thongTinTaiKhoan[0]?.email)
        setSoDT(thongTinTaiKhoan[0]?.soDt)
        setTaiKhoan(thongTinTaiKhoan[0]?.taiKhoan)
        setHoTen(thongTinTaiKhoan[0]?.hoTen)
    }, [])
    const handleEmail = (event) => {
        setMail(event.target.value)
    }

    const handleSoDT = (event) => {
        setSoDT(event.target.value)
    }

    const handleHoTen = (event) => {
        setHoTen(event.target.value)
    }

    const onSubmit = async () => {
        let thongTinTaiKhoanMoi = {
            taiKhoan: thongTinTaiKhoan[0]?.taiKhoan,
            matKhau: thongTinTaiKhoan[0]?.matKhau,
            email: emailInput,
            soDt: soDTInput,
            maNhom: 'GP03',
            maLoaiNguoiDung: 'KhachHang',
            hoTen: hoTenInput
        }
        dispatch(capNhatThongTinNguoiDung(thongTinTaiKhoanMoi))
    }
    return (
        <List className={list.root} style={{ margin: '0px' }}>
            <Typography variant="h4" gutterBottom>
                Thay đổi thông tin tài khoản
            </Typography>
            <Divider />
            <ListItem>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit()
                }} className={form.root} noValidate autoComplete="off">
                    <TextField
                        id="taiKhoan"
                        label="Tài khoản"
                        defaultValue='Loading...'
                        value={taiKhoanInput}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField
                        id="hoTen"
                        label="Họ và tên chủ tài khoản"
                        defaultValue='Loading...'
                        value={hoTenInput}
                        onChange={handleHoTen}
                    />

                    <TextField
                        id="email"
                        label="Email"
                        defaultValue='Loading...'
                        value={emailInput}
                        onChange={handleEmail}
                    />


                    <TextField
                        id="soDT"
                        label="Số điện thoại"
                        defaultValue='Loading...'
                        value={soDTInput}
                        onChange={handleSoDT}
                    />
                    <div className={btn.root}>
                        <Button type="submit" variant="contained" color="secondary">
                            Thay đổi
                        </Button>
                    </div>

                </form>
            </ListItem>
        </List>
    )
}
