import React, { Fragment } from 'react'
import { Router, Route } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import HeaderStepper from '../../Components/Header/HeaderStepper'

export default function TicketBookingTemplate(props) {
    return (
            <Route path={props.path} render={(propsRoute) => {
                return (
                    <Fragment>
                        <HeaderStepper />
                        <props.component {...propsRoute}/>
                        <Footer />
                    </Fragment>
                )
            }} />
    )
}
