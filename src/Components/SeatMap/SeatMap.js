import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVe } from '../../Redux/Actions/TicketBookingActions'
import { themGhe } from '../../Redux/Actions/TicketBookingActions'
import screen from '../../assets/img/screen.png'


export default function SeatMap(props) {
    const dispatch = useDispatch()
    const thongTinChiTietPhongVe = useSelector(state => state.TicketBookingReducer.thongTinChiTietPhongVe)
    const mangGheDangDat = useSelector(state => state.TicketBookingReducer.mangGheDangDat)
    const { malichchieu } = props.match.params

    useEffect(() => {
        dispatch(layChiTietPhongVe(malichchieu))
    }, [])

    const renderSeat = () => {
        return thongTinChiTietPhongVe.danhSachGhe?.map((ghe, index) => {
            let chuoiClassSauKhiCheckTinhTrangGhe = () => {
                let classString = ''
                mangGheDangDat.map((gheDangChon, index) => {
                    if(gheDangChon.maGhe === ghe.maGhe) {
                        classString = 'btn text-white seat-btn btn-success'
                    }
                })
                if(classString !==  '') return classString
                if(!ghe.daDat && ghe.loaiGhe == 'Vip'){
                    return `btn text-white seat-btn bg-warning`
                }else if (!ghe.daDat && ghe.loaiGhe !== 'Vip'){
                    return `btn text-white seat-btn bg-secondary `
                }else{
                    return `btn text-white seat-btn unavailable-seat `
                }
            }
            if(ghe.daDat){
                return (
                    <div className='seat-div text-center '>
                        <button onClick={() => dispatch(themGhe(ghe))} disabled className={chuoiClassSauKhiCheckTinhTrangGhe()} >{ghe.tenGhe}</button>
                    </div>
                )
            }
            return (
                <div key={index} className='seat-div text-center'>
                    <button onClick={() => dispatch(themGhe(ghe))}  className={chuoiClassSauKhiCheckTinhTrangGhe()} >{ghe.tenGhe}</button>
                </div>
            )
            
        })
    }
    const renderGhiChu = () => {
        return (
            <div className="mt-4" style={{display: 'flex', justifyContent:'space-between', paddingTop: '30px'}}>
                <div>
                    <button className="btn seat-btn btn bg-secondary" style={{width: "30px", height: '30px'}}></button>
                    <span className="ml-2">Ghế Thường</span>
                </div>
                <div>
                    <button className="btn seat-btn bg-warning" style={{width: "30px", height: '30px'}}></button>
                    <span className="ml-2">Ghế VIP</span>
                </div>
                <div>
                    <button className="btn seat-btn btn-success" style={{width: "30px", height: '30px'}}></button>
                    <span className="ml-2">Ghế Đang Chọn</span>
                </div>
                <div>
                    <button className="btn seat-btn unavailable-seat" style={{width: "30px", height: '30px'}}></button>
                    <span className="ml-2">Ghế Đã Được Đặt</span>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <img className="w-100" src={screen}></img> 
            {renderSeat()}
            {renderGhiChu()}
        </div>
    )
}
