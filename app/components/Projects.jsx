'use client'

import Project from './Project'
import blackJackImg from '../../public/Blackjackimg.png'
import usePopcornImg from '../../public/usePopcorn.png'
import worldWiseImg from '../../public/worldWise.png'
import maptyImg from '../../public/mapty.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Projects() {
  const controls = useAnimation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
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
    <div id="projects" className="px-10 lg:pb-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex justify-center pt-10 lg:pb-10 lg:pt-16"
      >
        <h1 className="mb-10 border-b-2 border-green-600 pb-2 text-2xl font-bold uppercase text-green-600 lg:mb-0">
          Portfolio
        </h1>
      </motion.div>
      <div className="flex flex-col items-center">
        <Project
          appTitle={'WorldWise'}
          paragraph={`A car rental website is an online platform that allows users to rent
          cars for personal or business use. The website provides an interface
          for searching, comparing, and reserving dars.`}
          techStack={['React', 'SCSS']}
          image={worldWiseImg}
          imgAlt={'WorldWise Image'}
          align={'right'}
        />
        <Project
          appTitle={'BlackJack Game ♠️'}
          paragraph={`A car rental website is an online platform that allows users to rent
          cars for personal or business use. The website provides an interface
          for searching, comparing, and reserving dars.`}
          techStack={['React', 'SCSS']}
          image={blackJackImg}
          imgAlt={'blackJack Image'}
          align={'left'}
        />
        <Project
          appTitle={'usePopcorn Movies App'}
          paragraph={`A car rental website is an online platform that allows users to rent
          cars for personal or business use. The website provides an interface
          for searching, comparing, and reserving dars.`}
          techStack={['React', 'SCSS']}
          image={usePopcornImg}
          imgAlt={'usePopcorn Image'}
          align={'right'}
        />
        <Project
          appTitle={'Mapty workout App'}
          paragraph={`A car rental website is an online platform that allows users to rent
          cars for personal or business use. The website provides an interface
          for searching, comparing, and reserving dars.`}
          techStack={['React', 'SCSS']}
          image={maptyImg}
          imgAlt={'Mapty Image'}
          align={'left'}
        />
      </div>
    </div>
  )
}

export default Projects
