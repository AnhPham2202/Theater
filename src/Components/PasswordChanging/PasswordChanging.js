import React, { useState } from 'react'
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { doiMatKhau } from '../../Redux/Actions/UserActions';
import { darkOrange, orange, pink } from '../../Util/var';



const useForm = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50%',
        },
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

const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function PasswordChanging() {
    const form = useForm();
    const list = useList();
    const btn = useButton();
    const user = JSON.parse(localStorage.getItem('user'))
    
    const [errorMatKhau, setErrorMatKhau] = useState(false)
    const [errorNhapLai, setErrorNhapLai] = useState(false)
    const [helperMatKhau, setHelperMatKhau] = useState('')
    const [helperNhapLai, setHelperNhapLai] = useState('')

    let [thongTinMatKhau, setThongTinMatKhau] = useState({
        matKhau: '',
        matKhauMoi: '',
        matKhauNhapLai: ''
    }) //tạo ra cái state thay vì Obj vì Obj thì nếu render lại thì nó sẽ quay về giá trị cũ 
    
    const handleChange = (e) => {
        let { id, value } = e.target
        thongTinMatKhau[id] = value
        //phần này tương tự setState (vẫn ok khi gán bth) 
    }


    const onSubmit = () => {
        console.log(thongTinMatKhau)
        if (thongTinMatKhau.matKhauMoi !== thongTinMatKhau.matKhauNhapLai) {
            setErrorNhapLai(true)
            setHelperNhapLai('Vui lòng nhập đúng mật khẩu mới')
        } else {
            doiMatKhau(user.taiKhoan, thongTinMatKhau.matKhau, thongTinMatKhau.matKhauMoi, setErrorMatKhau, setHelperMatKhau)
        }
    }
    return (
        <List className={list.root} style={{ margin: '0px' }}>
            <Typography variant="h4" gutterBottom>
                Đổi mật khẩu
            </Typography>
            <Divider />
            <ListItem>
                <form className={form.root} noValidate autoComplete="off">
                    <TextField
                        id="matKhau"
                        label="Nhập mật khẩu"
                        type="password"
                        autoComplete="current-password"
                        helperText={helperMatKhau}
                        error={errorMatKhau}
                        onChange={handleChange}

                    />

                    <TextField
                        id="matKhauMoi"
                        label="Nhập mật khẩu mới"
                        type="password"
                        onChange={handleChange}
                        autoComplete="current-password"
                    />

                    <TextField
                        id="matKhauNhapLai"
                        label="Nhập lại mật khẩu mới"
                        type="password"
                        onChange={handleChange}
                        autoComplete="current-password"
                        error={errorNhapLai}
                        helperText={helperNhapLai}

                    />
                    <div className={btn.root} >
                        <Button onClick={(e) => {
                            e.preventDefault()
                            onSubmit()
                        }} type="submit" variant="contained" >
                            Thay đổi
                        </Button>
                    </div>

                </form>
            </ListItem>
        </List>
    )
}
