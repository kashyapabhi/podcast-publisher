import React from 'react'
import './../style/Home.css'
import pic from './homeimg.webp'
import kesh from './kesariya.webp'

const Home = () => {
  return (
    <>
    <div className='home-body'>
        <div className='image'>
          <img src={pic} alt="" className='img-body'/>
          <div className='podcast'>
            PODCAST
          </div>
        </div>
        <div className="heading">
          <h2>PODCAST SERIES</h2>
        </div>


        <hr />
        <div className='main-card'>
          <div className='totle-content'>
            <div className="img-card">
              <div className="main-img">

              <div>
              <img src={kesh} alt=""  className="set-img"/>

              <span className="song-title"> Kesariya(From "Brahmastra"){'/n'}
              Pritam,Arijit Singh,Amitabh Bhattacharya </span>
              </div>

              </div>


            </div>
            <div className="img-content">
              <div className="song-name">


              </div>
            </div>



          </div>

        </div>
    <hr />


    
       

    </div>



    

    
    </>

    )
}

export default Home