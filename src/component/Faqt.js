import React from "react";
import { Link } from "react-router-dom";
import "../service.css";

const Faqt = () => {
  return (
    <>
      <section style={{ backgroundColor: "#efefef" }} className="pt-3">
        <div className="container mt-5">
          <div className="row flex-container">
            <div className="col-md-6 mb-d-0 mb-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#FE4D29" }}>
                    -FAQ
                  </h5>
                  <p class="card-text display-5" style={{ fontWeight: 900 }}>
                    Some comman FaQuestion and answer{" "}
                  </p>
                  <a href="#" class="btn btn-brand ms-lg-3">
                    View All
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-d-0 mb-5">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How much does a website cost ?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        Generally, We offer Static, Dynamic websites and
                        application. Our Website projects starts in the INR
                        9,999/- . Based upon your requirements cost will differ.
                        Our Team members will explain you all the details.
                        Request a free quote now to talk to our experts.
                        <Link
                          to="/project-request-form"
                          className="btn btn-brand ms-lg my-3"
                        >
                          Contact our Team
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="circle-icon">
                        {/* <i><FaQuestion/></i> */}
                        Consultancy is Free ?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        Yes, Consultancy Service is completely free. You can
                        call us any time to talk us. We are ready to hear from
                        you.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Websites SEO Friendly ?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        Yes, Websites SEO Friendly because You've probably been
                        optimizing homepages as long as you've been doing
                        keyword research.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqt;
