import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { themPhim } from '../../Redux/Actions/AdminActions';
import { useDispatch } from 'react-redux';
import { darkOrange, orange } from '../../Util/var';



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


export default function AddFilm() {
    const dispatch = useDispatch()
    const form = useForm();
    const list = useList();
    const btn = useButton();
    let phimMoi = {
        maNhom: 'GP03',
        danhGia: 0,
        maPhim: 0,
        hinhAnh: null,
        tenPhim: '',
        moTa: '',
        trailer: '',
        biDanh: '',
        ngayKhoiChieu: ''
    }
    const handleChange = (e) => {
        let { id, value } = e.target
        phimMoi[id] = value

    }
    const handleFile = (e) => {
        let id = e.target.id
        let value = e.target.files[0]
        phimMoi[id] = value

    }
    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()

        for (let key in phimMoi) {
            formData.append(key, phimMoi[key])
        }

        dispatch(themPhim(formData))
    }
    return (
        <List className={list.root} style={{ margin: '0px' }}>
            <Typography variant="h4" gutterBottom>
                Thêm phim
            </Typography>
            <Divider />
            <ListItem>
                <form onSubmit={onSubmit} className={form.root} noValidate autoComplete="off">
                    <TextField onChange={handleChange} id="tenPhim" label="Tên phim" variant="outlined" />
                    <TextField onChange={handleChange} id="biDanh" label="Bí danh" variant="outlined" />
                    <TextField onChange={handleFile} type="file" id="hinhAnh" label="" variant="outlined" />
                    <TextField onChange={handleChange} id="moTa" label="Mô tả" variant="outlined" />
                    <TextField onChange={handleChange} id="trailer" label="Link trailer" variant="outlined" />
                    <TextField onChange={handleChange} id="ngayKhoiChieu" label="Lịch chiếu" variant="outlined" />
                    <div className={btn.root}>
                        <Button type="submit" variant="contained" color="secondary">
                            Thêm phim
                        </Button>
                    </div>

                </form>
            </ListItem>
        </List>
    );
}
