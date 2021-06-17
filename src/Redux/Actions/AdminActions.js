import axios from 'axios'

export const layPhimPhanTrang = (trangHienTai, soPhanTu, tuKhoa) => {
    let url = ''
    if (tuKhoa === undefined) {
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
            // ????
            console.log(123);
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
                method: 'DELETE',
                headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVkdGFsazEwMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE2MjI0NjMyNjQsImV4cCI6MTYyMjQ2Njg2NH0.b2sqspzPPc5YVDjc_v8A14i5Hl3v6yOjh2fu3b-LS-A' }
            })
            console.log(result.data);
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
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload',
                method: 'POST',
                data: phim,
                headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVkdGFsazEwMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE2MjI0NjMyNjQsImV4cCI6MTYyMjQ2Njg2NH0.b2sqspzPPc5YVDjc_v8A14i5Hl3v6yOjh2fu3b-LS-A' }
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
    if (tuKhoa === undefined) {
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
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: 'DELETE',
                headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVkdGFsazEwMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE2MjI0NjMyNjQsImV4cCI6MTYyMjQ2Njg2NH0.b2sqspzPPc5YVDjc_v8A14i5Hl3v6yOjh2fu3b-LS-A' }
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
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: 'PUT',
                data: user,
                headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVkdGFsazEwMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE2MjI0NjMyNjQsImV4cCI6MTYyMjQ2Njg2NH0.b2sqspzPPc5YVDjc_v8A14i5Hl3v6yOjh2fu3b-LS-A' }
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
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
                method: 'POST',
                data: user,
                headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVkdGFsazEwMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE2MjI0NjMyNjQsImV4cCI6MTYyMjQ2Njg2NH0.b2sqspzPPc5YVDjc_v8A14i5Hl3v6yOjh2fu3b-LS-A' }
            })
            alert('Thêm người dùng thành công');
        } catch (error) {
            alert(error.response?.data);
        }
    }
}