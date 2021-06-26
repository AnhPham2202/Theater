import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import ManagementTemplate from "./Templates/ManagementTemplate/ManagementTemplate";

import Home from "./Pages/Home/Home";
import FilmDetail from "./Pages/FilmDetail/FilmDetail";
import { createBrowserHistory } from "history";
import TheaterDetail from "./Pages/TheaterDetail/TheaterDetail";
import TicketBoongking from "./Pages/TicketBooking/TicketBoongking";
import SignUp from "./Pages/SiginUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import UserPage from "./Pages/UserPage/UserPage";
import '@fontsource/roboto';
import Admin from "./Pages/Admin/Admin";
import HeaderStepper from "./Components/Header/HeaderStepper";
import { Fragment, useEffect } from "react";
import TicketBookingTemplate from "./Templates/TicketBookingTemplate/TicketBookingTemplate";
import ScrollToTop from "./Redux/Actions/ScrollTopWhenChangePage";


export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <ScrollToTop />
        <Switch>
          <ManagementTemplate path="/admin" component={Admin} />
          <ManagementTemplate path="/thongtincanhan" component={UserPage} />
          <HomeTemplate path="/dangnhap" component={SignIn} />
          <HomeTemplate path="/dangky" component={SignUp} />
          <HomeTemplate path='/theaterdetail/:mahethongrap' component={TheaterDetail} />
          <HomeTemplate path="/filmdetail/:id" component={FilmDetail} />
          <HomeTemplate path="/" exact component={Home} />
          <TicketBookingTemplate path="/chitietphongve/:malichchieu" component={TicketBoongking} />
        </Switch>
    </Router>
  );
}

export default App;
