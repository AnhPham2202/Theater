import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { themNguoiDung, themPhim } from '../../Redux/Actions/AdminActions';
import { useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { darkOrange, orange } from '../../Util/var';


const useSelect = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '50%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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

const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            display: 'block',
            width: '50%',
            background: orange,
            transition: 'all 0.25s',
            '&:hover': {
                background: darkOrange,
            },
        },

    },

}));

const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function AddUser() {
    const dispatch = useDispatch()
    const form = useForm();
    const list = useList();
    const btn = useButton();
    const select = useSelect();

    const [user, setUser] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: 'GP03',
        maLoaiNguoiDung: '',
        hoTen: ''
    })

    const handleChange = (e) => {
        let { id, value } = e.target
        user[id] = value
        setUser(user)
    }

    const handleSelectChange = (event) => {
        setUser({ ...user, maLoaiNguoiDung: event.target.value })
    };


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(themNguoiDung(user))
    }
    return (
        <List className={list.root} style={{ margin: '0px' }}>
            <Typography variant="h4" gutterBottom>
                Th??m ng?????i d??ng
            </Typography>
            <Divider />
            <ListItem>
                <form onSubmit={onSubmit} className={form.root} noValidate autoComplete="off">
                    <TextField onChange={handleChange} id="hoTen" label="H??? t??n" variant="outlined" />
                    <TextField onChange={handleChange} id="taiKhoan" label="T??i kho???n" variant="outlined" />
                    <TextField onChange={handleChange} id="matKhau" type="password" label="M???t kh???u" variant="outlined" />
                    <TextField onChange={handleChange} id="email" label="Email" variant="outlined" />
                    <TextField onChange={handleChange} id="soDt" label="S??? ??i???n tho???i" variant="outlined" />
                    <FormControl className={select.formControl}>
                        <InputLabel htmlFor="age-native-simple">Lo???i ng?????i d??ng</InputLabel>
                        <Select
                            native
                            onChange={handleSelectChange}
                            inputProps={{
                                name: 'maLoaiNguoiDung',
                                id: 'maLoaiNguoiDung',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value='KhachHang'>Kh??ch h??ng</option>
                            <option value='QuanTri'>Qu???n tr??? vi??n</option>
                        </Select>
                    </FormControl>
                    <div className={btn.root}>
                        <Button type="submit" variant="contained" color="secondary">
                            Th??m ng?????i d??ng
                        </Button>
                    </div>
                </form>
            </ListItem>
        </List>
    );
}
