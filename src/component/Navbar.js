import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import emailjs from "emailjs-com";
import "boxicons";
import "../index.css";
import { Chat } from "./Chat";

function Navbar() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ggr9lxz",
        "template_ujha52k",
        form.current,
        "M0W0hG8yy-l0DRPBD"
      )
      .then(
        (result) => {
          console.log(
            "Your message have been sent. ",
            result.status,
            result.text
          );
          navigate("/");
        },
        (error) => {
          console.log("Please try again!", error.text);
        }
      );
  };

  return (
    <>
      <Chat />
      <nav className="top-nav" id="home">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              <p className="icons">
                <i>
                  <box-icon
                    type="solid"
                    name="envelope"
                    className="icon"
                  ></box-icon>
                </i>
                <span>codearthamail@gmail.com</span>
              </p>
              <p>
                <i>
                  <box-icon
                    name="phone-call"
                    type="solid"
                    className="icon"
                  ></box-icon>
                </i>
                <span>+91 9634139574 &nbsp; +91 7351500899</span>
              </p>
            </div>
            <div className="col-auto">
              <div className="social-links">
                <a href="/">
                  <i>
                    <box-icon name="facebook" type="logo"></box-icon>
                  </i>
                  <i>
                    {" "}
                    <box-icon name="twitter" type="logo"></box-icon>
                  </i>
                  <i>
                    {" "}
                    <box-icon name="linkedin" type="logo"></box-icon>
                  </i>
                  <i>
                    <box-icon name="instagram" type="logo"></box-icon>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h2>
              <b style={{ color: "#FE4D29" }}>C</b>ode
              <b style={{ color: "#FE4D29" }}>A</b>rth
              <b style={{ color: "#FE4D29" }}>a</b>
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  <strong> Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/all-service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link to="/project-request-form" className="btn btn-brand ms-lg-3">
              Contact our Team
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
