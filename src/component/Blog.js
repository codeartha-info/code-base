import axios from "axios";
import React, { useState, useEffect } from "react";
import AllBlog from "./admin/AllBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState();
  const fetchHandler = async () => {
    return await axios
      .get("http://localhost:4000/blog")
      .then((res) => res.data);
  };
  fetchHandler();

  useEffect(() => {
    fetchHandler().then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  return (
    <>
      <ul>
        {blogs &&
          blogs.map((blog, id) => <div key={id}>n{/* <AllBlog /> */}</div>)}
      </ul>

      {/* <div className="container">
        <div className="text-center my-5">
          <h1 style={{ color: "#ff4d29" }}>Our Blog</h1>
          <hr />
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-5 shadow-sm">
              <img
                src={require("../image/project3.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{blogs.title}</h5>
                <p class="card-text">
                  It is a catch-all term for the work that goes into building a
                  website. This includes everything from markup and coding to
                  scripting, network configuration, and CMS development.
                </p>
                <a href="#" class="btn btn-brand ms-lg-3">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-5 shadow-sm">
              <img
                src={require("../image/project2.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Why is web development important?</h5>
                <p class="card-text">
                  In fact, it’s become a portal and primary method of research,
                  connection, education, and entertainment in the world. As of
                  2021, there were 4.66 billion global Internet users — more
                  than half the world’s population.
                </p>
                <a href="#" class="btn btn-brand ms-lg-3">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-5 shadow-sm">
              <img
                src={require("../image/project1.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Why need App Development?</h5>
                <p class="card-text">
                  Mobile apps permit the users to have functional access to
                  products, information, process, and services that they would
                  demand in real-time.Some quick example text to build on the
                  card title and make up the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-brand ms-lg-3">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Blog;
