import React from "react";

//IMPORT
import Home from "../components/home";
import About from "../components/about";
import Skills from "../components/skills";
import MainProjects from "../components/MainProjects";
import Designs from "../components/Designs";
import Contact from "../components/contact";

export default function Index() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <MainProjects />
     <Designs/>
      <Contact />
    </div>
  );
}
