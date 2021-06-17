import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVe, thayDoiHeaderProgress, xoaGhe } from '../../Redux/Actions/TicketBookingActions'
import { datVe } from '../../Redux/Actions/UserActions'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';

import zalo from '../../assets/img/zalopay.jpg'
import cc from '../../assets/img/visapay.png'
import atm from '../../assets/img/atmpay.png'
import paypoo from '../../assets/img/paypoopay.png'
import { useState } from 'react';
const useField = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            marginBottom: 5,
            width: '100%',
        },
        '& .MuiFormLabel-root': {
            fontSize: 14
        }
    },
}));
const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            padding: theme.spacing(3),
            width: '100%',

            fontSize: '22px',
        },
        '& .MuiButton-label': {
            zIndex: 1,
            color: 'white '
        },
        '& .MuiTouchRipple-root': { // cho vào ripple để lúc disabled nó k có màu
            background: 'linear-gradient(223deg, #b4ec51 0,#429321 100%)'
        },
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
}));

const useText = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
        textAlign: 'center',
        color: '#44c020',
        padding: 20,
        borderBottom: '1px solid #e9e9e9'
    },
    lineFormat: {
        borderBottom: '1px solid #e9e9e9',
        padding: '15px 0',
    },
    lineFormatWithColor: {
        display: 'flex',
        justifyContent: 'space-between',
        '& .MuiTypography-caption': {
            borderBottom: '1px solid #e9e9e9',
            padding: '15px 0',
            color: 'orange',
            fontWeight: 800,
            fontStyle: 'italic'
        }
    },
    warningText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#4a4a4a',
        '& .highlight': {
            color: 'orange'
        }
    }
});

export default function SeatBookingInfo(props) {
    const thongTinChiTietPhongVe = useSelector(state => state.TicketBookingReducer.thongTinChiTietPhongVe)
    const mangGheDangDat = useSelector(state => state.TicketBookingReducer.mangGheDangDat)
    const stepper = useSelector(state => state.TicketBookingReducer.stepper)
    const { malichchieu } = props.match.params
    const dispatch = useDispatch()
    const textField = useField();
    const text = useText()
    const btn = useButton();
    const [value, setValue] = useState('zalo');
    const [disabled, setDisabled] = useState(true);
    const user = JSON.parse(localStorage.getItem('user'))
    const thongTinDatVe = {
        maLichChieu: malichchieu,
        danhSachVe: [],
        taiKhoanNguoiDung: user.taiKhoan
    }

    const mangRadioChoices = [
        { value: 'zalo', label: "Thanh toán qua ZaloPay", src: zalo },
        { value: 'cc', label: "Visa, MasterCard, JCB", src: cc },
        { value: 'atm', label: "Thẻ ATM nội địa", src: atm },
        { value: 'paypoo', label: "Thanh toán tại cửa hàng tiện ích", src: paypoo },
    ]


    const handleChange = (event) => {
        setValue(event.target.value);
    };


    if (stepper === 0) {
        if (mangGheDangDat.length !== 0 && disabled) { setDisabled(false) }
        if (mangGheDangDat.length == 0 && !disabled) { setDisabled(true) }
    } else {
        if (!disabled) { setDisabled(true) }
    }
    useEffect(() => {
        dispatch(layChiTietPhongVe(malichchieu))
        dispatch({
            type: 'RESET_MANG_GHE'
        })
    }, [])

    const radioHinhThucThanhToan = () => {
        const renderFormControlLabel = () => {
            return mangRadioChoices.map((choice, index) => {
                return (
                    <FormControlLabel key={index} disabled={disabled} value={choice.value} control={<Radio />} label={
                        <Box component="span" m={1}>
                            <img className="mr-2" width={40} src={choice.src} />
                            <Typography variant="caption" component="span">{choice.label}</Typography>
                        </Box>

                    } />
                )
            })
        }
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Hình thức thanh toán</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    {renderFormControlLabel()}
                </RadioGroup>
            </FormControl>
        )
    }
    let renderThongTinPhimVaRap = () => {
        let { diaChi, gioChieu, hinhAnh, ngayChieu, tenCumRap, tenPhim, tenRap } = thongTinChiTietPhongVe.thongTinPhim ?? ''
        return (
            <div className={text.lineFormat}>
                <Typography variant="h6">
                    {tenPhim}
                </Typography>
                <Typography variant="body2">
                    {diaChi}
                </Typography>
                <Typography variant="body2">
                    {`${ngayChieu} - ${gioChieu} - ${tenRap}`}
                </Typography>
            </div>

        )
    }

    let renderGheDangDat = () => {
        return mangGheDangDat.map((gheDangChon, index) => {
            thongTinDatVe.danhSachVe.push({
                maGhe: gheDangChon.maGhe,
                giaVe: gheDangChon.giaVe,
            })
            if (gheDangChon.loaiGhe === 'Thuong') {
                return (
                    `${gheDangChon.tenGhe}, `
                )
            }
        })
    }
    const renderTongTienTheoLoaiGhe = (loaiGhe) => {
        let sum = 0
        mangGheDangDat.map((ghe, index) => {
            if (ghe.loaiGhe === loaiGhe) {
                sum += ghe.giaVe
            }
        })
        return sum;
    }
    const renderGheDangDatVIP = () => {
        return mangGheDangDat.map((gheDangChon) => {
            if (gheDangChon.loaiGhe === 'Vip') {
                return (
                    `${gheDangChon.tenGhe}, `
                )
            }
        })
    }
    const renderTongTien = () => {
        let tongTien = 0
        mangGheDangDat.map((gheDangChon) => {
            tongTien += gheDangChon.giaVe

        })
        return (
            <Typography variant="h4">
                {tongTien + " đ"}
            </Typography>
        )

    }
    return (
        <div style={{ overflow: 'auto', height: 'calc(100% - 200px)' }}>
            <div className={text.root}>
                {renderTongTien()}
            </div>
            {renderThongTinPhimVaRap()}

            <div className={text.lineFormatWithColor}>
                <Typography variant="caption" display="block" gutterBottom>
                    Ghế thường: {renderGheDangDat()}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>

                    {renderTongTienTheoLoaiGhe('Thuong')} đ
                </Typography>

            </div>
            <div className={text.lineFormatWithColor}>
                <Typography variant="caption" display="block" gutterBottom>
                    Ghế VIP: {renderGheDangDatVIP()}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {renderTongTienTheoLoaiGhe('Vip')} đ
                </Typography>
            </div>

            {/* <div className={textField.root}>
                <TextField disabled={disabled} id="standard-basic" label="E-mail" />
                <TextField disabled={disabled} id="standard-basic" label="Số điện thoại" />
            </div> */}

            <div className={text.lineFormat} >
                {/* <Typography variant="body2" display="block" gutterBottom>
                </Typography> */}
                {radioHinhThucThanhToan()}

            </div>

            <div className={btn.root}>
                <div className={text.warningText}>

                    <Typography variant="caption" display="block" >
                        <ErrorIcon style={{ fontSize: 16, color: 'red' }} /> Vé đã mua không thể đổi hoặc hoàn tiền
                        Mã vé sẽ được gửi qua tin nhắn <span className="highlight">ZMS (tin nhắn Zalo)</span> và <span className="highlight">Email</span> đã nhập.
                    </Typography>
                </div>


                <Button variant="contained" disabled={disabled} onClick={() => {
                    dispatch(thayDoiHeaderProgress(1))
                    dispatch(datVe(thongTinDatVe, user.accessToken))
                }}>Mua Vé</Button>
            </div>

        </div>
    )
}
