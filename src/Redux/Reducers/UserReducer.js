import GeneralInfo from "../../Components/GeneralInfo/GeneralInfo";
import UserInfo from "../../Components/UserInfo/UserInfo";

let tenDN = '';
if(localStorage.getItem('user')){
    let userLogin = JSON.parse(localStorage.getItem('user'));
    tenDN = userLogin.taiKhoan
}

const stateDefault = {
    tenDangNhap: tenDN,
    component: <UserInfo />,
    componentChucNang: <GeneralInfo />,
    thongTinTaiKhoan: [],
    thongTinGheDaDat: [],
}

export default  (state=stateDefault, action) =>{
    switch (action.type) {
        case 'DANG_NHAP': {
            state.tenDangNhap = action.tenDangNhap
            return {...state}
        }
        case 'DANG_XUAT': {
            state.tenDangNhap = action.tenDangNhap
            return {...state}
        }
        case  'DOI_GIAO_DIEN': {
            state.component = action.component
            return {...state}
        }
        case 'DOI_CHUC_NANG_DANG_HIEN_THI': {
            state.componentChucNang = action.componentChucNang
            return {...state}
        }
        case 'SET_THONG_TIN_TAI_KHOAN': {
            state.thongTinTaiKhoan = action.thongTinTaiKhoan
            console.log(state.thongTinTaiKhoan)

            return {...state}

        }
        case 'SET_GHE_DAT': {
            state.thongTinGheDaDat = action.thongTinGheDaDat
            return {...state}
        }
        
    }
    return state;
}