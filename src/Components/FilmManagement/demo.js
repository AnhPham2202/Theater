import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { layPhimPhanTrang, xoaPhim } from '../../Redux/Actions/AdminActions';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import IconButton from '@material-ui/core/IconButton';
import { Fragment } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';





const columns = [
    { id: 'name', label: 'Tác vụ', minWidth: 70, maxWidth: 70 },
    { id: 'code', label: 'Mã phim', minWidth: 90 },
    {
        id: 'population',
        label: 'Tên phim',
        minWidth: 120,
        align: 'center',
    },
    {
        id: 'size',
        label: 'Hình Ảnh',
        minWidth: 120,
        align: 'center',
    },
    {
        id: 'desc',
        label: 'Mô tả',
        minWidth: 320,
        align: 'center',
    },
    {
        id: 'coming-date',
        label: 'Ngày khởi chiếu',
        minWidth: 215,
        align: 'center',
    },
    {
        id: 'rate',
        label: 'Đánh giá',
        minWidth: 100,
        align: 'center',
    },
];

const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        margin: theme.spacing(0),
        display: 'inline-block',
        width: '100%',
        background: 'rgba(245, 0, 87, 0.8);',
        transition: 'all 0.25s',
        padding: '0',
        '& .MuiButton-label': {
            width: "auto"
        },
        '&:hover': {
            background: "rgba(245, 0, 87, 0.75);",
            opacity: '0.8'
        },
    },

}));
const useModal = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: 600,
        width: 550,
        borderRadius: '10px'
    },
}));
const useTable = makeStyles({
    root: {
        width: '100%',
        '& .MuiTableCell-stickyHeader': {
            background: 'pink'
        }

    },
    container: {
        maxHeight: 440,

    },

});

const useBox = makeStyles({
    root: {
        padding: 10,
        height: 500,
        overflow: "auto"
    },

});
const useForm = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0),
            width: '50%',
            margin: '20px 0px',
            padding: '0 10px 0 0'

        },
        '& .MuiInput-underline': {
            width: '100%'
        }
    },
    width100: {
        width: '100% !important',

    }
}));



