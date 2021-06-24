import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTheaterFilmWithParamsFromApi } from '../../Redux/Actions/FilmAction';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TodayIcon from '@material-ui/icons/Today';
import { setThongTinRapTheoIndex } from '../../Redux/Actions/TheaterActions';


const useButton = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0.5),
        },
        display: 'inline-block',
        width: '50%'
    },
    colorGreen: {
        color: 'green',
        '&:hover': {
            color: 'green',

        }
    }
}));
const useAccordion = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& .MuiAccordionDetails-root': {
            display: 'block',
        },
        '& .MuiPaper-elevation1': {
            boxShadow: 'none',
            borderBottom: '0.5px solid #9b9b9b4f'
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


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

const useAvatar = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{
                overflow: 'auto',
                width: '100%'
            }}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useTabs = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 500,
        margin: '50px 200px 0 200px',
        '& .MuiTab-root': {
            minWidth: '100%',
        },
        '& .MuiTab-wrapper': {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        '& .MuiTab-textColorInherit.Mui-selected ': {
            background: 'orange',
            color: 'white'
        }
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 350,

    },
}));


export default function CalenderTheaterDetail(props) {
    const thongTinHeThongRap = useSelector(state => state.TheaterListReducer.paritcularTheaterFilmArr)
    const thongTinRap = useSelector(state => state.TheaterListReducer.theaterInfo)
    const { mahethongrap } = props.match.params
    const dispatch = useDispatch();
    const tabs = useTabs();
    const avatar = useAvatar();
    const btn = useButton();
    const accordion = useAccordion();
    const [expanded, setExpanded] = useState(false);
    const [rapIndex, setRapIndex] = useState(thongTinRap.firstRender)
    const [value, setValue] = useState(rapIndex);

    const handleExpand = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getTheaterFilmWithParamsFromApi(mahethongrap));
    }, []);

    let renderTheater = () => {
        return thongTinHeThongRap[0]?.lstCumRap.map((theater, index) => {

            return (
                <Tab key={index} onClick={() => {
                    setExpanded(false)
                    setRapIndex(index)
                    dispatch(setThongTinRapTheoIndex({
                        name: theater.tenCumRap,
                        address: theater.diaChi,
                        firstRender: index
                    }))
                }} label={
                    <Typography variant="button" display="block" gutterBottom>
                        Chi nhánh {theater.tenCumRap.split('-')[1]}
                    </Typography>
                } {...a11yProps(index)} />
            );
        })
    }
    let renderFilm = () => {
        return thongTinHeThongRap[0]?.lstCumRap[rapIndex]?.danhSachPhim.map((film, index) => {
                return (
                    <div key={index} className={accordion.root}>
                        <Accordion expanded={expanded === index} onChange={handleExpand(index)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Grid container spacing={3}>
                                    <Grid item xs={2}>
                                        <Avatar variant="rounded" className={avatar.rounded}>
                                            <img style={{ width: '100%' }} src={film.hinhAnh} />
                                        </Avatar>

                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="button" >{film.tenPhim}</Typography>
                                        <Typography variant="caption" display="block"  >{`(Có ${film.lstLichChieuTheoPhim.length} lịch chiếu)`}</Typography>
                                    </Grid>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                {renderTime(film.lstLichChieuTheoPhim)}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                );
            }
        );
    };

    let renderTime = (lichChieu) => {
        return lichChieu.map((lich, index) => {
            return (
                <div key={index} className={btn.root}>
                    <Button variant="outlined">
                        <NavLink className={btn.colorGreen} to={`/chitietphongve/${lich.maLichChieu}`}>
                            <TodayIcon style={{ marginRight: 2, color: 'black' }} />
                            {lich.ngayChieuGioChieu.replace('T', ' lúc ')} ({lich.tenRap})
                        </NavLink>
                    </Button>
                </div >
            )
        })
    }


    return (
        <div className={tabs.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={tabs.tabs}
            >
                {renderTheater()}

            </Tabs>
            <TabPanel value={value} index={value}>
                {renderFilm()}
            </TabPanel>
        </div>
    )
}

