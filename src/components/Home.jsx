import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import AirtimeModal from "./airtime/AirtimeModal";
import { FaReact, FaPhoneSquareAlt } from "react-icons/fa";

const Home = () => {
  //   const containerStyle = {
  //     border: "1px solid red",
  //     marginTop: "10px",
  //   };

  return (
    <React.Fragment>
      <div className="bg-dark py-5">
        <Container className="px-5">
          <Row className="gx-5 justify-content-center">
            <Col className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Present your business in a whole new way
                </h1>
                <p className="lead text-white-50 mb-4">
                  Prepaid solutions at your finger tips. With just a few clicks
                  you can tap into prepaid services. Keep the lights on, keep
                  your communication up with others...
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-3 m-2"
                    href="#features"
                  >
                    Get Started
                  </a>
                  <a
                    className="btn btn-outline-light btn-lg px-4 m-2"
                    href="#!"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="py-5 border-bottom" id="features">
        <Container className="px-5 my-5">
          <Row className="gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="feature rounded-3 mb-3">
                <FaPhoneSquareAlt color="lightblue" size="3rem" />
              </div>
              <h2 className="h4 fw-bolder">Airtime</h2>
              <p>
                Get prepaid airtime anytime from anywhere in the world. Send
                prepaid airtime to someone. Always be on the move while we help
                you get things done.
              </p>
              <AirtimeModal />
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="feature rounded-3 mb-3">
                <i className="bi bi-building"></i>
                <FaReact color="grey" size="3rem" />
              </div>
              <h2 className="h4 fw-bolder">Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              {/* <a className="text-decoration-none" href="#!">
                Call to action
                <i className="bi bi-arrow-right"></i>
              </a> */}
              <Button variant="light" disabled>
                OPEN
              </Button>
            </div>
            <div className="col-lg-4">
              <div className="feature rounded-3 mb-3">
                {/* <i className="bi bi-toggles2"></i> */}
                <FaReact color="grey" size="3rem" />
              </div>
              <h2 className="h4 fw-bolder">Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              {/* <a className="text-decoration-none" href="#!">
                Call to action
                <i className="bi bi-arrow-right"></i>
              </a> */}
              <Button variant="light" disabled>
                OPEN
              </Button>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Home;
