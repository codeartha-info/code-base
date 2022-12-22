import React from "react";

function About() {
  return (
    <>
      <section className=" about ">
        <div className="container my-5  ">
          <div className="text-center"></div>
          <div className="row my-2">
            <div className="col-sm-12 col-md-6 col-lg-6 col-12">
              <h1>
                What do you <i style={{ color: "#FE4D29" }}> want to know?</i>
              </h1>
              <p className="p-2 lead">
                <b className="text-dark">ShadowX</b> Technologies India Private
                is a global technology services division of{" "}
                <b className="text-dark">ShadowX</b> Service Coporation. We are
                a leading provider of information technology service and
                Solution worldwide. <b className="text-dark">ShadowX</b> founded
                by 8 September 2022 and is headquarterd at Noida.{" "}
                <b className="text-dark">ShadowX</b> provide information
                technology engineering service across worldwide.
              </p>
              <button type="button" class="btn btn-light ">
                More about me
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-12 ">
              <img
                src={require("../image/about.png")}
                className="img-fluid  "
              />
            </div>
          </div>
        </div>

        <div className="container my-5  ">
          <div className="row ">
            <div className="col-md-6  ">
              <h4>
                <b style={{ color: "#ff4d29" }}>O</b>ur{" "}
                <b style={{ color: "#ff4d29" }}>V</b>ision
              </h4>
              <div className="">
                <p>
                  It is to be Global network partner and the first choice for
                  our customer/client by providing leadership in specific
                  domains to help our client accelerate the value creation
                  process.
                </p>
              </div>
            </div>
            <div className="col-md-6 ">
              <h4>
                <b style={{ color: "#ff4d29" }}>O</b>ur{" "}
                <b style={{ color: "#ff4d29" }}>M</b>ission
              </h4>
              <div className="">
                <p>
                  It is to create a nichey's by offering cutting-edge integrated
                  service across Technologies empowered by innovation, best in
                  class process and best of breed technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div class="accordion my-2" id="accordionExample">
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
                  Why do you need a website?
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
                    The primary and secondary business goals your client wants
                    to achieve. It can be anything from boosting brand awareness
                    to driving customer engagement, and accordingly, sales;
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
                  Who is your target audience?
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
                    Demographics: customers' location, age, gender, preferred
                    device for online searching/browsing, etc.
                  </p>
                  <p>
                    Psychographics: customers' values, buyer personas, hobbies
                    and interests, lifestyle, and online behavior.
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
                  What is the budget for this project?
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
                    After your client offers you all of the answers you need
                    through the web design questionnaire, you will have a better
                    idea of the project's costs. However, it would help if you
                    asked all of your clients about their budget, as it might
                    influence the tools, features, widgets, and integrations you
                    will add to their website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-3">
          {/* <p>
            I am an expert freelancer and my working ground is based on Software
            Development (Mobile Application And Website Development ) . I can do
            anything that is related to my job. Also I have a handful
            experiences on this ground as I have been roaming here for around 3
            long years. I am acquainted enough with the skills that your job
            demands. Also, I have a bachelor’s And master degree on Software
            Engineering from the reputed university of SRK Bhopal . So I have
            gained all the basic knowledge from my experiences. That’s why I
            knew many works related to web and app programming before entering
            this business. Along with these, I am adept enough in Web
            Application and Mobile Application technique . My skills in coding
            and programming languages are given below: 1 - Expert in using PHP,
            Laravel , Node Js , React Native , javascript , Jquery 2 - Also
            experienced With React Js , HTML , CSS 3 - Deep knowledge of SEO and
            familiar with Google analytics , Facebook pixel. 4 - Expert In
            Payment Gateway Such as Paypal , Stripe , Master ,PayUMoney ,
            Razorpay , Paytm , Knet And many more . 5 - Working Knowledge Of
            Cloud Services Such As AWS , google Cloud , MS azure , Blue Ocean ,
            IBM etc. Client's Satisfaction -: 1 - Making plans and arranging all
            the meetings according to the schedule 2 - Analyzing every piece of
            data 3 - Working hard for the Best Result For My Clients I have
            always satisfied my past clients with my work. That’s why all of
            them gave me a five-star rating which of course is a huge
            achievement for me. They also recommended me for web and app
            programming projects. I always meet deadlines. Never hesitate to
            make the best use of my skill and knowledge in order to complete a
            project successfully. Thank you.
          </p> */}
        </div>
      </section>
    </>
  );
}

export default About;
