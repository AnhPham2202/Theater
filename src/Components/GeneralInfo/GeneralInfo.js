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
                Th??ng tin c?? nh??n
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
                        T??n kh??ch h??ng: <span>{thongTinTaiKhoan[0]?.hoTen}</span>
                    </Typography>
                    <ListItemText secondary="H??? v?? t??n ch??? t??i kho???n, c??ng l?? t??n c???a t??i kho???n hi???n th??? tr??n website. B???n c?? th??? thay ?????i ??? ph???n thay ?????i th??ng tin c?? nh??n" />

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
                        T??i kho???n: <span>{thongTinTaiKhoan[0]?.taiKhoan}</span>
                    </Typography>
                    <ListItemText secondary="L?? t??n t??i kho???n (username) ????? ????ng nh???p t??i kho???n." />

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
                        M???t kh???u
                    </Typography>
                    <ListItemText secondary="M???t kh???u c???n ???????c k???t h???p b???i nhi???u ch??? c??i, s??? v?? k?? t??? ?????c bi???t ????? b???o m???t t??i kho???n." />
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
                        S??? ??i???n tho???i: <span>{thongTinTaiKhoan[0]?.soDT}</span>
                    </Typography>
                    <ListItemText secondary="S??? ??i???n tho???i d??ng ????? ????ng k?? t??i kho???n. Th??ng tin n??y c?? th??? ???????c d??ng ????? x??c minh b???n l?? ch??? s??? h???u t??i kho???n nh???m thi???t l???p l???i m???t kh???u" />

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
                        Email c?? nh??n: <span>{thongTinTaiKhoan[0]?.email}</span>
                    </Typography>
                    <ListItemText secondary="Email c?? th??? ???????c s??? d???ng ????? thay ?????i m???t kh???u khi kh??ng c?? c??ng c??? b???o m???t n??o kh??c ???????c b???t. C??ng nh?? nh???n c??c tin t???c ho???t ?????ng c???a t??i kho???n." />

                </Box>
            </ListItem>

        </List>
    );
}
