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
          >
            <h2 className="text-4xl font-extrabold text-center slashed-zero mb-4">
              About Me
            </h2>
            Hello! My name is Akhil and I enjoy creating things that live on the
            internet. My interest in development started back when I was in 3rd
            of my college. Fast-forward to today, I am a full-stack developer.
            My main focus these days is building exciting, scalable and
            functional applications.
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
                  <div className="customNeuStyle flex flex-col items-center text-center pt-4 pb-4 w-64 h-48 mt-6 ml-6  rounded-lg shadow-lg">
                    <div className="bg-blue-500 text-2xl w-16 h-20 rounded-full flex justify-center items-center">
                      <i className={cont.image}></i>
                    </div>
                    <div className="w-48 h-32 ">
                      <h3 className="pt-2 text-xl font-semibold ">
                        {cont.name}
                      </h3>
                      <p className="pt-1 text-sm ">{cont.desc}</p>
                    </div>
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
