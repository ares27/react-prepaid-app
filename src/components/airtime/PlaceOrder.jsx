import React, { Component } from "react";
import crypto from "crypto";

class PlaceOrder extends Component {
  state = {};

  continue = (e) => {
    e.preventDefault();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  generateSignature = (data, passPhrase = null) => {
    // Create parameter string
    let pfOutput = "";
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] !== "") {
          pfOutput += `${key}=${encodeURIComponent(data[key].trim()).replace(
            /%20/g,
            "+"
          )}&`;
        }
      }
    }
    // console.log("pfOutput: ", pfOutput);

    // Remove last ampersand
    let getString = pfOutput.slice(0, -1);
    if (passPhrase !== null) {
      getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(
        /%20/g,
        "+"
      )}`;
    }
    // console.log("getString: ", getString);
    // console.log(crypto.createHash("md5").update(getString).digest("hex"));

    return crypto.createHash("md5").update(getString).digest("hex");
  };

  generatePayNowForm = () => {
    // const { values: { payfastdetails } } = this.props;
    // const { merchant_id, merchant_key, amount, item_name } = payfastdetails;

    const myData = [];
    // Merchant details
    myData["merchant_id"] = "10000100";
    myData["merchant_key"] = "46f0cd694581a";
    myData["return_url"] = "https://bc0e30adf105.ngrok.io/return";
    myData["cancel_url"] = "https://bc0e30adf105.ngrok.io/cancel";
    myData["notify_url"] = "https://bc0e30adf105.ngrok.io/notify";
    // Buyer details
    // myData["name_first"] = "First Name";
    // myData["name_last"] = "Last Name";
    // myData["email_address"] = "sbtu01@payfast.co.za";

    // Transaction details
    // myData["m_payment_id"] = "1234";
    myData["amount"] = "100";
    myData["item_name"] = "airtime";
    // myData["signature"] = this.generateSignature(myData);
    // console.log({ myData: myData })

    // let htmlForm = `<form action="https://sandbox.payfast.co.za/eng/process" method="post">`;
    // for (let key in myData) {
    // 	if(myData.hasOwnProperty(key)){
    // 		let value = myData[key];
    // 		if (value !== "") {
    // 		htmlForm +=`<input name="${key}" type="" value="${value.trim()}" />`;
    // 		}
    // 	}
    // }

    // return (
    // 	myData &&
    // 	myData.length > 0 &&
    // 	myData.map((item, index) => {
    // 		console.log(item[u])
    // 		return (
    // 			<p> awe </p>
    // 		);
    // 	})
    // )

    // let str = `merchant_id=${payfastArray[0]}&merchant_key=${payfastArray[1]}&amount=${payfastArray[2]}&item_name=${payfastArray[3]}`
    // payfastArray[7] = this.makeSignature(str);
    // console.log('payfastArray:', payfastArray);

    // return (
    // 	payfastArray &&
    // 	payfastArray.length > 0 &&
    // 	payfastArray.map((item, index) => {
    // 		return (
    // 			<form action="https://sandbox.payfast.co.za/eng/process" method="post">
    // 				<input key={index} name={item} value={item} />
    // 			</form>
    // 		);
    // 	})
    // )

    // return (
    // 	payfastArray &&
    // 	payfastArray.length > 0 &&
    // 	payfastArray.map((item, index) => {
    // 		return (
    // 			<p> {item} </p>
    // 		);
    // 	})
    // )

    return (
      <form action="https://sandbox.payfast.co.za/eng/process" method="post">
        <input type="hidden" name="merchant_id" value={myData["merchant_id"]} />
        <input
          type="hidden"
          name="merchant_key"
          value={myData["merchant_key"]}
        />
        <input type="hidden" name="return_url" value={myData["return_url"]} />
        <input type="hidden" name="cancel_url" value={myData["cancel_url"]} />
        <input type="hidden" name="notify_url" value={myData["notify_url"]} />
        <input type="hidden" name="amount" value={myData["amount"]} />
        <input type="hidden" name="item_name" value={myData["item_name"]} />
        {/* <input type="hidden" name="signature" value={myData["signature"]} /> */}
        <input
          type="hidden"
          name="signature"
          value={this.generateSignature(myData)}
        />
        {/* <input type="hidden" name="signature" value={this.generateSignature()} /> */}
        <input type="submit" value="PAY NOW" />
      </form>
    );
  };

  render() {
    // const { network, sellvalue, pin } = this.props.values.successProductObj;
    // const { values: { payfastdetails } } = this.props;
    // const { generateSignature } = this.props;

    return (
      <React.Fragment>
        <h1>Place Order!</h1>
        {/* <p>Network: {network}</p>
				<p>Aitimer Voucher: R{sellvalue}</p>
				<p>Pin: {pin}</p> */}
        {this.generatePayNowForm()}
        <button onClick={this.back}></button>
      </React.Fragment>
    );
  }
}

export default PlaceOrder;
