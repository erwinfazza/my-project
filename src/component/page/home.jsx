import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "../images/illustration-1.svg";
import Heroes from "../images/illustration-2.svg";
import Avatar from "../images/avatar-testimonial.jpg";
import "./Page.scss";
import Form from "react-bootstrap/Form";
import Logo from "../images/logo.svg";
import Phone from "../images/icon-phone.svg";
import Mail from "../images/icon-email.svg";
import Arrow from "../images/icon-arrow.svg";
import Qoutes from "../images/icon-quotes.svg";

const Home = () => {
  return (
    <>
      <Container className=" my-5 py-5">
        <Row>
          <Col md="6" className="mt-md-5 py-5 left">
            <h2>All your files in one scure location, accessible anywhere.</h2>
            <p className="py-3">
              Fylo store your most important files in one secure location.
              Access them whereever you need, share and collaborate with
              friends, family, and co-workers.
            </p>
            <div>
              <Form className="log-up">
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

      {/* section1 */}
      <Container>
        <Row>
          <Col md="6" className="section one my-md-5 py-md-5">
            <h2>Stay productive, whereever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your storage need.
            </p>
            <p>
              securely share files and folders with friends, family, and
              collagues for live collaboration. No email attachments required!
            </p>
            <a href="#">
              See how Fylo works
              <img src={Arrow} alt="" className="smal mx-2" />
            </a>
            <div className="quotes my-5">
              <img src={Qoutes} alt="Quotsa" />
              <blockquote>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine
              </blockquote>
              <div className="avatar">
                <img src={Avatar} alt="avatar" />
                <div className="id">
                  <strong>Kyle Burton</strong>
                  <p>Founder and CEO Huddle</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6" className="section two py-md-5 my-md-5">
            <img className="hero" src={Heroes} alt="heroes" />
          </Col>
        </Row>
      </Container>
      {/* section1 end */}

      {/* section2 */}
      <div className="section-2 py-5 ">
        <Container>
          <Row>
            <Col md="5" className="my-3">
              <h2>Get early access today</h2>
              <p>
                It only take a minutes to sign up and our free tier is extremely
                generous. If you have any question, our support would be happy
                to help you.
              </p>
            </Col>
            <Col md="5" className="offset-md-2 log-btn my-3">
              <div className="log-btn">
                <Form>
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      className="email"
                      type="email"
                      id="email"
                      defaultValue="johnappleseed#mail.com"
                      required
                    />
                  </div>
                  <div>
                    <button
                      variant="primary"
                      type="submit"
                      className="submit-btn"
                    >
                      Get Started
                    </button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* section2 end */}

      {/* footer */}
      <footer className="py-5 ">
        <Container>
          <Row>
            <Col md="4 " className="py-4">
              <img src={Logo} stroke="white" className="foot-logo" alt="logo" />
              <p>
                <img src={Phone} alt="" />
                <span className="mx-3"> Phone: +1-543-123-4567</span>
              </p>
              <p>
                <img src={Mail} alt="email" />
                <span className="mx-3">example@fylo.com</span>{" "}
              </p>
            </Col>
            <Col md="2" className="py-5">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </Col>
            <Col md="2" className="py-5">
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Term</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </Col>
            <Col md="4" className="py-5">
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* footer end  */}
    </>
  );
};

export default Home;
