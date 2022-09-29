import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PodcastDetails = () => {
  const [podcastData, setPodcastData] = useState(null)
  const [loading, setLoading] = useState(true)

  const {id} = useParams();

  const url = 'http://localhost:5000';

  const getDataFromBackend = async () => {
    setLoading(true)
    const response = await fetch("http://localhost:5000/podcast/getbyid/"+id)

    const data = await response.json()
    console.log(data)
    setPodcastData(data)
    setLoading(false)
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const displayDetails = () => {
    if (!loading)
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={url+'/'+podcastData.image} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h1>{podcastData.title}</h1>
              <p>{podcastData.description}</p>
              <audio controls>
                <source src={url+'/'+podcastData.file} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      )
  }

  return <div>
    <h1>Listen to Your Podcast</h1>
    <hr/>

    {displayDetails()}
  </div>
}

export default PodcastDetails
