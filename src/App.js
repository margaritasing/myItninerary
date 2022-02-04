import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';




import Footer from './components/Footer';
import Home from './components/Home';
import Cities from './components/Cities'
import Navbar from './components/NavBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import CardCities from "./components/CardCities";
import Country from "./components/Country";



function App() {

  const data = []  
  const dato = []
  axios.get("http://localhost:4000/api/datos")
  .then(response => {
    data.push(...response.data.response.cities)
  })

   axios.get("http://localhost:4000/api/itinerary")
  .then(response => {
    data.push(...response.data.response.itinerary)

  })


  



  /* const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode; */

  return (
    <BrowserRouter>
     <div className = "" >
     <Navbar /> {/* Esto es para que quede fijo en todas las rutas */}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities data = {data} />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/city" element={<CardCities />} />
        <Route path="/country" element={<Country />} />
      </Routes>
      <Footer />
     </div>
    </BrowserRouter>
    
  );
}

export default App;
