import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../style/Home.css"
import pic from "./homeimg.webp"
// import kesh from "./kesariya.webp";

const Home = () => {
  const [podcastList, setPodcastList] = useState([])

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/podcast/getall")

    const data = await response.json()
    console.log(data)
    setPodcastList(data)
  }

  const displayPodcast = () => {
    return podcastList.map((podcast) => (
      <div className="col-md-4">
        <div className="container">
          <div className="card bg-dark text-white ml-8">
            <div
              className="thumb"
              style={{
                backgroundImage: `url('http://localhost:5000/${podcast.image}')`,
              }}></div>
            <div className="card-body">
              <div className="">
                <h3>{podcast.title}</h3>
                {/* <h6>{podcast.createdBy.username}</h6> */}
                <Link to={"/details/"+podcast._id} className="btn btn-primary">
                  Listen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  return (
    <>
      <div className="home-body">
        <div className="image  ml-8">
          <div className="photo">
            <img src={pic} alt="" className="img-body" />
            <h1 className="paddi">PODCAST</h1>
          </div>
          {/* <div className='podcast'>
          </div> */}
        </div>
        <div className="  container heading">
          <h2>PODCAST SERIES</h2>
        </div>
          <div className="container">
        <div className="row">{displayPodcast()}</div>
          </div>
        <hr />
      </div>
    </>
  )
}

export default Home
