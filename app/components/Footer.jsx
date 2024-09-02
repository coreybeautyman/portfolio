'use client'

import { TbBrandLinkedin } from 'react-icons/tb'
import { FiGithub } from 'react-icons/fi'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Footer() {
  const controls = useAnimation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
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
      className="flex flex-col items-center justify-center bg-neutral-800 text-neutral-100"
    >
      <h2 className="mb-5 pb-2 pt-10 text-lg font-bold">
        Copyright © 2024. All rights are reserved
      </h2>
      <div className="flex items-center justify-center pb-10">
        <button>
          <TbBrandLinkedin className="mx-2 text-4xl duration-300 ease-in-out hover:scale-110 hover:text-green-600" />
        </button>
        <button>
          <FiGithub className="mx-2 text-2xl duration-300 ease-in-out hover:scale-110 hover:text-green-600" />
        </button>
      </div>
    </motion.div>
  )
}

export default Footer
