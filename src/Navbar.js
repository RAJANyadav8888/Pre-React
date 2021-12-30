import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="searchbus"
                  >
                    Search Bus
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="selectseat">
                    Select Seat
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="">
                    Help
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="userData">
                    Show data
                  </Link>
                </li>
              </ul>
              <Link class="nav-link" to="registrationform">
                <button class="btn btn-outline-success" type="submit">
                  Register
                </button>
              </Link>
              <form class="d-flex">
                {/* <input
                  height="10%"
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                /> */}

                <Link class="nav-link" to="/loginpage">
                  <button class="btn btn-outline-success" type="submit">
                    Login / SignUp
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
