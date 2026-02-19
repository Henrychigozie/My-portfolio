import { useState, useEffect } from "react";
import "./App.css";
import Herosection from "./assets/components/heroSection.jsx";
import MyBioComponent from "./assets/components/Bio.jsx";
import Project from "./assets/components/project.jsx";
import Services from "./assets/components/Service.jsx";
import Experience from "./assets/components/Experience.jsx";
import Testimonials from "./assets/components/Testimonials.jsx";
import Contact from "./assets/components/Contact.jsx";

function App() {
  return (
    <>
      <Herosection />
      <MyBioComponent />
      <Project />
      <Services />
      <Experience /> 
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;