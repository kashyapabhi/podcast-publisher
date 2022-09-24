import React from "react";
import "./../style/AddPodcast.css";
import setSelFile

function AddPodcast() {

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  return (
    <>
      <form action="">
        <div className="body-container">
          <div className="logo-container">
            <h2 className="text-center">AddPodcast</h2>
            <div className="title-container ">
              <label htmlFor="">Title</label>
              <input type="text" className="form-control" />
              <label htmlFor="">Genre</label>
              <input type="text" className="form-control" />
              <label htmlFor="">Image</label>
              <input type="text" className="form-control" />
              <label htmlFor="">File</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddPodcast;
