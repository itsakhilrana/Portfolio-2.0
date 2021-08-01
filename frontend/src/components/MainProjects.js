import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { projects } from "./content/projects";

export default function MainProjects() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <>
      <section className="body-font w-full px-3" id="projects">
        <div className="container px-8 py-8 mx-auto">
          <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl py-12">
            <h2 className="text-4xl font-extrabold leading-none sm:text-4xl">
              Some things I've built
            </h2>
          </div>
          <div className="flex flex-wrap -m-4" ref={ref}>
            {projects.map((project) => {
              return (
                <motion.div className=" p-4 md:w-2/4 md:mx-auto xl:w-1/3 2xl:w-1/3 sm:w-2/3 sm:mx-auto" key={project.key}>
                  <div
                    className="customNeuStyle h-full rounded-lg overflow-hidden bg-basic-yellow shadow-lg hover:-translate-y-1 transform transition"
                    animate={animation}
                  >
                    <div
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      
                    >
                      <img src={project.image} alt={project.name} />
                    </div>

                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 bg-basic-yellowLight text-basic-blue p-2 rounded-md">
                        {project.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.name}
                      </h1>
                      <p className="leading-relaxed mb-3">{project.about}</p>
                      <div className="flex items-center flex-wrap ">
                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <a href={project.github}>
                            <i className="fab fa-github fa-lg text-coolGray-400 w-4 h-4 mr-1" />
                          </a>
                        </span>
                        <span className="text-gray-500 inline-flex items-center leading-none text-sm ml-0">
                          <a href={project.deployOn}>
                            <i className="far fa-browser fa-lg text-coolGray-400 w-4 h-4 text-center" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
