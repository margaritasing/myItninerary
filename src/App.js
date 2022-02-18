import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Cities from "./components/Cities";
import Navbar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CardCities from "./components/CardCities";
import City from "./components/City";
import Top from "./components/Top";

function App() {
  const data = [];

  axios.get("http://localhost:4000/api/datos").then((response) => {
    data.push(...response.data.response.cities);
  });

  const itinerary = [];

  axios.get("http://localhost:4000/api/itinerary").then((response) => {
    itinerary.push(...response.data.response.itinerary);
  });

  /* const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode; */

  return (
    <BrowserRouter>
      <div className="">
        <Navbar /> {/* Esto es para que quede fijo en todas las rutas */}
        <Top />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities data={data} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/city" element={<CardCities />} />
          <Route
            path="/country/:id"
            element={<City itinerary={itinerary} data={data} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
