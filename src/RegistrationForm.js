import { Component } from "react";
import Navbar from "./Navbar";

export default class RegistrationForm extends Component {
  render() {
    return (
      <>
        <form>
          <div class="Registration-form">
            <h1 id="ragistration-color"> Registration Form</h1>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Title"
                  aria-label="First name"
                />
              </div>

              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
            </div>
            <br />

            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="last name"
                  aria-label="Last name"
                />
              </div>

              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="enter your email"
                  aria-label="email"
                />
              </div>
            </div>
            <br />

            <div class="row">
              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>

              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm your Password"
                  aria-label="Confirm Password "
                />
              </div>
            </div>
            <br />

            <div class="row">
              <div class="col">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Date Of Birth"
                  aria-label="Date Of Birth"
                />
              </div>

              <div class="col">
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                />
              </div>
            </div>
            <br />
            <div>
              {" "}
              <button class="btn btn-outline-warning"> Sign In</button>{" "}
              &nbsp;&nbsp;&nbsp;
              <button class="btn btn-outline-warning"> Cancel </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
