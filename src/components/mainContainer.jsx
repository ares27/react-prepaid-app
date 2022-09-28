import React, { Component } from "react";
import AirtimeModal from "./airtime/AirtimeModal";
class MainContainer extends Component {
  state = {
    value: 0,
  };

  updateState = () => {
    console.log("updateState", this);
    // this.setState({ value: this.state.value + 1 });
  };

  onUpdate = () => {
    console.log("onUpdate...", this.state);
  };

  render() {
    return (
      <main className="container">
        <div className="bg-light p-5 rounded">
          <h1>AIRTIME</h1>
          <p className="lead">
            This example is a quick exercise to illustrate how to buy airtime on
            this app.
          </p>

          <AirtimeModal />
        </div>
      </main>
    );
  }
}

export default MainContainer;
