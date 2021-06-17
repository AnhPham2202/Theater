import React, { Fragment } from 'react'
import { Router, Route } from 'react-router-dom'
import Header from '../../Components/Header/Header'
export default function ManagementTemplate(props) {
    return (
            <Route path={props.path} render={(propsRoute) => {
                return (
                    <Fragment>
                        <Header />
                        <props.component {...propsRoute}/>
                    </Fragment>
                )
            }} />
    )
}
