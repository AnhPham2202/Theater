import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../App'
import SeatBookingInfo from '../../Components/SeatBookingInfo/SeatBookingInfo'
import SeatMap from '../../Components/SeatMap/SeatMap'
import TicketBookingResult from '../../Components/TicketBookingResult/TicketBookingResult'
import { thayDoiHeaderProgress } from '../../Redux/Actions/TicketBookingActions'


export default function TicketBoongking(props) {
    const stepper = useSelector(state => state.TicketBookingReducer.stepper)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        if (!user) {
            alert('Bạn cần đăng nhập trước đã !!!')
            history.push('/dangnhap')
        }
        if (stepper === 1){
            dispatch(thayDoiHeaderProgress(0))
        }
    }, [])
    return (
        <div id="ticket-booking">
            <div className="row ">
                <div className="col-9">
                    
                    {stepper == 0 ? <SeatMap {...props} /> : <TicketBookingResult {...props} />}
                    {/* <SeatMap {...props} /> */}
                </div>
                <div style={{ position: 'relative' }} className="col-3 seat-booking-info">
                    {user ? <SeatBookingInfo {...props} /> : ''} 
                </div>
            </div>
        </div>
    )
}
