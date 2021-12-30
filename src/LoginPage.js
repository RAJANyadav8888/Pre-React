import { Component } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import Navbar from "./Navbar";
import SearchFlight from "./SearchBus";
import UserLogin from "./UserLogin";

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <div className="loginpage">
          <Link class="nav-link" to="/adminlogin">
            <button class="btn btn-outline-warning" type="submit">
              Admin Login
            </button>
          </Link>

          <Link class="nav-link" to="/userlogin">
            <button class="btn btn-outline-warning" type="submit">
              User Login
            </button>
          </Link>
        </div>
      </>
    );
  }
}
