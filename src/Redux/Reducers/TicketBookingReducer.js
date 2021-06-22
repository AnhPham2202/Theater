const initialState = {
    thongTinChiTietPhongVe: {},
    mangGheDangDat: [],
    stepper: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MANG_GHE': {
            state.thongTinChiTietPhongVe = action.thongTinPhongVe
            return { ...state }
        }
        case 'THEM_GHE': {
            if (state.mangGheDangDat.length == 6) { alert ('Bạn không thể đặt quá 6 ghế !!!'); return { ...state }} 
            let mangGheCapNhat = [...state.mangGheDangDat]
            let index = mangGheCapNhat.findIndex(ghe => ghe.maGhe === action.gheDangChon.maGhe)
            if (index !== -1) {
                mangGheCapNhat.splice(index, 1)
                state.mangGheDangDat = mangGheCapNhat
            } else {
                mangGheCapNhat.push(action.gheDangChon)
                state.mangGheDangDat = mangGheCapNhat
            }
            return { ...state }
        }
        case 'XOA_GHE': {
            let mangGheCapNhat = [...state.mangGheDangDat]
            mangGheCapNhat = mangGheCapNhat.filter(ghe => ghe.maGhe !== action.gheDangChon.maGhe)
            state.mangGheDangDat = mangGheCapNhat
            return { ...state }
        }
        case 'RESET_MANG_GHE': {
            let mangRong = []
            state.mangGheDangDat = mangRong
            return { ...state }
        }
        case 'CHANGE_STEP': {
            state.stepper = action.stepper
            return { ...state }
        }

    }
    return state

}
