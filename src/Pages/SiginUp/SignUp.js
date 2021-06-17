import React from 'react'
import logo from './../../assets/img/logo.png'
import bg from './../../assets/img/bg2.jpg'
import { useFormik } from 'formik';
import { dangKy } from '../../Redux/Actions/UserActions';
import { useDispatch } from 'react-redux';



export default function SignUp() {
    const dispatch = useDispatch()
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
        <div id="sign-up" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container pt-5 pb-5">
                <div className="logo"><img src={logo} alt /></div>
                <form onSubmit={formik.handleSubmit}>
                    <input id="hoTen" type="text" className="form-control mb-5 mt-3" placeholder="Nhập họ tên" onChange={formik.handleChange}
                        value={formik.values.hoTen} />
                    <input id="taiKhoan" type="text" className="form-control mb-5 mt-3" placeholder="Nhập tên tài khoản" onChange={formik.handleChange}
                        value={formik.values.userName}/>
                    <input id="matKhau" type="password" className="form-control mb-5 mt-3" placeholder="Nhập mật khẩu" onChange={formik.handleChange}
                        value={formik.values.matKhau}/>
                    <input id="matKhauNhapLai" type="password" className="form-control mb-5 mt-3" placeholder="Nhập lại mật khẩu" onChange={formik.handleChange}
                        value={formik.values.matKhauNhapLai}/>
                    <input id="email" type="email" className="form-control mb-5 mt-3" placeholder="Nhập địa chỉ email" onChange={formik.handleChange}
                        value={formik.values.email}/>
                    <input id="soDt" type="text" className="form-control mb-5 mt-3" placeholder="Nhập số điện thoại" onChange={formik.handleChange}
                        value={formik.values.phone}/>

                    <button type="submit" className="btn signup-btn">Đăng ký</button>
                    <button type="button" className="btn btn-primary signin-btn">Đăng nhập</button>
                </form>
            </div>
        </div>

    )
}
