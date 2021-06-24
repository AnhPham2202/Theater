import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LockIcon from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import { pink } from '../../Util/var';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinTaiKhoan } from '../../Redux/Actions/UserActions';





const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    avatarItemBg: {
        background: pink
    }
}));

const useText = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    titleText: {
        display: 'inline-block',
        fontWeight: 'bold'

    }
});


const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        borderRadius: '50px',
        margin: '0px',
        lineHeight: '0.75'
    },
}));


export default function FolderList() {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const thongTinTaiKhoan = useSelector(state => state.UserReducer.thongTinTaiKhoan)

    const list = useList();
    const text = useText();
    const btn = useButton();

    useEffect(()=> {
        dispatch(layThongTinTaiKhoan(user.taiKhoan)) 
    }, [])

    return (
        <List className={list.root} style={{ margin: '0px' }}>
            <Typography variant="h4" gutterBottom>
                Thông tin cá nhân
                </Typography>
            <Divider />
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={list.avatarItemBg}>
                        <PermContactCalendarIcon />
                    </Avatar>
                </ListItemAvatar>
                <Box component="span" m={1}>
                    <Typography className={text.titleText} variant="subtitle1" gutterBottom>
                        Tên khách hàng: <span>{thongTinTaiKhoan[0]?.hoTen}</span>
                    </Typography>
                    <ListItemText secondary="Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị trên website. Bạn có thể thay đổi ở phần thay đổi thông tin cá nhân" />

                </Box>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemAvatar>
                    <Avatar className={list.avatarItemBg}>
                        <AccountCircleIcon />
                    </Avatar>
                </ListItemAvatar>
                <Box component="span" m={1}>
                    <Typography className={text.titleText} variant="subtitle1" gutterBottom>
                        Tài khoản: <span>{thongTinTaiKhoan[0]?.taiKhoan}</span>
                    </Typography>
                    <ListItemText secondary="Là tên tài khoản (username) để đăng nhập tài khoản." />

                </Box>
                
            </ListItem>
            <Divider />


            <ListItem>
                <ListItemAvatar>
                    <Avatar className={list.avatarItemBg}>
                        <LockIcon />
                    </Avatar>
                </ListItemAvatar>
                <Box style={{widh: "50%"}} component="span" m={1}>
                    <Typography className={text.titleText} variant="subtitle1" gutterBottom>
                        Mật khẩu
                    </Typography>
                    <ListItemText secondary="Mật khẩu cần được kết hợp bởi nhiều chữ cái, số và ký tự đặc biệt để bảo mật tài khoản." />
                </Box>
                <Button className={btn.root} variant="outlined" color="secondary">
                    Change
                </Button>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemAvatar>
                    <Avatar className={list.avatarItemBg}>
                        <PhoneIcon />
                    </Avatar>
                </ListItemAvatar>
                <Box component="span" m={1}>
                    <Typography className={text.titleText} variant="subtitle1" gutterBottom>
                        Số điện thoại: <span>{thongTinTaiKhoan[0]?.soDT}</span>
                    </Typography>
                    <ListItemText secondary="Số điện thoại dùng để đăng kí tài khoản. Thông tin này có thể được dùng để xác minh bạn là chủ sở hữu tài khoản nhằm thiết lập lại mật khẩu" />

                </Box>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemAvatar>
                    <Avatar className={list.avatarItemBg}>
                        <EmailIcon />
                    </Avatar>
                </ListItemAvatar>
                <Box component="span" m={1}>
                    <Typography className={text.titleText} variant="subtitle1" gutterBottom>
                        Email cá nhân: <span>{thongTinTaiKhoan[0]?.email}</span>
                    </Typography>
                    <ListItemText secondary="Email có thể được sử dụng để thay đổi mật khẩu khi không có công cụ bảo mật nào khác được bật. Cũng như nhận các tin tức hoạt động của tài khoản." />

                </Box>
            </ListItem>

        </List>
    );
}
