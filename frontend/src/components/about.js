import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import content from './content/about'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          type: 'spring',
          bounce: 0.5,
        },
      })
    }
    if (!inView) {
      animation.start({
        y: 30,
        opacity: 0,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])
  return (
    <div id="about">
      <div className="min-h-full py-8 ">
        <section>
          
          <motion.p
            className="text-center text-md lg:max-w-2xl mx-auto sm:max-w-md md:max-w-md md:p-0 p-4"
            ref={ref}
            animate={animation}
          ><h2 className="text-4xl font-extrabold text-center slashed-zero mb-4">
          About Me
        </h2>
            Hello! My name is Akhil and I enjoy creating things that live on the
            internet. My interest in development started back when I was in 3rd
            of my college. Fast-forward to today, I am a full-stack developer. My
            main focus these days is building exciting, scalable and functional applications.
          </motion.p>
          <div
            className="content-center lg:flex lg:justify-center lg:items-center"
            ref={ref}
          >
            {content.map((cont) => {
              return (
                <motion.div
                  className="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8 ml-0"
                  animate={animation}
                  key={cont.key}
                >
                  <div className=" relative w-72 h-48">
                    <div className="customNeuStyle absolute top-0 left-0 flex items-center w-64 h-40 mt-6 ml-6  rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:shadow-2xl">
                      <div className="w-1/3 h-40"></div>
                      <div className="w-2/3 h-32 pr-4">
                        <h3 className="pt-1 text-xl font-semibold ">
                          {cont.name}
                        </h3>
                        <p className="pt-1 text-sm ">{cont.desc}</p>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-basic-white rounded-full">
                      <img src={cont.image} className="mt-2 ml-2" alt="" />
                    </div>
                    <div className="customNeuStyle absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center  rounded-lg">
                      {cont.key}
                    </div>
                    <div className="customNeuStyle absolute top-0 left-0 z-30 w-24 h-2 mt-40 ml-48"></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
