import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export class CaptureNumber extends Component {
  state = {
    network: [
      { id: 1, network: "Cell C" },
      { id: 2, network: "MTN" },
      { id: 3, network: "Vodacom" },
    ],
    // network: [ 'Cell C', 'MTN', 'Vodacom' ]
  };

  continue = (e) => {
    e.preventDefault();
    // const { phonenumber, network } = this.props.values;

    // if (isNaN(phonenumber) || phonenumber === '') {
    // 	console.log('Error: choose proper phonenumber');
    // 	return false;
    // }

    // if (network === '') {
    // 	console.log('Error: choose a valid network');
    // 	return false;
    // }
    // console.log(this.props.values);
    this.props.nextStep();
  };

  renderNetworkOptions() {
    return (
      this.state.network &&
      this.state.network.length > 0 &&
      this.state.network.map((net, index) => {
        return (
          <option
            key={index}
            value={net.network.replace(" ", "").toLowerCase()}
          >
            {net.network}
          </option>
        );
      })
    );
  }

  renderProductOptions() {
    const { productsArray } = this.props.values;
    return (
      productsArray &&
      productsArray.length > 0 &&
      productsArray.map((productItem, index) => {
        // console.log(productItem);
        return (
          <option
            key={index}
            value={`${productItem.description}_${productItem.sellprice}_${productItem.network}_${productItem.groupname}`}
          >
            {`${productItem.description} - R${productItem.sellprice} - ${productItem.groupname}`}
          </option>
        );
      })
    );
  }

  render() {
    const { values, inputChange, inputNetworkChange, inputProductChange } =
      this.props;
    // const productId = `${JSON.stringify(values.product.network)}_${JSON.stringify(values.product.sellvalue)}`;
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phonenumber"
              onChange={inputChange("phonenumber")}
              value={values.phonenumber}
              type="text"
              placeholder="Number..."
            />
            {/* <Form.Text className="text-muted">We'll never share your number with anyone else.</Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNetwork">
            <Form.Label>Network</Form.Label>
            <Form.Control
              as="select"
              name="network"
              // onChange={inputChange('network')}
              onChange={inputNetworkChange("network")}
              value={values.network}
            >
              <option value="0">-- select network --</option>
              {this.renderNetworkOptions()}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicProduct">
            <Form.Label>Products</Form.Label>
            <Form.Control
              as="select"
              name="product"
              // onChange={inputChange('product')}
              onChange={inputProductChange("product")}
              value={values.inputProductSelectValue}
            >
              <option value="">-- select option --</option>
              {this.renderProductOptions()}
            </Form.Control>
          </Form.Group>

          {/* <Button variant="primary" type="submit"> */}
          <Button variant="primary" onClick={this.continue}>
            Continue
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default CaptureNumber;
