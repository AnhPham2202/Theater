import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router'
import TicketInfoTable from '../../Components/TicketInfoTable/TicketInfoTable';
import UserBar from '../../Components/UserBar/UserBar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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

export default function UserPage(props) {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
        alert('Bạn chưa đăng nhập !!!')
        history.push('/dangnhap')
    }
    const grid = useGrid();
    const component = useSelector(state => state.UserReducer.component)


    return (

        !user ? '' : ( // render '' để chỉ cần check điều kiện ở page tổng (do react render giao diện trước nên sẽ render các component do đó sẽ cần phải check điều kiện cả các component trong page)
            <div className={grid.root}>
                <Grid container spacing={0}>
                    <Grid item xs={2}>

                        <UserBar />
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
