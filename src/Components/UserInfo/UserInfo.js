import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch, useSelector } from 'react-redux';
import PasswordChanging from '../PasswordChanging/PasswordChanging';
import InfoChanging from '../InfoChanging/InfoChanging';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
import { doiChucNang } from '../../Redux/Actions/UserActions';



const useList = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const useCard = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const useText = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});



const useGrid = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function UserInfo() {
    const list = useList();
    const card = useCard();
    const text = useText();
    const grid = useGrid();
    const dispatch = useDispatch()


    const componentChucNang = useSelector(state => state.UserReducer.componentChucNang)

    return (
        <div className={grid.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={grid.paper}>
                        <div className={list.root}>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem onClick={() => dispatch(doiChucNang(<GeneralInfo />))}  button>
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Thông tin tài khoản
                                    </Typography>
                                </ListItem>
                                <ListItem onClick={() => dispatch(doiChucNang(<PasswordChanging />))} button>
                                    <ListItemIcon>
                                        <LockOpenIcon />
                                    </ListItemIcon>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Thay đổi mật khẩu
                                    </Typography>
                                </ListItem>
                                <ListItem onClick={() => dispatch(doiChucNang(<InfoChanging />))} button>
                                    <ListItemIcon>
                                        <SettingsIcon />
                                    </ListItemIcon>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Thay đổi thông tin cá nhân
                                    </Typography>
                                </ListItem>
                            </List>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={9}>
                    <Paper className={grid.paper}>
                        {componentChucNang}
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}
