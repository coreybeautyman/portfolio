'use client'

import Image from 'next/image'

import htmlLogo from '../../public/html.png'
import cssLogo from '../../public/CSSl.png'
import jsLogo from '../../public/js.png'
import tsLogo from '../../public/ts.png'
import reactLogo from '../../public/react.png'
import nextLogo from '../../public/next.png'
import tailwindLogo from '../../public/tailwind.png'
import sassLogo from '../../public/sass.png'
import mongodbLogo from '../../public/mongodb.png'
import expressLogo from '../../public/express.png'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

function TechStack() {
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

  const listVariant = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
        delay: 1.2,
      },
    },
    hidden: { opacity: 0, x: -50 },
  }

  const itemVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mt-10 flex flex-col px-16 pb-20 lg:flex-row lg:items-center lg:justify-center"
    >
      <div className="flex justify-center">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="border-b-2 border-neutral-500 pb-2 text-xl lg:h-full lg:items-center lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-2"
        >
          Tech Stack
        </motion.h2>
      </div>
      <div className="mt-9 lg:mt-0">
        <motion.ul
          variants={listVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center space-x-8 lg:px-16"
        >
          <motion.li
            variants={itemVariant}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex transform cursor-pointer space-x-2"
          >
            <Image
              className="my-5"
              src={htmlLogo}
              alt="html logo"
              width={55}
              height={55}
              layout="fixed"
            />
            <Image
              className="my-5"
              src={cssLogo}
              alt="css logo"
              width={55}
              height={55}
              layout="fixed"
            />
          </motion.li>
          <motion.li
            variants={itemVariant}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex transform cursor-pointer space-x-2"
          >
            <Image className="my-5" src={jsLogo} alt="js logo" width={55} />
            <Image className="my-5" src={tsLogo} alt="ts logo" width={55} />
          </motion.li>
          <motion.li
            variants={itemVariant}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex transform cursor-pointer space-x-2"
          >
            <Image
              className="my-5"
              src={reactLogo}
              alt="react logo"
              width={55}
            />
            <Image className="my-5" src={nextLogo} alt="next logo" width={55} />
          </motion.li>
          <motion.li
            variants={itemVariant}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex transform cursor-pointer space-x-2"
          >
            <Image
              className="my-5"
              src={tailwindLogo}
              alt="tailwind logo"
              width={55}
            />
            <Image className="my-5" src={sassLogo} alt="sass logo" width={55} />
          </motion.li>
          <motion.li
            variants={itemVariant}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex transform cursor-pointer space-x-2"
          >
            <Image
              className="my-5"
              src={mongodbLogo}
              alt="mongo db logo"
              width={55}
            />
            <Image
              className="my-5"
              src={expressLogo}
              alt="express logo"
              width={55}
            />
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default TechStack
