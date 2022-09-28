import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg" className="shadow-sm bg-transparent">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Prepaid365
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/cancel">
                  Cancel
                </Nav.Link>
                <Nav.Link as={Link} to="/notify">
                  Notify
                </Nav.Link>
                <Nav.Link as={Link} to="/return">
                  Return
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default NavBar;
