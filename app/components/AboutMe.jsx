'use client'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

function AboutMe() {
  const controls = useAnimation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (inView && hasScrolled) {
      controls.start('visible')
    }
  }, [controls, inView, hasScrolled])

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
      className="flex flex-col items-center justify-center bg-neutral-50 px-10 pb-20 pt-10 text-center lg:px-16 lg:pt-16"
    >
      <div className="pb-10 lg:pb-10">
        <h1 className="border-b-2 border-green-600 pb-2 text-2xl font-bold uppercase text-green-600">
          About me
        </h1>
      </div>

      <div className="flex max-w-2xl flex-col items-center justify-center text-center lg:max-w-5xl">
        <h1 className="text-2xl font-extrabold">
          Junior Full-Stack Developer based in Newcastle upon Tyne, UK 📍
        </h1>
        <div className="mt-5 text-lg font-light text-neutral-600">
          <p className="pb-4">
            With a strong foundation in both creative production and full stack
            development, I bring a unique blend of skills to the table. After
            years of leading complex video projects and collaborating with
            diverse teams in the media industry, I transitioned into software
            development, completing intensive bootcamps in JavaScript, React,
            and back-end technologies such as Node, Express, MongoDB and
            Mongoose.
          </p>
          <p>
            I’ve developed and deployed full-scale applications using the MERN
            stack. My journey from creative producer to junior full stack
            developer reflects my commitment to continuous learning and
            delivering high-quality results in everything I do.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe
