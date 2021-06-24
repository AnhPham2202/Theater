import React from 'react'
import logo from './../../assets/img/logo-slogan.png'
import bg from './../../assets/img/bg2.jpg'
import { useFormik } from 'formik';
import { dangKy } from '../../Redux/Actions/UserActions';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { darkOrange, orange } from '../../Util/var';


const useBox = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(to bottom, rgba(20, 50, 93, 0.9), rgba(8, 22, 48, 0.9))',
        height: '50%',
        width: '30%',
        margin: '0px auto',
        padding: '30px 0'

    },
}));

const useButton = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: orange,
        transition: 'all 0.25s',
        color: 'white',
        '&:hover': {
            background: darkOrange,
        },
    },
}));

const cssNavlink = makeStyles((theme) => ({
    root: {
        '& a': {
            color: 'white',
            textDecoration: 'underline'
        }
    },
}));


export default function SignUp() {
    const dispatch = useDispatch()

    const box = useBox()
    const btn = useButton()
    const link = cssNavlink()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            matKhauNhapLai: '',
            email: '',
            soDt: '',
            maNhom: "GP03",
            maLoaiNguoiDung: "KhachHang",
            hoTen: ""
        },
        onSubmit: values => {
            console.log(values);
            if (values.matKhau === values.matKhauNhapLai) {
                dispatch(dangKy({
                    taiKhoan: values.taiKhoan,
                    matKhau: values.matKhau,
                    email: values.email,
                    soDt: values.soDt,
                    maNhom: "GP03",
                    maLoaiNguoiDung: "KhachHang",
                    hoTen: values.hoTen
                })
                )
            } else if (values.matKhau !== values.matKhauNhapLai) { alert('Vui lòng nhập lại đúng mật khẩu') }
        },
    })


    return (
        <div id="sign-up" style={{ backgroundImage: `url(${bg})`, padding: 50 }}>
            <Box className={box.root}>
                <Container>
                    <div className="logo"><img className="w-50" src={logo} alt /></div>
                    <form onSubmit={formik.handleSubmit}>
                        <input id="hoTen" type="text" className="form-control mb-3 mt-3" placeholder="Nhập họ tên" onChange={formik.handleChange}
                            value={formik.values.hoTen} />
                        <input id="taiKhoan" type="text" className="form-control mb-3 mt-3" placeholder="Nhập tên tài khoản" onChange={formik.handleChange}
                            value={formik.values.userName} />
                        <input id="matKhau" type="password" className="form-control mb-3 mt-3" placeholder="Nhập mật khẩu" onChange={formik.handleChange}
                            value={formik.values.matKhau} />
                        <input id="matKhauNhapLai" type="password" className="form-control mb-3 mt-3" placeholder="Nhập lại mật khẩu" onChange={formik.handleChange}
                            value={formik.values.matKhauNhapLai} />
                        <input id="email" type="email" className="form-control mb-3 mt-3" placeholder="Nhập địa chỉ email" onChange={formik.handleChange}
                            value={formik.values.email} />
                        <input id="soDt" type="text" className="form-control mb-3 mt-3" placeholder="Nhập số điện thoại" onChange={formik.handleChange}
                            value={formik.values.phone} />
                        <Typography align="center" variant="caption" display="block" gutterBottom>Đăng ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!</Typography>

                        <Button type="submit" className={btn.root}>Đăng ký</Button>
                        {/* <button type="button" className="btn btn-primary signin-btn">Đăng nhập</button> */}
                        <Box className="mt-3">
                            <Typography className={link.root} align="center" variant="body2" display="block" gutterBottom>Nếu bạn đã có tài khoản , hãy
                                <NavLink to='/dangnhap' > đăng nhập tại đây</NavLink>
                            </Typography>
                        </Box>

                    </form>
                </Container>
            </Box>

        </div>

    )
}
