import React from "react";
import "./../style/Signin.css";
import Swal from "sweetalert2";
import { Formik } from "formik";
import { Link } from "react-router-dom";

export default function Signin() {
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);
    // resetForm();

    const response = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: " success",
        text: "Login successfully",
      });
    } else if (response.status === 401) {
      Swal.fire({
        icon: "error",
        title: " failed",
        text: "Loggedin Failed",
      });
    } else {
      console.log("unknown error occured");
    }
  };

  return (
    <div className="body">
      <div className="box">
        <div className="form">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={loginSubmit}
          >
            {({ handleSubmit, values, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <div className="inputBox">
                  <input
                    type="text"
                    required
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <span>Email</span>
                  <i></i>
                </div>
                <div className="inputBox">
                  <input
                    type="password"
                    required
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <span>Password</span>
                  <i></i>
                </div>
                <div className="links">
                  <a href="#">Forgot Password</a>
                  <Link to="/Signup">Signup</Link>
                </div>
                <input type="Submit" value="Login" />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
