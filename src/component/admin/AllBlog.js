import axios from "axios";
import React, { useState, useEffect } from "react";

const AllBlog = () => {
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
          blogs.map((blog, i) => (
            <div key={i}>
              <li>blog</li>
            </div>
          ))}
      </ul>
    </>
  );
};

export default AllBlog;
