import React from "react";
import "./info.css";
// import { FontAwesomeIcon } from '@fortawesome/fontawesome'
import {
  FaLaptop,
  FaCode,
  FaCodeBranch,
  FaNetworkWired,
  FaFileExport,
  FaUserCheck,
  FaUserTag,
  FaUsersSlash,
} from "react-icons/fa";

const Information = () => {
  return (
    <>
      <section className="pt-3">
        <div className="container mt-5">
          <div className="text-center my-5">
            <h2 style={{ color: "#ff4d29" }}>About in Number</h2>
            <p>
              We belive the high quality service and good promises, have to be
              also backed up with good numbers.
            </p>
            <hr />
          </div>

          <div className="row flex-container">
            <div className="col-md-4 mb-d-0 mb-5">
              <div class="card border-0">
                <div class="card-body  text-center">
                  <i style={{ fontSize: 40, color: "#fe4d29" }}>
                    <FaUsersSlash />
                  </i>
                  <h2>02</h2>
                  <p class="card-text" style={{ fontWeight: 900 }}>
                    Industry Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-d-0 mb-5">
              <div class="card border-0">
                <div class="card-body  text-center">
                  <i style={{ fontSize: 40, color: "#fe4d29" }}>
                    <FaUserTag />
                  </i>
                  <h2>02</h2>
                  <p class="card-text" style={{ fontWeight: 900 }}>
                    Safe & Secured Clients
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-d-0 mb-5">
              <div class="card border-0">
                <div class="card-body  text-center">
                  <i style={{ fontSize: 40, color: "#fe4d29" }}>
                    <FaUserCheck />
                  </i>
                  <h2>01</h2>
                  <p class="card-text" style={{ fontWeight: 900 }}>
                    Deliverd Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
