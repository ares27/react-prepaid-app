import React, { Component } from "react";
import axios from "axios";
import crypto from "crypto";
// import dns from "dns";

class NotifyPage extends Component {
  state = {};

  postData = async () => {
    const placeOrderRequest = await axios.post(`http://localhost:3099/`, {
      merchant_id: "10000100",
      merchant_key: "46f0cd694581a",
      amount_gross: 100,
      item_name: "airtime",
      signature: "ba7950c86c30416e38a3b1c8b8ec7e16",
    });
    console.log(placeOrderRequest.data);
  };

  returnPFData = () => {
    let pfData = [];
    pfData["merchant_id"] = "10000100";
    pfData["merchant_key"] = "46f0cd694581a";
    pfData["amount_gross"] = 100;
    pfData["item_name"] = "airtime";
    pfData["signature"] = "ba7950c86c30416e38a3b1c8b8ec7e16";

    let pfParamString = "";
    for (let key in pfData) {
      // console.log(key);
      if (pfData.hasOwnProperty(key) && key !== "signature") {
        // console.log(pfData[key]);
        // pfParamString += `${key}=${encodeURIComponent(pfData[key].trim()).replace(/%20/g, "+")}&`;
        pfParamString += `${key}=${encodeURIComponent(pfData[key]).replace(
          /%20/g,
          "+"
        )}&`;
      }
    }

    pfParamString = pfParamString.slice(0, -1);
    // console.log(pfParamString);
    // console.log(pfData);

    const ch1 = this.pfValidSignature(pfData, pfParamString, null);
    console.log(ch1);
    return ch1;
    // return pfData.map((item, i) => {
    //   console.log(`<li key=${i}>${item}</li>`);
    //   return <li key={i}>{item}</li>;
    // });
  };

  pfValidSignature = (pfData, pfParamString, pfPassphrase = null) => {
    // Calculate security signature
    // let tempParamString = "";
    if (pfPassphrase !== null) {
      pfParamString += `&passphrase=${encodeURIComponent(
        pfPassphrase.trim()
      ).replace(/%20/g, "+")}`;
    }

    const signature = crypto
      .createHash("md5")
      .update(pfParamString)
      .digest("hex");
    return pfData["signature"] === signature;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Notify!</h1>
        <ul>{this.returnPFData()}</ul>
      </React.Fragment>
    );
  }
}

export default NotifyPage;
