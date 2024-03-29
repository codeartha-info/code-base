import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import emailjs from "emailjs-com";
import "boxicons";
import "../CSS/navbar.css";
import { Chat } from "./Chat";
import TopNav from "./TopNav";

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

  let baseColor = "#854dff";

  return (
    <>
      <Chat />
      <TopNav />
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link to="/">
            <h2 className="navbar-brand">
              <b style={{ color: baseColor }}>C</b>ode
              <b style={{ color: baseColor }}>A</b>rth
              <b style={{ color: baseColor }}>a</b>
            </h2>
            <p className="slogan">We try our best Elegent & Unique</p>
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
