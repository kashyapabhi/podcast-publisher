import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import {BrowserRouter,Routes,Route,Link, Router} from "react-router-dom";
// import {Toaster} from 'react-hot-toast';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Signup from './Components/Signup'; 
import AddPodcast from './Components/AddPodcast'; 





function App() {
  return (
    <div>
      {/* <Toaster position="top-center"/> */}
      <BrowserRouter>
      {/* <Link className="btn btn-link" to="/home">Home</Link> */}
      <Header/>
      <Routes>
        <Route element={<Signin/>} path='/'/>
        <Route element={<Home/>} path='Home'/>
        <Route element={<Signin/>} path='Signin'/>
        <Route element={<Signup/>} path='Signup'/>
        <Route element={<AddPodcast/>} path='AddPodcast'/>

      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
