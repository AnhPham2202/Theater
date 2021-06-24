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
import { chinhSuaUser, layDanhSachNguoiDungPhanTrang, xoaUser } from '../../Redux/Actions/AdminActions';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { pink } from '../../Util/var';
import Tooltip from '@material-ui/core/Tooltip';

const columns = [
    {
        id: 'tacVuNguoiDung-col',
        label: 'Tác vụ',
        align: 'center',
        minWidth: 70, maxWidth: 70
    },
    {
        id: 'taiKhoan-col',
        label: 'Tài khoản',
        minWidth: 90
    },
    {
        id: 'matKhau-col',
        label: 'Mật khẩu',
        minWidth: 120,
        align: 'center',
    },
    {
        id: 'email-col',
        label: 'Email',
        minWidth: 120,
        align: 'center',
    },
    {
        id: 'soDT-col',
        label: 'Số điện thoại',
        minWidth: 120,
        align: 'center',
    },
    {
        id: 'loaiNguoiDung-col',
        label: 'Loại người dùng',
        minWidth: 215,
        align: 'center',
    },
    {
        id: 'hoTen-col',
        label: 'Họ tên',
        minWidth: 100,
        align: 'center',
    },
];

const useTable = makeStyles({
    root: {
        width: '100%',
        '& .MuiTableCell-stickyHeader': {
            background: pink,
            color: 'white'
        }
    },
    container: {
        maxHeight: 440,

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

const useText = makeStyles((theme) => ({
    root: {
        background: pink,
        color: 'white',
        '& *': {
            color: 'white !important',
        },
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid white',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid white'
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid white'
        },

        '& > *': {
            margin: theme.spacing(1),
            width: '50%',
        },
    }, 
}));

export default function UserManagement() {
    const rows = [];
    const dispatch = useDispatch()
    const nguoiDungPhanTrang = useSelector(state => state.AdminReducer.nguoiDungPhanTrang)
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const [scroll, setScroll] = useState('paper');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);
    const [hoTen, setHoten] = useState()
    const [taiKhoan, setTaiKhoan] = useState()
    const [matKhau, setMatKhau] = useState()
    const [maLoaiNguoiDung, setMaLoaiNguoiDung] = useState()
    const [email, setEmail] = useState()
    const [soDt, setSoDt] = useState()
    const [itemIndex, setItemIndex] = useState(0);
    const [search, setSearch] = useState();
    const [triggerUseEffect, setTriggerUseEffect] = useState(false); // để khi nhấn vào các nút thay đổi thông tin thì load lại API, để k phải reload toàn bộ trang để thay đổi thông tin 

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleSoDt = (event) => {
        setSoDt(event.target.value)
    }
    const handleMaLoaiNguoiDung = (event) => {
        setMaLoaiNguoiDung(event.target.value)
    }
    const handleHoTen = (event) => {
        setHoten(event.target.value)
    }
    const descriptionElementRef = React.useRef(null);
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const form = useForm();
    const table = useTable()
    const text = useText()


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSeach = (e) => {
        let { value } = e.target
        setSearch(value)
    }

    const onSubmit = () => {
        let user = {
            taiKhoan,
            matKhau,
            email,
            soDt,
            maNhom: 'GP03',
            maLoaiNguoiDung,
            hoTen
        }
        console.log(user);
        dispatch(chinhSuaUser(user, triggerUseEffect, setTriggerUseEffect))
    }


    const formUserChanging = () => {
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Thay đổi thông tin phim</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            onSubmit()
                        }} className={form.root} noValidate autoComplete="off">

                            <TextField
                                id="hoTen"
                                label="Họ tên "
                                defaultValue='Loading...'
                                value={hoTen}
                                onChange={handleHoTen}
                            />
                            <TextField
                                id="email"
                                label="Email"
                                defaultValue='Loading...'
                                value={email}
                                onChange={handleEmail}
                            />
                            <TextField
                                id="soDt"
                                label="Số điện thoại"
                                defaultValue='Loading...'
                                value={soDt}
                                onChange={handleSoDt}
                            />
                            <TextField
                                id="maLoaiNguoiDung"
                                label="Loại người dùng"
                                defaultValue='Loading...'
                                value={maLoaiNguoiDung}
                                onChange={handleMaLoaiNguoiDung}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                id="taiKhoan"
                                label="Tài khoản"
                                defaultValue='Loading...'
                                className={form.width100}
                                value={taiKhoan}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                id="matKhau"
                                label="Mật khẩu"
                                defaultValue='Loading...'
                                className={form.width100}
                                value={matKhau}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            {/* Để tạo ra type submit cho nút thay đổi ngoài form */}
                            <button onClick={handleClose} style={{ display: 'none' }} type='submit'></button>
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Hủy bỏ
                    </Button>
                    <Button onClick={() => {
                        onSubmit()
                        handleClose()
                    }} color="primary">
                        Thay đổi
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
    const tacVu = (taiKhoan, itemIndex) => {
        return (
            <Fragment>
                <label onClick={() => dispatch(xoaUser(taiKhoan, triggerUseEffect, setTriggerUseEffect))} htmlFor="icon-button-file">
                    <Tooltip title="Xóa người dùng">
                        <IconButton aria-label="delete user" component="span">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>

                </label>
                <label onClick={() => {
                    handleClickOpen('paper')()
                    setItemIndex(itemIndex)
                }} htmlFor="icon-button-file">
                    <Tooltip title="Sửa thông tin người dùng">
                        <IconButton aria-label="change info" component="span">
                            <CreateIcon />
                        </IconButton>
                    </Tooltip>
                </label>
                {formUserChanging()}
            </Fragment>
        )
    }

    useEffect(() => {
        dispatch(layDanhSachNguoiDungPhanTrang(page + 1, rowsPerPage, search))

        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }

        if (open == true) { // check vì nếu không check khi submit thì setOpen của Mui Dialog sẽ set để tắt form thì sẽ chạy lại cả useEffect thì nó sẽ set lại tên cũ đang có sẵn trước khi kịp update lên api
            setHoten(nguoiDungPhanTrang.items?.[itemIndex].hoTen)
            setTaiKhoan(nguoiDungPhanTrang.items?.[itemIndex].taiKhoan)
            setMatKhau(nguoiDungPhanTrang.items?.[itemIndex].matKhau)
            setEmail(nguoiDungPhanTrang.items?.[itemIndex].email)
            setSoDt(nguoiDungPhanTrang.items?.[itemIndex].soDt)
            setMaLoaiNguoiDung(nguoiDungPhanTrang.items?.[itemIndex].maLoaiNguoiDung)
        }
    }, [page, rowsPerPage, open, itemIndex, search, triggerUseEffect])
    useEffect(() => {
        setPage(0)
    }, [search])

    nguoiDungPhanTrang.items?.map((user, index) => {
        rows.push({
            tacVu: tacVu(user.taiKhoan, index),
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            email: user.email,
            soDt: user.soDt,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            hoTen: user.hoTen,
        })
    })
  
    return (
        <div>
            <div className={table.root}>
                <TableContainer className={table.container}>
                    <div className={text.root}>
                        <TextField id="standard-basic" label="Tìm kiếm người dùng"  onChange={handleSeach} />
                    </div>

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
                                        {Object.values(row).map((value, i) => {
                                            return (
                                                <TableCell align='center' key={i} >
                                                    {value}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 30]}
                    component="div"
                    count={nguoiDungPhanTrang?.totalCount ?? ''}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
        </div>
    )
}
