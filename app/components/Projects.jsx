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
          paragraph={`A travel tracker app that lets users log countries and cities, add personal reflections, and record visit dates. With an interactive map, users can easily pin locations and see all their logged destinations at a glance.`}
          techStack={['React', 'CSS']}
          image={worldWiseImg}
          imgAlt={'WorldWise Image'}
          align={'right'}
          liveDemoLink={'https://corey-worldwise.netlify.app/'}
          githubLink={'https://github.com/coreybeautyman/worldwise'}
        />
        <Project
          appTitle={'usePopcorn Movies App'}
          paragraph={`A movie app that allows users to search for films, add them to their watched list, and rate them with a star system. Users can easily track their movie history and manage their personal ratings.`}
          techStack={['React', 'CSS']}
          image={usePopcornImg}
          imgAlt={'usePopcorn Image'}
          align={'left'}
          liveDemoLink={'https://corey-usepopcorn.netlify.app/'}
          githubLink={'https://github.com/coreybeautyman/usePopcorn'}
        />
        <Project
          appTitle={'BlackJack Game'}
          paragraph={`A blackjack app that enables users to engage in gameplay against the dealer, either as a single player or in a two-player mode. Users can earn coins through gameplay, manage their personal wallet, and strategically gamble with their accumulated coins for an enhanced gaming experience.`}
          techStack={['React', 'CSS']}
          image={blackJackImg}
          imgAlt={'blackJack Image'}
          align={'right'}
          liveDemoLink={'https://corey-blackjack-react.netlify.app/'}
          githubLink={'https://github.com/coreybeautyman/Blackjack-React'}
        />
        <Project
          appTitle={'Mapty Workout App'}
          paragraph={`A comprehensive workout app that allows users to track their running and cycling activities. Users can easily log workouts, visualise their progress on an interactive map, and sort their activities for a streamlined fitness experience.`}
          techStack={['React', 'CSS']}
          image={maptyImg}
          imgAlt={'Mapty Image'}
          align={'left'}
          liveDemoLink={'https://corey-mapty.netlify.app/'}
          githubLink={'https://github.com/coreybeautyman/Mapty'}
        />
      </div>
    </div>
  )
}

export default Projects
