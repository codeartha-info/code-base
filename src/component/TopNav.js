import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function TopNav() {
  return (
    <div>
      <nav className="top-nav" id="home">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto" style={{ color: "red" }}>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm text-white">
                  <i>
                    <FaEnvelope />
                  </i>
                </a>
                <i className="btn-floating btn-sm text-white m-2">
                  codearthamail@gmail.com
                </i>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm text-white">
                  <i>
                    <FaPhoneAlt />
                  </i>
                </a>
                <i className="btn-floating btn-sm text-white m-2">
                  +91 6396978565, +91 8279611393
                </i>
              </li>
            </div>
            <div className="col-auto">
              <div className="social-links">
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/Codeartha_info/"
                    target="_blank"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "18px" }}
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
                    style={{ fontSize: "18px" }}
                  >
                    <i>
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/codeartha_info/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "18px" }}
                  >
                    <i>
                      <FaLinkedin />
                    </i>
                  </a>
                </li>
                <a
                  href="https://www.instagram.com/codeartha/"
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: "18px" }}
                >
                  <i>
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNav;
