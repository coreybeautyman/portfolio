'use client'

import Image from 'next/image'
import profileImg from '../../public/LinkedIn-studio-headshot-photographer-london-1024x1024.jpg'
import { PiLinkedinLogoBold } from 'react-icons/pi'
import { FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Hero() {
  const isLarge = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? true : false
    }
    return false
  }

  return (
    <div
      id="home"
      className="mt-20 flex flex-col items-center justify-center px-10 pt-14 text-neutral-800 lg:flex-row-reverse lg:px-14 lg:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: isLarge() ? 1 : 0.5 }}
        className="mb-14"
      >
        <Image
          src={profileImg}
          alt="profile image"
          className="max-w-72 rounded-full border-4 border-green-600 object-cover transition-all duration-700"
        />
      </motion.div>
      <div className="flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: isLarge() ? 0.7 : 1 }}
          className="mb-7 text-center text-5xl font-extrabold lg:text-left lg:text-6xl"
        >
          Junior Full-stack <br />
          Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-11 max-w-2xl text-center text-lg lg:w-10/12 lg:text-left"
        >
          Hi, I'm Corey Beautyman.Passionate a junior full stack developer with
          a strong foundation in modern web technologies. I build scalable,
          user-friendly applications that bring creative ideas to life, from
          front-end design to back-end functionality.
        </motion.p>

        <div className="flex items-center justify-center space-x-4 text-4xl lg:justify-start">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <PiLinkedinLogoBold className="cursor-pointer duration-300 ease-in-out hover:scale-110 hover:text-green-600" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <FiGithub className="cursor-pointer duration-300 ease-in-out hover:scale-110 hover:text-green-600" />
          </motion.span>
        </div>
      </div>
    </div>
  )
}

export default Hero
