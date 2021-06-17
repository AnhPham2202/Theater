
export const setThongTinRapTheoIndex = (rap) => {
    return  (dispatch) => {
        dispatch({
            type: 'SET_THEATER_INFO',
            theaterInfo: {
                name: rap.name,
                address: rap.address,
                firstRender: rap.firstRender
            }
        })
    }
}

