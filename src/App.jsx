// App.jsx
import React from "react";
import "./app.scss";
import Portafolio from "./components/portafolio/Portafolio";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Who from "./components/who/Who";
import Works from "./components/works/Works";


function App() {
  return (
    <div className="app-container">
      <Hero />
      
      <Works />
      <Portafolio />
      {/*  <Who /> */}
    
      <Contact />
      
    </div>
  );
}

export default App;
