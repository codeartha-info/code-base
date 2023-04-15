import React, { useRef } from "react";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import { Link, useNavigate } from "react-router-dom";

const RequestProjectForm = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ycrca4i",
        "template_r9ij2c8",
        form.current,
        "Dpj9vb8hvx8dMWg0_"
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
      <div className="container">
        <section className="mb-4">
          <section className=" about ">
            <div className="container my-5  ">
              <div className="text-center"></div>
              <div className="row my-2">
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <h2>
                    <b className="baseColor">G</b>et{" "}
                    <b className="baseColor">i</b>n{" "}
                    <b className="baseColor">T</b>ouch
                  </h2>

                  <p className=" mx-auto mb-2">
                    Have specific application or technology integration
                    requirements? Get in touch with us. We would be glad to help
                    you.
                  </p>
                  <p>
                    Our Team will respond within 24 hours. Select Service, Fill
                    Details & Submit.
                  </p>
                  <p>
                    We deliver your desired project on time. Our Friendly staff
                    will interact with you and update you daily.
                  </p>
                  <p>Grab Free Quote …</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-12 ">
                  <img
                    src={require("../image/GetInTouch.png")}
                    className="img-fluid  "
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="row">
            <div className="col-md-4 text-center ">
              <img
                src={require("../image/ContactOurTeam.png")}
                className="img-fluid  "
              />
            </div>

            <div className="col-md-8 mb-d-0 mb-5">
              <form ref={form} onSubmit={sendEmail}>
                <div class="mb-3 row">
                  <div className="col-md-6">
                    <div class="mb-0 md-form ">
                      <label for="exampleInputPassword1" class="form-label">
                        First Name
                      </label>
                      <input
                        name="fname"
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="mb-0 md-form ">
                      <label for="exampleInputPassword1" class="form-label">
                        Last Name
                      </label>
                      <input
                        name="lname"
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-3 row">
                  <div className="col-md-6">
                    <div class="mb-0 md-form ">
                      <label for="exampleInputPassword1" class="form-label">
                        Email
                      </label>
                      <input
                        name="email"
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="mb-0 md-form ">
                      <label for="exampleInputPassword1" class="form-label">
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-3 row">
                  <div className="col-md-12">
                    <div class="mb-0 md-form ">
                      <label for="exampleInputPassword1" class="form-label">
                        Write a service
                      </label>
                      <input
                        name="serviceName"
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  className="btn btn-brand ms-lg-3"
                  value="Submit "
                />
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RequestProjectForm;
