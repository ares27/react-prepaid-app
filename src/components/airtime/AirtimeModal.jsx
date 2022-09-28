import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import AirtimeForm from "./AirtimeForm";

class AirtimeModal extends Component {
  state = {
    show: false,
  };

  handleModal = () => {
    console.log("handleModal");
    // this.setState({ show: true });
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={() => this.handleModal()}>OPEN</Button>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          {/* this.state.show */}
          <Modal.Header closeButton>Prepaid Airtime</Modal.Header>
          <Modal.Body>
            <AirtimeForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AirtimeModal;
