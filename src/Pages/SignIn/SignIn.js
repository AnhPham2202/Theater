import React, { useEffect } from 'react'
import logo from './../../assets/img/logo-slogan.png'
import bg from './../../assets/img/bg2.jpg'
import { useFormik } from 'formik';
import { dangNhap } from '../../Redux/Actions/UserActions';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import { history } from '../../App';
import Button from '@material-ui/core/Button';
import { darkOrange, orange } from '../../Util/var';


const useButton = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: orange,
        transition: 'all 0.25s',
        color: 'white',
        marginBottom: 16,
        '&:hover': {
            background: darkOrange,
        },
    },
}));

const useBox = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(to bottom, rgba(20, 50, 93, 0.9), rgba(8, 22, 48, 0.9))',
        height: '50%',
        width: '30%',
        margin: '0px auto',
        padding: '30px 0'

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


export default function SignIn() {

    const dispatch = useDispatch()
    const box = useBox()
    const link = cssNavlink()
    const btn = useButton()

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            dispatch(dangNhap(values))
        },
    });
    useEffect(() => { // bỏ vào đây để chỉ render 1 lần alert, nếu bỏ ngoài thì sẽ render 2 lần (k tốt cho UX)
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            alert(`Bạn đã đăng nhập với tài khoản ${user.taiKhoan}`)
            history.push('/')
        }
    }, [])

    return (
        <div id="sign-in" style={{ backgroundImage: `url(${bg})`, padding: 50 }}>
            <Box className={box.root}>
                <Container>
                    <div className="logo"><img className="w-50" src={logo} alt /></div>
                    <form onSubmit={formik.handleSubmit}>

                        <input id="taiKhoan" type="text" className="form-control mb-3 mt-3" placeholder="Nhập tên tài khoản" onChange={formik.handleChange}
                            value={formik.values.userName} />
                        <input id="matKhau" type="password" className="form-control mb-3 mt-3" placeholder="Nhập mật khẩu" onChange={formik.handleChange}
                            value={formik.values.passWord} />

                        <Typography align="center" variant="caption" display="block" gutterBottom>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</Typography>
                        <Button type="submit" className={btn.root}>Đăng nhập</Button>
                        <Typography className={link.root} align="center" variant="body2" display="block" gutterBottom>Nếu bạn chưa có tài khoản, hãy đăng kí tài khoản
                            <NavLink to='/dangky' > tại đây</NavLink>
                        </Typography>

                    </form>
                </Container>

            </Box>

        </div>

    )
}
