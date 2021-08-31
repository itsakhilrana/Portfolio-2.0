import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import logo from "../assets/logoo.svg";

import Sidebar from "./sidebar/sidebar";

export default function Nav() {
  return (
    <>
      <header className="customNeuStyle px-4  fixed z-50 pt-2 w-full">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
            <Link to="/#home" className="flex items-center p-2">
              <motion.span
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <img src={logo} className="w-8 h-8" alt="" />
              </motion.span>
            </Link>
            <ul className="items-stretch hidden space-x-3 mt-4 ml-8 lg:flex">
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/#about"
                  className=" flex items-center hover:text-blue-500  h-8 -mb-0.5 border-b-2 px-4 border-transparent "
                >
                  about
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
                className="flex"
              >
                <Link
                  to="/#skills"
                  className=" flex items-center hover:text-blue-500 h-8 -mb-0.5 border-b-2 px-4 border-transparent "
                >
                  skills
                </Link>
              </motion.li>
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/#projects"
                  className="flex items-center hover:text-blue-500 h-8 -mb-0.5 border-b-2 px-4 border-transparent "
                >
                  projects
                </Link>
              </motion.li>
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/#designs"
                  className="flex items-center hover:text-blue-500 h-8 -mb-0.5 border-b-2 px-4 border-transparent "
                >
                  designs
                </Link>
              </motion.li>
              <motion.li
                className="flex "
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/#contact"
                  className=" flex items-center hover:text-blue-500 h-8 -mb-0.5 border-b-2 px-4 border-transparent "
                >
                  contact Me
                </Link>
              </motion.li>
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              ></motion.li>
            </ul>
          </div>
          <motion.div
            className="items-center flex-shrink-0 hidden lg:flex"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: "spring",
              stiffness: 25,
            }}
          >      
            <a  target={"_blank"} href="https://drive.google.com/file/d/1fS1HntvtsrtXYTjvTYIb79cqv9TgpJKf/view?usp=sharing" rel="noopener noreferrer">
            <button className="customNeuStyleLink px-8 py-3 font-semibold rounded outline-none">
                Resume
              </button>
            </a>
          
          </motion.div>
          <button className="lg:hidden">
            <Sidebar />
          </button>
        </div>
      </header>
    </>
  );
}
