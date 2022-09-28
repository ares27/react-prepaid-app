import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
// import MainContainer from "./components/mainContainer";
import CancelPage from "./components/airtime/returnURLS/cancel";
import NotifyPage from "./components/airtime/returnURLS/notify";
import ReturnPage from "./components/airtime/returnURLS/return";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/cancel" component={CancelPage} />
          <Route path="/notify" component={NotifyPage} />
          <Route path="/return" component={ReturnPage} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      {/* <MainContainer /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
