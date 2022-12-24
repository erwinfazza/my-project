import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "../images/illustration-1.svg";
import Heroes from "../images/illustration-2.svg";
import "./Page.scss";
import Form from "react-bootstrap/Form";

const Home = () => {
  return (
    <>
      <Container className=" my-5 py-5">
        <Row>
          <Col md="6" className="mt-5 py-5 left">
            <h2>All your files in one scure location, accessible anywhere.</h2>
            <p className="py-3">
              Fylo store your most important files in one secure location.
              Access them whereever you need, share and collaborate with
              friends, family, and co-workers.
            </p>
            <div>
              <Form>
                <label htmlFor="email"></label>
                <input
                  className="email"
                  type="email"
                  id="email"
                  defaultValue="johnappleseed#mail.com"
                  required
                />

                <button variant="primary" type="submit" className="submit-btn">
                  Get Started
                </button>
              </Form>
            </div>
          </Col>
          <Col md="6" className="right">
            <img className="hero" src={Hero} alt="hero" />
          </Col>
        </Row>
      </Container>

      {/* section */}
      <Container>
        <Row>
          <Col md="6" className="section my-5 py-5">
            <h2>Stay productive, whereever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your storage need.
            </p>
            <p>
              securely share files and folders with friends, family, and
              collagues for live collaboration. No email attachments required!
            </p>
            <a href="#">See how Fylo works</a>
            <div className="quotes">
              <blockquote>"Fylo is an open source"</blockquote>
            </div>
          </Col>
          <Col md="6" className="section py-5 my-5">
            <img className="hero" src={Heroes} alt="heroes" />
          </Col>
        </Row>
      </Container>
      {/* section end */}
    </>
  );
};

export default Home;
