import React from "react";
import {
  FaHome,
  FaRegEnvelope,
  FaPhone,
  FaUncharted,
  FaPrint,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer
        className=" text-white pt-3 pb-4"
        style={{ backgroundColor: "#ff4d29" }}
      >
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="mb-4 font-weight-bold text-black">
                <strong>CodeArtha</strong>
              </h5>
              <p>
                CodeArtha offers a range of services from a startup owner to an
                established business. It comprises services like Web , mobile
                app development, that helps clients to achieve Serenity through
                Integrity and Innovation.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weifht-bold text-black">
                <strong>Service</strong>
              </h5>
              <p>
                <Link
                  to="/all-service"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Web Development
                </Link>
              </p>
              <p>
                <Link
                  to="/all-service"
                  className="text-white "
                  style={{ textDecoration: "none" }}
                >
                  App Development
                </Link>
              </p>
              <p>
                <Link
                  to="/all-service"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Digital Marketing
                </Link>
              </p>
              <p>
                <Link
                  to="/all-service"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  UI/UX Design
                </Link>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weifht-bold text-black">
                <strong>Use Ful links</strong>
              </h5>
              <p>
                <Link
                  to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  to="/about"
                  className="text-white "
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </p>
              <p>
                <Link
                  to="/project-request-form"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Cantact
                </Link>
              </p>
              <p>
                <Link
                  to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Portfilo
                </Link>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weifht-bold text-black">
                <strong>Contach</strong>
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
                codearthamail@gmail.com
              </p>
              <p>
                <i style={{ paddingRight: 4 }}>
                  <FaPhone />
                </i>
                +91 9634139574 +91 7351500899
              </p>
            </div>
          </div>

          <hr />
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-8">
              <p>Copyright @2022 All rights resererd by : </p>
              <Link to="/home" style={{ cursor: "pointer" }}>
                <strong className="text-warning">
                  CodeArtha technologies pvt. ltd.{" "}
                </strong>
              </Link>
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
