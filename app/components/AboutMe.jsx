'use client'

import Image from 'next/image'
import laptopImg from '../../public/laptop-computer-with-blank-screen-coffee-cup-and-2023-11-27-05-17-26-utc.JPG'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

function AboutMe() {
  const controls = useAnimation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <motion.div
      id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col items-center justify-center bg-neutral-50 px-10 pb-20 pt-10 lg:px-16 lg:pt-16"
    >
      <h1 className="border-b-2 border-green-600 pb-2 text-2xl font-bold uppercase text-green-600">
        About me
      </h1>
      <div className="flex flex-col items-center pt-10 text-neutral-800 lg:flex-row lg:justify-center lg:space-x-16 lg:py-16">
        <div className="mb-10 flex items-center justify-center lg:mb-0">
          <Image
            src={laptopImg}
            width={450}
            alt="laptop on table"
            className="min-w-[450px] rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center lg:max-w-md lg:items-start lg:text-left">
          <h1 className="text-2xl font-extrabold">
            Full-Stack Junior Developer based in Newcastle upon Tyne, UK 📍
          </h1>
          <p className="mt-5 text-lg font-light text-neutral-600">
            Hey, my name is Corey, and I'm a Full-Stack Junior Developer. My
            passion is to create and develop a clean UI/UX for my users.
          </p>
          <p className="mt-5 text-lg font-light text-neutral-600">
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe
