const initialState = {
    filmArr: [],
    chiTietPhim: {}

}

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_FILM_DETAIL_INFO': {
            state.chiTietPhim = action.chiTietPhim
            return {...state}
        }
        case 'SET_MANG_PHIM': {
            state.filmArr = action.filmArr
            return {...state}
        }
 
    }
    return state
}