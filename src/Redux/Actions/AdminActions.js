import axios from 'axios'

export const layPhimPhanTrang = (trangHienTai, soPhanTu, tuKhoa) => {
    let url = ''
    if (tuKhoa === undefined || tuKhoa === '') {
        url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${trangHienTai}&soPhanTuTrenTrang=${soPhanTu}`
    } else {
        url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&tenPhim=${tuKhoa}&soTrang=${trangHienTai}&soPhanTuTrenTrang=${soPhanTu}`
    }
    return async (dispatch) => {
        const result = await axios({
            url: url,
            method: 'GET'
        })
        dispatch({
            type: 'SET_PHIM_PHAN_TRANG',
            phimPhanTrang: result.data
        })
    }
}

export const xoaPhim = (maPhim) => {
    return async () => {
        try {
            const TOKEN = localStorage.getItem('t') 
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
                method: 'DELETE',
                headers: { Authorization: 'Bearer ' + TOKEN }
            })
        } catch (error) {
            alert(error.response?.data);
        }
    }
}

export const doiGiaoDien = (component) => {
    return (dispatch) => {
        dispatch({
            type: 'DOI_GIAO_DIEN_ADMIN',
            component: component
        })
    }
}


export const themPhim = (phim) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
                method: 'POST',
                data: phim
            })
            alert('Thêm phim thành công');
        } catch (error) {
            alert(error.response?.data);
        }
    }
}

export const chinhSuaPhim = (phim) => {
    console.log('chinhsua');
    try {
        return async (dispatch) => {
            const TOKEN = localStorage.getItem('t') 
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload',
                method: 'POST',
                data: phim,
                headers: { Authorization: 'Bearer ' + TOKEN }
            })
            console.log('try chinh sua');
        }
    } catch (error) {
        console.log(error.response?.data);
    }

}

// export const layDanhSachNguoiDungPhanTrang = (trangHienTai, soPhanTu) => {
//     return async (dispatch) => {
//         const result = await axios({
//             url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP03&soTrang=${trangHienTai}&soPhanTuTrenTrang=${soPhanTu}`,
//             method: 'GET'
//         })
//         dispatch({
//             type: 'SET_USER_PHAN_TRANG',
//             nguoiDungPhanTrang: result.data
//         })
//     }
// }

export const layDanhSachNguoiDungPhanTrang = (trangHienTai, soPhanTu, tuKhoa) => {
    let url = ''
    if (tuKhoa === undefined || tuKhoa === '') {
        url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&soTrang=${trangHienTai}&soPhanTuTrenTrang=${soPhanTu}`
    } else {
        url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP03&tuKhoa=${tuKhoa}&soTrang=${trangHienTai}&soPhanTuTrenTrang=${soPhanTu}`
    }
    return async (dispatch) => {
        const result = await axios({
            url: url,
            method: 'GET'
        })
        dispatch({
            type: 'SET_USER_PHAN_TRANG',
            nguoiDungPhanTrang: result.data
        })
    }
}

export const xoaUser = (taiKhoan) => {
    return async () => {
        try {
            const TOKEN = localStorage.getItem('t') 
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: 'DELETE',
                headers: { Authorization: 'Bearer ' + TOKEN}
            })
            alert(result.data);
        } catch (error) {
            alert(error.response?.data);
        }
    }
}

export const chinhSuaUser = (user) => {
    try {
        return async (dispatch) => {
            const TOKEN = localStorage.getItem('t') 
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: 'PUT',
                data: user,
                headers: { Authorization: 'Bearer ' + TOKEN }
            })
            alert('Thay đổi thông tin thành công')
        }
    } catch (error) {
        console.log(error.response?.data);
    }

}

export const themNguoiDung = (user) => {
    return async (dispatch) => {
        try {
            const TOKEN = localStorage.getItem('t') 
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
                method: 'POST',
                data: user,
                headers: { Authorization: 'Bearer ' + TOKEN }
            })
            alert('Thêm người dùng thành công');
        } catch (error) {
            alert(error.response?.data);
        }
    }
}

export const layThongTinHeThongRap = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
                method: 'GET',
            })
            dispatch({
                type: 'SET_MANG_HE_THONG_RAP',
                mangHeThongRap: result.data
            })
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}

export const layThongTinCumRapTheoHeThong = (heThongRap) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${heThongRap}`,
                method: 'GET',
            })
            dispatch({
                type: 'SET_MANG_CUM_RAP',
                mangCumRap: result.data
            })
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}

export const taoLichChieu = (thongTinLichChieu) => {
    return async (dispatch) => {
        try {
            console.log(thongTinLichChieu)
            const TOKEN = localStorage.getItem('t')

            const result = axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu',
                method: 'POST',
                headers: { Authorization: 'Bearer ' + TOKEN },
                data: thongTinLichChieu
            })
            alert('Tạo lịch chiếu thành công !!!')
        } catch (error) {
            console.log(error.response.data)
        }
    }
}