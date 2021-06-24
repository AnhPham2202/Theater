import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getFilmDetailFromApi,
  getTheaterFilmFromApi,
} from "../../Redux/Actions/FilmAction";
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

const useAccordion = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  accordionDetail: {
    display: 'inline-block'
  }

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
      maxWidth: '250px'
    },
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    '& .MuiTab-textColorInherit.Mui-selected ': {
       background: 'orange',
       color: 'white' 
    }
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 250,
  },
}));



export default function CalenderFilmDetail(props) {
  const filmDetail = useSelector((state) => state.FilmDetailReducer.chiTietPhim);
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const tabs = useTabs();
  const avatar = useAvatar();
  const grid = useGrid();
  const accordion = useAccordion();
  const [theater, setTheater] = useState(0);
  const [expanded, setExpanded] = useState(false);
  

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  useEffect(() => {
    dispatch(getFilmDetailFromApi(id));
  }, []);


  let renderLogo = () => {
    return filmDetail.heThongRapChieu?.map((theaterInfo, index) => {
      return (
        <Tab key={index} onClick={() => {
          setExpanded(false)
          setTheater(index)
        }} label={
          <div className={avatar.root}>
            <Avatar src={theaterInfo.logo} />
            <Typography variant="button" display="block" gutterBottom>
              {theaterInfo.tenHeThongRap}
            </Typography>
          </div>
        } {...a11yProps(index)} />
      );
    });
  };

  let renderTheater = () => {
    return filmDetail.heThongRapChieu?.[theater]?.cumRapChieu.map(
      (cumRap, index) => {
        return (
          <div key={index} className={accordion.root}>
            <Accordion expanded={expanded === index} onChange={handleExpand(index)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className={grid.root}>
                  <Grid container spacing={5}>
                    <Grid item xs={1}>
                      <Avatar src={filmDetail.heThongRapChieu[theater].logo} />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography variant="button" display="span" gutterBottom>
                        {cumRap.tenCumRap}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </AccordionSummary>
              {renderTime(cumRap.lichChieuPhim)}
            </Accordion>
          </div>

        );
      }
    );
  };

  let renderTime = (lichChieu) => {
    return lichChieu.map((lich, index) => {
      return (
        <AccordionDetails key={index} className={accordion.accordionDetail}>
          <Button variant="outlined">
            <NavLink to={`/chitietphongve/${lich.maLichChieu}`}>
              <TodayIcon style={{ marginRight: 2, color: 'black' }} />
              {lich.ngayChieuGioChieu.replace('T', ' lúc ')} ({lich.tenRap})
            </NavLink>
          </Button>
        </AccordionDetails>
      )
    })
  }


  return (
    <div id="filmCalender" className={tabs.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={tabs.tabs}
      >
        {renderLogo()}

      </Tabs>
      <TabPanel value={value} index={value}>
        {renderTheater()}
      </TabPanel>
    </div>
  )

}
