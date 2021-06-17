import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SeatBookingInfo from '../../Components/SeatBookingInfo/SeatBookingInfo'
import SeatMap from '../../Components/SeatMap/SeatMap'
import TicketBookingResult from '../../Components/TicketBookingResult/TicketBookingResult'
import { thayDoiHeaderProgress } from '../../Redux/Actions/TicketBookingActions'


export default function TicketBoongking(props) {
    const stepper = useSelector(state => state.TicketBookingReducer.stepper)
    const dispatch = useDispatch()
    useEffect(() => {
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
                    <SeatBookingInfo {...props} />
                </div>
            </div>
        </div>
    )
}
