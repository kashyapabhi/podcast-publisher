import logo from "./logo.svg"
import "./App.css"
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom"
// import {Toaster} from 'react-hot-toast';
import Home from "./Components/Home"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import AddPodcast from "./Components/AddPodcast"
import PodcastList from "./Components/PodcastList"
import PodcastManage from "./Components/PodcastManage"
import { Toaster } from "react-hot-toast"
import PodcastDetails from "./Components/podcastDetails"

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <BrowserRouter>
        {/* <Link className="btn btn-link" to="/home">Home</Link> */}
        <Header />
        <Routes>
          <Route element={<Signin />} path="/" />
          <Route element={<Home />} path="Home" />
          <Route element={<Signin />} path="Signin" />
          <Route element={<Signup />} path="Signup" />
          <Route element={<AddPodcast />} path="AddPodcast" />
          <Route element={<PodcastList />} path="PodcastList" />
          <Route element={<PodcastManage />} path="PodcastManage" />
          <Route element={<PodcastDetails />} path="details/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
