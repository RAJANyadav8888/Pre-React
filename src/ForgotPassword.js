import { Component } from "react";
import Navbar from "./Navbar";

export default class ForgotPassword extends Component {
  render() {
    return (
      <>
        <div class="admin-login">
          <h2 id="ragistration-color"> Reset your password </h2>
          <br />
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
                placeholder="Enter your valid email"
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
                placeholder="Enter your new password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </form>
        </div>
      </>
    );
  }
}
