import React, { useEffect } from "react";
import { designs } from "./content/projects";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profolio from '../assets/SoundBee.svg'

export default function Designs() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: 30,     
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div>
      <section className=" body-font" id="designs">
        <div className="container px-8 py-8 mx-auto">
          <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl py-12">
            <h2 className="text-4xl font-extrabold leading-none sm:text-4xl">
              Designs
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            {designs.map((design) => {
              return (
                <div key={design.key} className="p-4 lg:w-1/3">
                  <motion.div
                    className="customNeuStyle h-full bg-opacity-30 hover:bg-opacity-90 px-2 pt-2 pb-2 rounded-lg overflow-hidden relative shadow-lg  hover:-translate-y-1 transform transition"
                    ref={ref}
                    animate={animation}
                  >
                   <img className="rounded-lg h-full " src={design.image} alt="" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
