import React from "react";
import "../CSS/home.css";
import { FaUserCheck, FaUserTag, FaIndustry } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";

const Information = () => {
  return (
    <>
      <section className="pt-2 bgColor">
        <div className="container mt-5">
          <div className="text-center">
            <h2 className="baseColor">We are proud of our Work</h2>
            <p>
              We belive the high quality service and good promises, have to be
              also backed up with good numbers.
            </p>
          </div>

          <div className="row flex-container">
            <div className="col-md-3 mb-d-0">
              <div class="card border-0 bgColor">
                <div class="card-body  text-center">
                  <i className="numberOfWork">
                    <FaIndustry />
                  </i>
                  <h2>02+</h2>
                  <p class="card-text" style={{ fontWeight: 900 }}>
                    Year of customer focus service
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-d-0 mb-5">
              <div class="card border-0 bgColor">
                <div class="card-body  text-center">
                  <i className="numberOfWork">
                    <FaUserTag />
                  </i>
                  <h2>02</h2>
                  <p class="card-text" style={{ fontWeight: 900 }}>
                    Safe & Secured Clients
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-d-0 mb-5">
              <div class="card border-0 bgColor">
                <div class="card-body  text-center">
                  <i className="numberOfWork">
                    <MdAccountBalance />
                  </i>
                  <h2>03+</h2>
                  <p class="card-text" style={{ fontWeight: 900 }}>
                    Countries we have happy Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-d-0 mb-5">
              <div class="card border-0 bgColor">
                <div class="card-body  text-center">
                  <i className="numberOfWork">
                    <FaUserCheck />
                  </i>
                  <h2>02+</h2>
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
