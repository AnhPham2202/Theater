import React from 'react'
import logo from './../../assets/img/logo.png'
import bg from './../../assets/img/bg2.jpg'
import { useFormik } from 'formik';
import { dangNhap } from '../../Redux/Actions/UserActions';
import { useDispatch } from 'react-redux';



export default function SignIn() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            dispatch(dangNhap(values))
        },
    });

    return (
        <div id="sign-in" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container pt-5 pb-5">
                <div className="logo"><img src={logo} alt /></div>
                <form onSubmit={formik.handleSubmit}>

                    <input id="taiKhoan" type="text" className="form-control mb-5 mt-3" placeholder="Nhập tên tài khoản" onChange={formik.handleChange}
                        value={formik.values.userName}/>
                    <input id="matKhau" type="password" className="form-control mb-5 mt-3" placeholder="Nhập mật khẩu" onChange={formik.handleChange}
                        value={formik.values.passWord}/>


                    <button type="submit" className="btn btn-primary signin-btn">Đăng nhập</button>
                </form>
            </div>
        </div>

    )
}
