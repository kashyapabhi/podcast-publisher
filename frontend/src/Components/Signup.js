import React from "react";
import "./../style/Signup.css";
import Swal from "sweetalert2";
import { Formik } from "formik";

export default function Signup() {
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.status === 200 ){
        Swal.fire({
            icon:"success",
            title : "success",
            text : "Signup successfully",
        });
    }
    else if (Response.status === 401 ){
        Swal.fire({
            icon:"error",
            title : "failed",
            text : "signup failed",
        });
    }
    else{
        console.log("unknown error occured")
    }
  };
  return (
    <>
      <div className="main-box">
        <div className="main">
          <div className="content">
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              onSubmit={loginSubmit}
            >
              {({ handleSubmit, values, handleChange }) => (
                <form onClick={handleSubmit}>
                  <h2>Create Your Account</h2>
                  <div className="content-box">
                    <input
                      type="text"
                      required
                      id="username"
                      onClick={handleChange}
                      value={values.username}
                    />
                    <span>Username</span>
                    <i></i>
                  </div>
                  <div className="content-box">
                    <input
                      type="Email"
                      required
                      id="email"
                      onClick={handleChange}
                      value={values.email}
                    />
                    <span>Email</span>
                    <i></i>
                  </div>
                  <div className="content-box">
                    <input
                      type="Password"
                      required
                      id="password"
                      onClick={handleChange}
                      value={values.password}
                    />
                    <span>Password</span>
                    <i></i>
                  </div>
                  <button className="btn">Submit</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
