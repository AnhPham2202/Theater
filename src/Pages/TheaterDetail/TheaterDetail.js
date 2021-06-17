import React, { useState } from 'react'
import { Fragment } from 'react'
import CalenderTheaterDetail from '../../Components/CalenderTheaterDetail/CalenderTheaterDetail'
import TheaterInfo from '../../Components/TheaterInfo/TheaterInfo'

export default function TheaterDetail(props) {
        return (
        <div  style={{ background: '#0a2029'}} >
            <TheaterInfo   {...props}/>
            <CalenderTheaterDetail  {...props}/>
        </div >
    )
}
