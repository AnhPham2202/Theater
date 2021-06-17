import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useFormik } from 'formik';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinNguoiDung, layThongTinTaiKhoan } from '../../Redux/Actions/UserActions';

const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50%',

        },
        // display: 'block',
        // background: 'rgba(245, 0, 87, 0.8);',
        // transition: 'all 0.25s',
        // padding: '0',
        // margin: theme.spacing(1),
        // '&:hover': {
        //     background: "rgba(245, 0, 87, 0.75);",
        //     opacity: '0.8'
        // },
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
    const list = useList();
    const btn = useButton();
    const form = useForm();
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('t')
    const thongTinTaiKhoan = useSelector(state => state.UserReducer.thongTinTaiKhoan)
    let { taiKhoan, hoTen, email, soDT, matKhau, maNhom } = thongTinTaiKhoan
    const [emailInput, setMail] = useState(email)
    const [soDTInput, setSoDT] = useState(soDT)
    const [hoTenInput, setHoTen] = useState(hoTen)
    const [taiKhoanInput, setTaiKhoan] = useState(taiKhoan)
    let taiKhoanGuiLenApi = {
        taiKhoan: user.taiKhoan
    }

    useEffect(() => {
        dispatch(layThongTinTaiKhoan(taiKhoanGuiLenApi)) // lấy thông tin từ api để sửa chức năng đăng nhập lưu pass vào local
        setMail(email)
        setSoDT(soDT)
        setTaiKhoan(taiKhoan)
        setHoTen(hoTen)
    }, [email])
    const handleEmail = (event) => {
        setMail(event.target.value)
    }

    const handleSoDT = (event) => {
        setSoDT(event.target.value)
    }

    const handleHoTen = (event) => {
        setHoTen(event.target.value)
    }

    let onSubmit = () => {
        let thongTinTaiKhoanMoi = {
            taiKhoan: taiKhoan,
            matKhau: matKhau,
            email: emailInput,
            soDt: soDTInput,
            maNhom: 'GP03',
            maLoaiNguoiDung: 'KhachHang',
            hoTen: hoTenInput
        }
        dispatch(capNhatThongTinNguoiDung(thongTinTaiKhoanMoi, token))
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
