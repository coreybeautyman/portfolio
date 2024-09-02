'use client'

import { MdOutlineEmail } from 'react-icons/md'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Contact() {
  const controls = useAnimation()

  const getThreshold = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 1 : 0.4
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
      id="contact"
      className="flex flex-col items-center justify-center bg-neutral-50 px-10 pb-10 pt-10 lg:px-16 lg:pb-20 lg:pt-16"
    >
      <div className="flex justify-center">
        <h1 className="border-b-2 border-green-600 pb-2 text-2xl font-bold uppercase text-green-600">
          Contact
        </h1>
      </div>
      <div className="flex flex-col items-start justify-start pb-20 pt-10 lg:w-full lg:max-w-4xl lg:py-16">
        <h2 className="pb-10 text-3xl font-black text-neutral-800">
          Give me an email...
        </h2>
        <div className="flex flex-col items-center lg:flex-row">
          <button>
            <MdOutlineEmail className="rounded-full bg-neutral-50 p-2 text-6xl drop-shadow-lg duration-300 ease-in-out hover:scale-110 hover:text-green-600" />
          </button>
          <div className="flex flex-col items-center lg:items-start lg:px-5">
            <h2 className="pb-3 pt-5 text-lg font-bold lg:pb-0 lg:pt-0">
              Email:
            </h2>
            <p className="uppercase">Corey.beautyman@gmail.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
