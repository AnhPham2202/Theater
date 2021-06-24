import React, { useEffect } from 'react'
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheaterFilmFromApi } from '../../Redux/Actions/FilmAction';
import { setThongTinRapTheoIndex } from '../../Redux/Actions/TheaterActions';

export default function TheaterInfo(props) {
    const dispatch = useDispatch()
    const { mahethongrap } = props.match.params
    const theaterInfo = useSelector(state => state.TheaterListReducer.theaterInfo)
    const theaterFilmArr = useSelector(state => state.TheaterListReducer.theaterFilmArr);
    let theaterNameFirstDispatch = theaterFilmArr[0]?.lstCumRap?.[0]?.tenCumRap
    let theaterAddressFirstDispatch = theaterFilmArr[0]?.lstCumRap?.[0]?.diaChi

    useEffect(() => {
        dispatch(getTheaterFilmFromApi());
        dispatch(setThongTinRapTheoIndex({
            name: theaterNameFirstDispatch,
            address: theaterAddressFirstDispatch,
            firstRender: theaterInfo.firstRender
        }))
    }, [theaterNameFirstDispatch]);
    
    const render = () => {
        return theaterFilmArr.map((heThongRap, index) => {
            if (heThongRap.maHeThongRap === mahethongrap) {
                theaterNameFirstDispatch = heThongRap.lstCumRap?.[theaterInfo.firstRender]?.tenCumRap
                theaterAddressFirstDispatch = heThongRap.lstCumRap?.[theaterInfo.firstRender]?.diaChi
                return (
                    <Fragment>
                        <div
                            className="film-bg"
                            style={{ backgroundImage: `url(${heThongRap.logo})` }}
                        ></div>
                        <div className="bg"></div>

                        <div className="col-3">
                            <img className="w-100" src={heThongRap.logo} />
                        </div>
                        <div className="col-9 film-info">
                            <h4 className="title text-white">
                                {theaterInfo.name}
                            </h4>
                            <p className="text-white-50">
                                {theaterInfo.address}
                            </p>
                            <button className="btn mr-3 font-weight-bold">Mua Vé Ngay</button>
                        </div>
                    </Fragment>
                )
            }

        })
    }

    return (
            <div id="film-detail">
                <div className="container">
                    <div className="row">
                        {render()}
                    </div>
                </div>
            </div>
    )
}
