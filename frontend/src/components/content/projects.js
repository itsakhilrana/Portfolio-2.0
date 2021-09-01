import Portfolio from "../../assets/Portimage.PNG";

import SoundBee from "../../assets/SoundBee.png";
import ResumeToMars from '../../assets/Resumetomars.png'
import HireT from '../../assets/Hire.png'
import AirlineT from '../../assets/Airline.png'
import Tripie from '../../assets/Tripie.png'

export const projects = [
  {
    key: 1,
    name: "SoundBee",
    category: "React.js | Node.js | MongoDB | Express ",
    about:
      "eCommerce platform built with the MERN stack & Redux. Implemented auth middleware using express and bcrypt for password encryption. Created a global predictable state container for the frontend using ReduxJS. Created the UI wireframes in Figma and implemented the responsive design. Designed schema for no-SQL DB (mongodb) using the mongoose.",
    image: SoundBee,
   
    github: " https://github.com/itsakhilrana/SoundBee",
    deployOn: "https://soundbee.herokuapp.com/",
  },
  {
    key: 2,
    name: "ResumeToMars",
    category: "React.js | Lifecycle Methods | Redux",
    about:
      "ResumeToMars is a React Based application, which provide the resume templates and built with the ReactJs & Redux. Use of Redux and Local storage to share the state across different components. Implemented lifecycle operations on all pages using a functional component building approach in reactJS. Deployed the frontend on heroku. ",
    image: ResumeToMars,
    
    github: "https://github.com/itsakhilrana/ResumeToMars",
    deployOn: "https://resumetomars.herokuapp.com/",
  },
  {
    key: 3,
    name: "My Portfolio",
    category: "React.js | TailwindCSS",
    about:
      "Created the UI wireframes in Figma and implemented the responsive design. Built custom & reusable components for elements like navbar and footer. Used Tailwind Css library for implementing a mobile-first responsive UI for the entire app. Added CSS animations using with Framer motion",
    image: Portfolio,
    
    github: "https://github.com/itsakhilrana/Portfolio",
    deployOn: "http://akhilranaportfolio.herokuapp.com/",
  },
];

export const designs = [
  {
    key: 1,
    
    name: "SoundBee",
    image: SoundBee,
  },
  {
    key: 2,
    
    name: "Hire",
    image: HireT,
  },
  {
    key: 3,
    
    name: "Tripie",
    image: Tripie,
  },
  {
    key: 4,
    
    name: "Airline",
    image: AirlineT,
  },
  {
    key: 5,
    
    name: "AResume",
    image: ResumeToMars,
  },
  
];
