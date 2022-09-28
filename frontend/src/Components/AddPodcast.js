import React from "react";
import "./../style/AddPodcast.css";
import Swal from "sweetalert2";

import { useState } from "react";
import toast, { Toast } from "react-hot-toast";
import { Formik } from "formik";
// import logo from './podlogo.jpeg'

const AddPodcast = () => {
  const [SelFile, setSelFile] = useState("");
  const [selimage, setSelimage] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const UploadPodCast = async (formdata, { resetForm }) => {
    formdata.file = SelFile;
    formdata.image = selimage;
    console.log(formdata);
    resetForm();
    const response = await fetch("http://localhost:5000/podcast/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // add podcast alert
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: " success",
        text: "Publish successfully",
      });
    
  };
}

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadFile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        // toast.success("Image Uploaded!!", {
        //   style: {
        //     borderRadius: "10px",
        //     background: "#333",
        //     color: "#fff",
        //   },
        // });
      }
    });
  };

  const uploadthumbnail = (e) => {
    const file = e.target.files[0];
    setSelimage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadFile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        // toast.success("Image Uploaded!!", {
        //   style: {
        //     borderRadius: "10px",
        //     background: "#333",
        //     color: "#fff",
        //   },
        // });
      }
    });
  };

  return (
    <>
      <div className="row mt-3 mx-3 bg-secondary" style={{ marginTop: 25 }}>
        {/* <img src={logo} alt="" height={450}/> */}
        <div className="col-md-3 mt-5">
          <div
            style={{ marginTop: 50, marginLeft: 10 }}
            className="text-center"
          >
            <i></i>
            {/* <i
              id="animationDemo"
              data-mdb-animation="slide-right"
              data-mdb-toggle="animation"
              data-mdb-animation-reset="true"
              data-mdb-animation-start="onPress"
              data-mdb-animation-on-scroll="repeat"
              className="fas fa-3x fa-podcast text-white"
            />
            <h3 className="mt-3 text-white">Welcome</h3>
            <p className="white-text .font-italic">
              You are one step away to publish your podcast!
            </p> */}
            <img src="microphone.png" alt="" height={330} width={300} />
          </div>
          <h4 className="welcome">Welcome To My Podcast</h4>
          {/* <div className="text-center">
            <button
              type="submit"
              className="btn btn-white btn-rounded back-button"
            >
              Create
            </button>
          </div> */}
        </div>
        <div className="col-md-9 justify-content-center">
          <div className="card card-custom  pb-4">
            <div className="card-body mt-0 mx-5">
              <div className="text-center mb-3 pb-2 mt-3">
                <h4 style={{ color: "#495057" }}>Podcast Details</h4>
                <i class="fa fa-podcast fa-4x" aria-hidden="true"></i>
              </div>
              <Formik
                initialValues={{
                  title: "",
                  description: "",
                  genre: "",
                  createdBy: currentUser._id,
                  createdAt: new Date(),
                }}
                onSubmit={UploadPodCast}
              >
                {({ values, handleChange, handleSubmit }) => {
                  return (
                    <form className="mb-0" onSubmit={handleSubmit}>
                      <div className="col mb-4">
                        <div className="row">
                          <div className="">
                            <label
                              className="form-label"
                              htmlFor="form9Example1"
                            >
                              Title
                            </label>
                            <input
                              type="title"
                              id="title"
                              value={values.title}
                              onChange={handleChange}
                              className="form-control input-custom"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="">
                            <label
                              className="form-label"
                              htmlFor="form9Example2"
                            >
                              Description
                            </label>
                            <textarea
                              type="description"
                              id="description"
                              value={values.description}
                              onChange={handleChange}
                              className="form-control input-custom"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="row">
                          <label className="form-label" htmlFor="form9Example3">
                            Upload File
                          </label>
                          <input
                            type="file"
                            onChange={uploadFile}
                            className="form-control input-custom"
                          />
                        </div>
                        <div className="row">
                          <label
                            className="form-label mt-3"
                            htmlFor="form9Example4"
                          >
                            upload Image
                          </label>
                          <input
                            type="File"
                            onChange={uploadthumbnail}
                            className="form-control input-custom"
                          />
                        </div>
                      </div>

                      <div className="float-end ">
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-rounded"
                          style={{ backgroundColor: "#0062CC" }}
                        >
                          Publish
                        </button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPodcast;
