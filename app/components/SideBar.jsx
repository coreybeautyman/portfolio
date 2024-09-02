import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function SideBar({ menuOpen, onClose }) {
  const navBarHeight = 80
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: menuOpen ? 0 : '-100%' }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed left-0 top-0 z-10 h-full w-[100vw] bg-neutral-50"
    >
      <div className="mt-10 flex h-full flex-col justify-center">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center space-y-10 text-2xl font-semibold"
        >
          <motion.li
            whileHover={{ scale: 1.1, color: '#16A34A' }}
            className="cursor-pointer"
          >
            <Link
              to="home"
              smooth={true}
              duration={0}
              offset={-navBarHeight}
              onClick={onClose}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#16A34A' }}
            className="cursor-pointer"
          >
            {' '}
            <Link
              to="about"
              smooth={true}
              duration={0}
              offset={-navBarHeight}
              onClick={onClose}
            >
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#16A34A' }}
            className="cursor-pointer"
          >
            <Link
              to="projects"
              smooth={true}
              duration={0}
              offset={-navBarHeight}
              onClick={onClose}
            >
              Projects
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#16A34A' }}
            className="cursor-pointer"
          >
            {' '}
            <Link
              to="contact"
              smooth={true}
              duration={0}
              offset={-navBarHeight}
              onClick={onClose}
            >
              Contact
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default SideBar
