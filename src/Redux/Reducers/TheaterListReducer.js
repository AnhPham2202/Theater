const initialState = {
    theaterArr:[],
    theaterFilmArr: [],
    theaterAccordingToFilm: [],
    paritcularTheaterFilmArr: {},
    //
    theaterInfo: {
        name: 'name',
        address: 'address',
        firstRender: 0
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
      
        case 'SET_RAP_PHIM':{
            state.theaterArr = action.theaterArr
            return {...state}
        }
        case 'SET_PHIM_THEO_RAP': {
            state.theaterFilmArr = action.theaterFilmArr
            return {...state}
        }
        case 'SET_PHIM_THEO_CUM_RAP': {
            state.paritcularTheaterFilmArr = action.paritcularTheaterFilmArr
            return {...state}
        }

        //
        case 'SET_THEATER_INFO' : {
            state.theaterInfo = action.theaterInfo
        }
    }
    return state;
}
