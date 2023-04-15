import React from "react";
import {
  FaHome,
  FaRegEnvelope,
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  let linkColor = "#854dff";
  return (
    <>
      <footer
        className=" text-white pt-1"
        style={{ backgroundColor: "#061551" }}
      >
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5
                className="mb-1 font-weight-bold"
                style={{ color: linkColor }}
              >
                <strong style={{ cursor: "pointer" }}>
                  CodeArtha Technologies
                </strong>
              </h5>
              <p>
                CodeArtha offers a range of services from a startup owner to an
                established business. It comprises services like Web , mobile
                app development, that helps clients to achieve Serenity through
                Integrity and Innovation.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5
                className="mb-1 font-weifht-bold"
                style={{ color: linkColor }}
              >
                <strong>Our Service</strong>
              </h5>
              <p className="mb-1">
                <Link
                  to="/all-service"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Web Development
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/all-service"
                  className="text-white "
                  style={{ textDecoration: "none" }}
                >
                  App Development
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/all-service"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Digital Marketing
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/all-service"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  UI/UX Design
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/all-service"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  E-Commerce
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/all-service"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  DevOps
                </Link>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              {/* <h5 className="text-uppercase mb-4 font-weifht-bold text-black"> */}
              <h5
                className="mb-1 font-weifht-bold"
                style={{ color: linkColor }}
              >
                <strong>Useful Links</strong>
              </h5>
              <p className="mb-1">
                <Link
                  to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/about"
                  className="text-white "
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/project-request-form"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Cantact
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Portfolio
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Career
                </Link>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5
                className="mb-1 font-weifht-bold"
                style={{ color: linkColor }}
              >
                <strong>Contact</strong>
              </h5>
              <p>
                <i style={{ paddingRight: 4 }}>
                  <FaHome />
                </i>
                A-133 Sector 63 Noida, India
              </p>
              <p>
                <i style={{ paddingRight: 4 }}>
                  <FaRegEnvelope />
                </i>
                teamcodeartha@gmail.com
              </p>
              <p>
                <i style={{ paddingRight: 4 }}>
                  <FaPhone />
                </i>
                +91 6396978565, +91 8279611393
              </p>
            </div>
          </div>

          <hr />
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-8">
              <p>
                Copyright @{new Date().getFullYear()} All rights resererd by :{" "}
              </p>
              <p>
                <Link to="/home">
                  <i className="baseColor">CodeArtha Technologies Pvt Ltd.</i>
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-4">
              <div className="te1d-right">
                <ul
                  className="list-unstyled list-inline"
                  style={{ fontSize: "26px" }}
                >
                  <li className="list-inline-item">
                    <a
                      href="https://twitter.com/Codeartha_info/"
                      target="_blank"
                      className="btn-floating btn-sm text-white"
                      style={{ cursor: "pointer" }}
                    >
                      <i>
                        <FaTwitter />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/codeartha.info/"
                      target="_blank"
                      className="btn-floating btn-sm text-white"
                      style={{ cursor: "pointer" }}
                    >
                      <i>
                        <FaFacebook />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/codeartha/"
                      className="btn-floating btn-sm text-white"
                      style={{ cursor: "pointer" }}
                    >
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/codeartha_info/"
                      className="btn-floating btn-sm text-white"
                      style={{ cursor: "pointer" }}
                    >
                      <i>
                        <FaLinkedin />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
