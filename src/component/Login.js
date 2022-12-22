import React from "react";
import { Link } from "react-router-dom";

function Login() {
  //   const [first, setfirst] = useState(second);
  return (
    <>
      <div className="container my-5">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter userNAme"
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your password with anyone else.
            </small>
          </div>

          <button type="submit" class="btn btn-brand ">
            Login
          </button>
          <Link to="/admin/signup" className="btn btn-light ms-lg-3">
            Create Account
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
