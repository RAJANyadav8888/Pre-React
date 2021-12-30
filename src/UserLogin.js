import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default class UserLogin extends Component {
  render() {
    return (
      <>
        <div class="user-login">
          <h1 id="ragistration-color"> User Login</h1>
          <form>
            <div class="mb-3">
              <label
                for="exampleInputEmail1"
                class="form-label"
                id="ragistration-color"
              >
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
              <label
                for="exampleInputPassword1"
                class="form-label"
                id="ragistration-color"
              >
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="./forgotpassword">
              <label> forgot password ?</label>
            </Link>
          </form>
        </div>
      </>
    );
  }
}
