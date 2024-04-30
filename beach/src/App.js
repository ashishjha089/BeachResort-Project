import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations"
import Services from "./components/Services";
import Selection from "./components/Selection";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Destinations/>
    <Services/>
    <Selection/>
    <Carousel/>
    <Footer/>
    </div>
  );
}

export default App;
