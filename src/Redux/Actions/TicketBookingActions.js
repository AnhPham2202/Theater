import axios from 'axios'

export const layChiTietPhongVe = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            })
            dispatch({
                type: 'SET_MANG_GHE',
                thongTinPhongVe: result.data
            })
        } catch (error) {
            console.log(error.response?.data);
        }
        
    }
}

export const themGhe = (gheDangChon) => {
    return (dispatch) => {
        dispatch({
            type: 'THEM_GHE',
            gheDangChon: gheDangChon
        })

    }
}


export const xoaGhe = (gheDangChon) => {
    return (dispatch) => {
        dispatch({
            type: 'XOA_GHE',
            gheDangChon: gheDangChon
        })

    }
}
export const thayDoiHeaderProgress = (step) => {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_STEP',
            stepper: step
        })
    }
}