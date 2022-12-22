import React, { useRef } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import { Link, useNavigate } from "react-router-dom";
export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ggr9lxz",
        "template_4f094tj",
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
      <div className="container">
        <section className="mb-4">
          <section className=" about ">
            <div className="container my-5  ">
              <div className="text-center"></div>
              <div className="row my-2">
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <h2>
                    <b style={{ color: "#ff4d29" }}>G</b>et{" "}
                    <b style={{ color: "#ff4d29" }}>i</b>n{" "}
                    <b style={{ color: "#ff4d29" }}>T</b>ouch
                  </h2>

                  <p>
                    <p className=" mx-auto mb-5">
                      Have specific application or technology integration
                      requirements? Get in touch with us. We would be glad to
                      help you.
                    </p>
                  </p>
                  <Link to="/project-request-form" className="btn btn-brand">
                    Contact our Team{" "}
                  </Link>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-12 ">
                  <img
                    src={require("../image/contact.png")}
                    className="img-fluid  "
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="row">
            <div className="col-md-9 mb-d-0 mb-5">
              <form ref={form} onSubmit={sendEmail}>
                <div class="mb-3 row">
                  <div className="col-md-6">
                    <div class="mb-0 md-form ">
                      <label for="exampleInputPassword1" class="form-label">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="mb-0 md-form ">
                      <label
                        for="exampleInputPassword1"
                        name="email"
                        class="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </div>
                </div>

                <div className="row ">
                  <div className="mb-3 col-md-12">
                    <div class="mb-0 md-form ">
                      <label for="exampleInputPassword1" class="form-label">
                        Phone No.
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

                <div className="row ">
                  <div className="mb-3 col-md-12">
                    <div class="mb-0 md-form ">
                      <label for="exampleInputPassword1" class="form-label">
                        Comments & Reply
                      </label>
                      <input
                        name="comments"
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

            <div className="col-md-3 text-center ">
              <ul className="list-unstyled mt-3 mb-0 ">
                <li>
                  <i
                    className="mt-4"
                    style={{ fontSize: 26, color: "#ff4d29" }}
                  >
                    <FaEnvelope />
                  </i>
                </li>
                <p className="text-dark">codearthamail@gmail.com</p>
                <li>
                  <i className="" style={{ fontSize: 26, color: "#ff4d29" }}>
                    <FaMapMarkerAlt />
                  </i>
                </li>
                <p className="text-dark">A-133 Sector 63 Noida, India </p>

                <li>
                  <i
                    className="mt-4"
                    style={{ fontSize: 26, color: "#ff4d29" }}
                  >
                    <FaPhone />
                  </i>
                </li>
                <p className="text-dark">
                  +91 9634139574 <br /> +91 7351500899
                </p>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
