import React from "react";
import Dashboard from "./Dashboard";

const AddBlog = () => {
  return (
    <>
      <div className="container my-3">
        <h3>Add Blog</h3>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Title</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Descrption</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">author</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <form>
            <div class="form-group">
              <label for="exampleFormControlFile1">Photo</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </form>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
