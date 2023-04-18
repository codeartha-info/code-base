import React from "react";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Faqt from "./Faqt";
import Footer from "./Footer";
import Service from "./Service";
import Information from "./Information";
import { Link } from "react-router-dom";

export default function Home() {
  let baseColor = "#854dff";

  return (
    <>
      <div className="slider-wrapper">
        <div className="slide min-vh-100 bg-cover d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h6 className="text-uppercase text-white">
                  We craft digital experience
                  <p>Develop your Ideas into reality</p>
                </h6>
                <h1 className="display-2 my-3 baseColor ">
                  Web & Mobile
                  <br /> App Development
                </h1>
                <Link to="/project-request-form" className="btn btn-brand">
                  Get Started{" "}
                </Link>
                <Link to="" className="btn btn-outline-light ms-md-3">
                  Our Work{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Service />
      <Information />
      {/* <Tesimonals /> */}
      <Blog />
      <Contact />
      <Faqt />
      <Footer />
    </>
  );
}
