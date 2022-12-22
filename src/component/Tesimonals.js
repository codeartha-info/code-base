import React from "react";
import "../service.css";
// this page css in written the services.css file

const Tesimonals = () => {
  return (
    <section
      className="testimonals  mt-4 p-5  text-black rounded"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="container ">
        <p className="text-center"></p>
        <div className="row ">
          <div className="col-md-6  text-center">
            <div className="profile">
              <img
                src={require("../image/team_1.jpg")}
                className="user"
                alt=""
              />
              <blockquote>
                I have been working with <b>ShadowX</b> quite briefly on my
                personal Startup. I really enjoyed working with <b>ShadowX</b>{" "}
                team and more I'm looking into the content they have created
                more I'm sure it was money well spent. What I was also was happy
                about was timing. We managed to finish the whole project way
                before the deadline. I would recommend <b>ShadowX</b>'s team for
                a content creation task to my friend.
              </blockquote>
              <h3 style={{ paddingBottom: 10 }}>
                Shubham Sharma<span style={{ padding: 4 }}>CEO & Founder</span>
              </h3>
            </div>
          </div>
          <div className="col-md-6  text-center">
            <div className="profile">
              <img
                src={require("../image/team_2.jpg")}
                className="user"
                alt=""
              />

              <blockquote>
                I have been working with <b>ShadowX</b> quite briefly on my
                personal Startup. Their quality of work, professionalism,
                knowledge, and follow through has impressed me from day one. Our
                developer is very responsive and quick to address questions. Our
                projects can be complex and involve construction of a
                significant online platforms that <b>ShadowX</b> are very
                capable of developing. This provider is patient, adaptable, and
                very competent; I would highly recommend Brickwork.
              </blockquote>
              <h3 style={{ paddingBottom: 10 }}>
                Raman Sharma
                <span style={{ padding: 4 }}>Co-Founder</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tesimonals;
