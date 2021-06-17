import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router'
import TicketInfoTable from '../../Components/TicketInfoTable/TicketInfoTable';
import UserBar from '../../Components/UserBar/UserBar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    const grid = useGrid();
    const component = useSelector(state => state.UserReducer.component)

    return (


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
}