export default function FilmManagement() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [maPhim, setMaPhim] = useState("maPhim")
    const [biDanh, setBiDanh] = useState("biDanh")
    const [tenPhim, setTenPhim] = useState("tenPhim")
    const [ngayKhoiChieu, setNgayKhoiChieu] = useState("ngayKhoiChieu")
    const [trailer, setTrailer] = useState("trailer")
    const [moTa, setMoTa] = useState("moTa")
    const [danhGia, setDanhGia] = useState("danhGia")


    const form = useForm();
    const btn = useButton()
    const box = useBox()

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const rows = [];
    const dispatch = useDispatch()
    const thongTinPhimPhanTrang = useSelector(state => state.AdminReducer.phimPhanTrang)
    const table = useTable();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const modal = useModal();
    const [open, setOpen] = useState(false);
    // functions for Pagination Mui
    console.log(thongTinPhimPhanTrang);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // functions for modal Mui
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const handleTenPhim = (event) => {
        setTenPhim(event.target.value)
    }

    const handleBiDanh = (event) => {
        setBiDanh(event.target.value)
    }

    const handleTrailer = (event) => {
        setTrailer(event.target.value)
    }

    const handleMoTa = (event) => {
        setMoTa(event.target.value)
    }

    const handleNgayKhoiChieu = (event) => {
        setNgayKhoiChieu(event.target.value)
    }

    const handleDanhGia = (event) => {
        setDanhGia(event.target.value)
    }

    let onSubmit = () => {
        console.log(123)
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const formFilmInfo = () => {
        return (
            <div className={modal.paper}>
                <h6 id="transition-modal-title">Thay đổi thông tin phim</h6>
                <Box component="div" className={box.root} m={0}>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        onSubmit()
                    }} className={form.root} noValidate autoComplete="off">
                        <TextField
                            id="maPhim"
                            label="Mã phim"
                            defaultValue='Loading...'
                            value={maPhim}
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            id="biDanh"
                            label="Bí danh"
                            defaultValue='Loading...'
                            value={biDanh}
                            onChange={handleBiDanh}
                        />

                        <TextField
                            id="tenPhim"
                            label="Tên phim"
                            defaultValue='Loading...'
                            value={tenPhim}
                            onChange={handleTenPhim}
                        />


                        <TextField
                            id="ngayKhoiChieu"
                            label="Ngày khởi chiếu"
                            defaultValue='Loading...'
                            value={ngayKhoiChieu}
                            onChange={handleNgayKhoiChieu}
                        />


                        <TextField
                            id="trailer"
                            label="Trailer"
                            defaultValue='Loading...'
                            className={form.width100}
                            value={trailer}
                            onChange={handleTrailer}
                        />
                        <TextField
                            id="hinhAnh"
                            label="Hình ảnh"
                            type="file"
                            className={form.width100}
                        />
                        <TextField
                            id="moTa"
                            label="Mô tả"
                            defaultValue='Loading...'
                            className={form.width100}
                            value={moTa}
                            onChange={handleMoTa}
                            multiline
                        />
                        <TextField
                            id="danhGia"
                            label="Đánh giá"
                            defaultValue='Loading...'
                            className={form.width100}
                            value={danhGia}
                            onChange={handleDanhGia}
                        />
                        <Box component="div" style={{ display: 'inline-block', width: '50%' }} p={1}>
                            <Button type="submit" className={btn.root} variant="contained" color="secondary">
                                Thay đổi
                        </Button>
                        </Box>

                        <Box component="div" style={{ display: 'inline-block', width: '50%' }} p={1}>
                            <Button type="button" className={btn.root} variant="contained" color="secondary">
                                Hủy bỏ
                        </Button>
                        </Box>

                    </form>
                </Box>

            </div>
        )
    }

    const tacVu = (maPhim) => {
        return (
            <Fragment>
                <label htmlFor="icon-button-file">
                    <IconButton onClick={() => dispatch(xoaPhim(maPhim))} aria-label="delete film" component="span">
                        <DeleteIcon />
                    </IconButton>
                </label>
                <label onClick={handleOpen} htmlFor="icon-button-file">
                    <IconButton aria-label="change film" component="span">
                        <CreateIcon />
                    </IconButton>
                </label>
                <label onClick={() => console.log(3)} htmlFor="icon-button-file">
                    <IconButton aria-label="add film" component="span">
                        <AddToPhotosIcon />
                    </IconButton>
                </label>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={modal.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}

                >
                    <Fade in={open}>
                        {formFilmInfo()}
                    </Fade>
                </Modal>
            </Fragment>
        )
    }
    useEffect(() => {
        dispatch(layPhimPhanTrang(page + 1, rowsPerPage))
    }, [page, rowsPerPage])
    thongTinPhimPhanTrang.items?.map((phim, index) => {
        rows.push({
            tacVu: tacVu(phim.maPhim),
            maPhim: phim.maPhim,
            tenPhim: phim.tenPhim,
            hinhAnh: phim.hinhAnh,
            moTa: phim.moTa,
            ngayKhoiChieu: phim.ngayKhoiChieu,
            danhGia: phim.danhGia,
        })
    })

    return (
        <Paper className={table.root}>
            <TableContainer className={table.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead className={table.header}>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    <TableCell key={i} >
                                        {row.tacVu}
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.maPhim}
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.tenPhim}
                                    </TableCell>
                                    <TableCell key={i} >
                                        <img style={{
                                            width: '120px'
                                        }} src={row.hinhAnh} />
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.moTa}
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.ngayKhoiChieu}
                                    </TableCell>
                                    <TableCell key={i} >
                                        {row.danhGia}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={thongTinPhimPhanTrang.totalCount ?? ''}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
