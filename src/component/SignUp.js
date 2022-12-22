import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const signupAdmin = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:4000/admin/signup", {
      method: "post",
      body: JSON.stringify({ name, email, username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };

  return (
    <>
      <div className="container my-5">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Enter your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputEmail1">Enter your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email address"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputEmail1">Enter User Name</label>
            <input
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your password with anyone else.
            </small>
          </div>

          <button onClick={() => signupAdmin()} class="btn btn-brand ">
            SignUp
          </button>

          <Link to="/admin/login" className="btn btn-light ms-lg-3">
            Already have an account
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
