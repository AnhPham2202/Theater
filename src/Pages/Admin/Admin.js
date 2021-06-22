import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router'
import TicketInfoTable from '../../Components/TicketInfoTable/TicketInfoTable';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AdminBar from '../../Components/AdminBar/AdminBar';
import { history } from '../../App';

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

export default function Admin(props) {
    const grid = useGrid();
    const component = useSelector(state => state.AdminReducer.component)
    const user = localStorage.getItem('user')
    if (!user) {
        alert('Bạn cần đăng nhập trước !!!')
        history.push('/dangnhap')
    }

    return (
        !user ? '' : (
            <div className={grid.root}>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <AdminBar />
                    </Grid>
                    <Grid item xs={10}>
                        <Paper className={grid.paper}>
                            {component}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    )
}
