'use client'

import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Project({
  appTitle,
  paragraph,
  techStack,
  githubLink,
  liveDemoLink,
  image,
  imgAlt,
  align,
}) {
  const controls = useAnimation()

  const getThreshold = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 0.7 : 0.4
    }
    return 0.4
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: getThreshold(),
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
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={`mb-10 flex flex-col items-center lg:space-x-16 lg:flex-row${align === 'right' ? '-reverse' : ''} ${align === 'right' ? 'lg:space-x-reverse' : ''}`}
    >
      <div className="text-center lg:max-w-xs">
        <h2 className="text-lg font-bold">{appTitle}</h2>
        <p className="mt-4">{paragraph}</p>
        <div className="mt-6 flex justify-center font-bold">
          {techStack?.map((tech, i) => (
            <h3 key={i} className="mx-3">
              {tech}
            </h3>
          ))}
        </div>
        <div>
          <div className="mt-6 flex justify-center">
            <button className="mx-3 flex cursor-pointer items-center justify-center duration-300 ease-in-out hover:scale-110 hover:text-green-600">
              <h3 className="mx-1">Code</h3>
              <FaGithub />
            </button>
            <button className="mx-3 flex cursor-pointer items-center justify-center duration-300 ease-in-out hover:scale-110 hover:text-green-600">
              <h3 className="mx-1">Live Demo</h3>
              <FaExternalLinkAlt />
            </button>
          </div>
        </div>
      </div>
      <Image
        src={image}
        alt={imgAlt}
        width={550}
        className="my-10 cursor-pointer items-center justify-center rounded-xl duration-300 ease-in-out hover:scale-105"
      />
    </motion.div>
  )
}

export default Project
