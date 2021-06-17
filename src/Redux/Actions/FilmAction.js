import axios from 'axios'

export const getFilmFromApi = (maNhom) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: 'GET'
            })
            dispatch({
                type: 'SET_MANG_PHIM',
                filmArr: result.data
            });
        } catch (error) {
            console.log(error);
        }
    }

}


export const getTheaterFilmWithParamsFromApi = (maHeThongRap) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP03`,
                method: "GET"
            })
            dispatch({
                type: 'SET_PHIM_THEO_CUM_RAP',
                paritcularTheaterFilmArr: result.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getTheaterFilmFromApi = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03',
                method: "GET"
            })
            dispatch({
                type: 'SET_PHIM_THEO_RAP',
                theaterFilmArr: result.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getFilmDetailFromApi = (id) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
                method: "GET"
            })
            dispatch({
                type: 'SET_FILM_DETAIL_INFO',
                chiTietPhim: result.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


