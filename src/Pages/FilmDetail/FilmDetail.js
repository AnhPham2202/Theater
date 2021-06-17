import React from 'react'
import CalenderFilmDetail from '../../Components/CalenderFilmDetail/CalenderFilmDetail'
import FilmInfo from '../../Components/FilmInFo/FilmInfo'

export default function FilmDetail(props) {
    return (
        <div style={{ background: '#0a2029'}}>
            <FilmInfo {...props}/>
            <CalenderFilmDetail  {...props}/>
        </div>
    )
}
