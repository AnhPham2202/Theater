import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { layThongTinGheDaDat, layThongTinTaiKhoan } from '../../Redux/Actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
import { orange, pink } from '../../Util/var';
const Box = styled('div')(compose(spacing, palette));



const useTable = makeStyles({
    table: {
        minWidth: 600,
    },
    header: {
        background: pink,
        '& th': {
            color: 'white !important'
        }
    }, 
    gheSo: {
        maxWidth: 130,
        width:140 //do set max là 130 mà layout lại ra trên 130, nên set 1 cái width để nó đọc cái maxWidth để set 130 vào
    }
});
const useBox = makeStyles({
    root: {
        width: '50%',
        color: 'white',
        display: 'inline-block',
        padding: 2
    },
    bg:{
        background: orange,
        padding: '5px 0',
        fontSize: 11,
        borderRadius: 4
    }
});

function createData(tenPhim, ngayDat, thoiLuongPhim, tenHeThongRap, tenGhe, maVe, giaVe) {
    return { tenPhim, ngayDat, thoiLuongPhim, tenHeThongRap, tenGhe, maVe, giaVe };
}
export default function TicketInfoTable() {
    const rows = [];
    const table = useTable();
    const box = useBox();
    const dispatch = useDispatch()
    const thongTinGheDaDat = useSelector(state => state.UserReducer.thongTinGheDaDat)
    let user = JSON.parse(localStorage.getItem('user'))
    let taiKhoan = {
        taiKhoan: user.taiKhoan
    }
    console.log(thongTinGheDaDat)
    useEffect(() => {
        
        dispatch(layThongTinGheDaDat(taiKhoan))
    }, [])
    thongTinGheDaDat.map((item, index) => {
        let gheArr = item.danhSachGhe.map((ghe, i) => {
            return (
                <Box key={i} color="white" bgcolor={pink} p={1}>
                    {ghe.tenGhe}
                </Box>
            )
        })
        rows.push(createData(`${item.tenPhim}`, `${item.ngayDat.split('T')[0]}`, `${item.thoiLuongPhim}`, `${item.danhSachGhe[0].tenHeThongRap}`, gheArr, `${item.maVe}`, `${item.giaVe * item.danhSachGhe.length}`,))
    })
    console.log(rows)

    return (
        <TableContainer component={Paper}>
            <Table className={table.table} aria-label="simple table">
                <TableHead className={table.header}>
                    <TableRow>
                        <TableCell>Tên phim</TableCell>
                        <TableCell align="center">Ngày đặt</TableCell>
                        <TableCell align="center">Thời lượng</TableCell>
                        <TableCell align="center">Rạp</TableCell>
                        <TableCell align="center">Ghế số</TableCell>
                        <TableCell align="center">Mã vé</TableCell>
                        <TableCell align="center">Giá vé</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.tenPhim}>
                            <TableCell component="th" scope="row">
                                {row.tenPhim}
                            </TableCell>
                            <TableCell align="center">{row.ngayDat}</TableCell>
                            <TableCell align="center">{row.thoiLuongPhim}</TableCell>
                            <TableCell align="center">{row.tenHeThongRap}</TableCell>
                            <TableCell className={table.gheSo} >
                                {row.tenGhe.map((ghe, index) => {
                                    return (
                                        <Box key={index} className={box.root}>
                                            <Box align="center" className={box.bg}>
                                                {ghe.props.children}

                                            </Box>
                                        </Box>
                                    )
                                })}

                            </TableCell>
                            <TableCell align="center">{row.maVe}</TableCell>
                            <TableCell align="center">{row.giaVe}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
