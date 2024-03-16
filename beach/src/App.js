import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations"
import Services from "./components/Services";
function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Destinations/>
    <Services/>
    </div>
  );
}

export default App;
