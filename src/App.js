import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import SearchBus from "./SearchBus";
import { Route, Routes } from "react-router";
import LoginPage from "./LoginPage";
import UserLogin from "./UserLogin";
import AdminLogin from "./AdminLogin";
import RegistrationForm from "./RegistrationForm";
import ForgotPassword from "./ForgotPassword";
import SelectSeat from "./SelectSeat";
import UserData from "./UserData";

function App() {
  return (
    <div className="App">
      <h1 className="h1">Welcome To Online Bus Booking</h1>
      <Navbar />

      {/* <Navbar />
      <SearchBus /> */}

      {/* <LoginPage /> */}
      {/* <UserLogin /> */}
      {/* <AdminLogin /> */}
      {/* <RegistrationForm /> */}

      <Routes>
        {/* <Route> </Route> */}
        <Route path={"/searchbus"} element={<SearchBus />}></Route>
        <Route path={"/selectseat"} element={<SelectSeat />}></Route>
        <Route path={"/loginpage"} element={<LoginPage />}></Route>
        <Route path={"/adminlogin"} element={<AdminLogin />}></Route>
        <Route path={"/userlogin"} element={<UserLogin />}></Route>
        <Route path={"/userData"} element={<UserData />}></Route>
        <Route
          path={"/registrationform"}
          element={<RegistrationForm />}
        ></Route>

        <Route
          path={"/userlogin/forgotpassword"}
          element={<ForgotPassword />}
        ></Route>
        <Route
          path={"/adminlogin/forgotpassword"}
          element={<ForgotPassword />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
