import React from "react";

import profile from "../assets/HeroImage.svg";
import github from "../assets/github.svg";
import linkedin from '../assets/linkedin.svg'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div id="home">
      
      <section className="pt-20 w-full ">
        <div className="container mx-auto flex flex-col justify-around p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-around ">
          <div className="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <motion.div
              className="text-5xl font-bold leading-none sm:text-6xl flex flex-row flex-wrap xl:justify-start justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.5,
                duration: 1,
                type: "spring",
                stiffness: 25,
              }}
            >
             <span>Hey,&nbsp;I'm</span> 
              <motion.span
                className=" text-blue-500"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                &nbsp;Akhil
              </motion.span>
              </motion.div>
              <br /><motion.div initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.7,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 25,
                }}
              className="flex flex-row flex-wrap xl:justify-start text-5xl font-bold leading-none justify-center">I 
              <p>&nbsp;speak&nbsp;</p>
              <Typewriter
          
                onInit={(typewriter) => {
                  typewriter
                    .typeString("JavaScript")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Node.Js")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("MongoDB")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("React.Js")
                    .pauseFor(1000)
                   
                    .start();
                }}
              />
              </motion.div>
       
            
            
            <motion.p
              className="mt-6 mb-6 text-lg sm:mb-8 "
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.0,
                duration: 1,
                type: "spring",
                stiffness: 25,
              }}
            >
              I'm a self-taught <strong className="text-blue-500">MERN Stack Developer</strong> who specializes in building
              exceptional web applications.
              <motion.span
            
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.3,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              > Currently, I'm focussing on building highly
                interactive and user-friendly products.
                
              </motion.span>
            </motion.p>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <motion.a
                href="https://www.linkedin.com/in/akhilhere/"
                className="customNeuStyleLink px-8 py-3 text-lg font-semibold rounded"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.5,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                Let's Connect
                <img
                    src={linkedin}
                    alt="linkedin"
                    className="float-right ml-2"
                  />
              </motion.a>
              <motion.a
                href="https://github.com/itsakhilrana"
                className="customNeuStyleLink px-8 py-3 text-lg font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.7,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <div>
                Github
                  <img
                    src={github}
                    alt="github"
                    className="float-right ml-2 "
                  />
                  
                  
                </div>
              </motion.a>
            </div>
          </div>
          <motion.div
            className=" flex items-center justify-center p-6 mt-12 lg:mt-0 h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.4,
              duration: 1,
              type: "spring",
              stiffness: 25,
            }}
          >
            <img
              src={profile}
              alt=""
              className="customNeuStyle object-contain rounded-full p-5 h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
