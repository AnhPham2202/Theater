import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Calender from '../../Components/Calender/Calender'
import Carousel from '../../Components/Carousel/Carousel'
import FilmList from '../../Components/FilmList/FilmList'
import News from '../../Components/News/News'
import ShadowLine from '../../Components/ShadowLine/ShadowLine'

export default function Home(propsRoute) {
    
    return (
        <div>
            <Carousel/>
            <FilmList {...propsRoute}/>
            <ShadowLine/>
            <Calender />
            <ShadowLine/>
            <News/>
        </div>
    )
}
