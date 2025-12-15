import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Herosection from "./assets/components/heroSection.jsx";
import MyBioComponent from "./assets/components/Bio.jsx";

function App() {
  return (
    <>
      <Herosection />
      <MyBioComponent />
      <h1 className="text-red-500">Hello, Tailwind CSS is working!</h1>
    </>
  );
}

export default App;
