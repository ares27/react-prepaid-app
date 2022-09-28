import React, { Component } from "react";
import CaptureNumber from "./CaptureNumber";
import CaptureDetails from "./CaptureDetails";
import PlaceOrder from "./PlaceOrder";
import axios from "axios";

class AirtimeForm extends Component {
  state = {
    step: 1,
    payfastdetails: {
      merchant_id: "10023264",
      merchant_key: "0kg0prpdrqwe6",
      amount: "50.00",
      item_name: "Airtime",
      return_url: "https://e41df7128d7b.ngrok.io/return",
      cancel_url: "https://e41df7128d7b.ngrok.io/cancel",
      notify_url: "https://e41df7128d7b.ngrok.io/notify",
    },
    payfastArray: [
      "10023264",
      "0kg0prpdrqwe6",
      "50.00",
      "Airtime",
      "https://e41df7128d7b.ngrok.io/return",
      "https://e41df7128d7b.ngrok.io/cancel",
      "https://e41df7128d7b.ngrok.io/notify",
    ],
    signature: "",
    phonenumber: "",
    network: "",
    productsArray: [],
    product: {
      network: "",
      sellvalue: "",
    },
    successProductObj: {},
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  inputNetworkChange = (input) => async (e) => {
    let inputValue = e.target.value;
    // console.log(inputValue);
    this.setState({
      [input]: e.target.value,
      productsArray: [],
      inputProductSelectValue: "",
      product: {},
    });

    if (inputValue === "0") {
      console.log("no products for category");
      this.state.productsArray = [];
      this.state.product = {};
      console.log(this.state.productsArray, this.state.productsArray.length);
    } else {
      try {
        const promise = await axios.get(
          "http://localhost:3099/airtime/fetchproducts"
        );

        // console.log('promise');
        // console.log(promise.data);
        let prodArray = [];
        promise.data.filter((item) => {
          if (item.network === inputValue) {
            // console.log(item);
            prodArray.push(item);
          }
          return prodArray;
        });

        this.setState({
          productsArray: prodArray,
        });
        console.log("state", this.state.productsArray);
      } catch (ex) {
        console.log(ex);
        // return ex;
      }
    }
  };

  inputProductChange = (input) => (e) => {
    let inputValue = e.target.value;
    console.log(inputValue);
    this.setState({
      [input]: e.target.value,
      inputProductSelectValue: `${inputValue.split("_")[0]}_${
        inputValue.split("_")[1]
      }_${inputValue.split("_")[2]}_${inputValue.split("_")[3]}`,
      product: {
        description: inputValue.split("_")[0],
        sellvalue: inputValue.split("_")[1],
        network: inputValue.split("_")[2],
        groupname: inputValue.split("_")[3],
      },
    });
  };

  placeOrder = async () => {
    const { network, sellvalue } = this.state.product;
    // console.log(network, sellvalue);

    try {
      const placeOrderRequest = await axios.post(
        `http://localhost:3099/airtime/placeOrder`,
        {
          network: network,
          sellvalue: sellvalue,
        }
      );
      console.log(placeOrderRequest.data);
      const orderno = placeOrderRequest.data.orderno;

      if (placeOrderRequest.status === 200) {
        const fetchOrderRequest = await axios.post(
          `http://localhost:3099/airtime/fetchOrder`,
          { orderno }
        );
        console.log(fetchOrderRequest.data);
        if (fetchOrderRequest.status === 200) {
          this.setState({
            successProductObj: {
              network: fetchOrderRequest.data.network,
              sellvalue: fetchOrderRequest.data.sellvalue,
              pin: fetchOrderRequest.data.pin,
            },
          });
        }
      }
    } catch (ex) {
      console.log(ex);
    }

    this.nextStep();
  };

  render() {
    const { step } = this.state;
    const {
      payfastdetails,
      payfastArray,
      signature,
      phonenumber,
      network,
      productsArray,
      inputProductSelectValue,
      product,
      successProductObj,
    } = this.state;
    const values = {
      payfastdetails,
      payfastArray,
      signature,
      phonenumber,
      network,
      productsArray,
      inputProductSelectValue,
      product,
      successProductObj,
    };

    switch (step) {
      case 1:
        return (
          <CaptureNumber
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            inputNetworkChange={this.inputNetworkChange}
            inputProductChange={this.inputProductChange}
            values={values}
          />
        );
      case 2:
        return (
          <CaptureDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            // inputChange={this.inputChange}
            // placeOrder={this.placeOrder}
            values={values}
          />
        );
      case 3:
        return (
          <PlaceOrder
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            // inputChange={this.inputChange}
            // placeOrder={this.placeOrder}
            values={values}
          />
        );
      default:
        return;
    }
  }
}

export default AirtimeForm;
