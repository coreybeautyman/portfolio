'use client'
import { Link } from 'react-scroll'
import Image from 'next/image'
import logoBlack from '../../public/Logo-black.png'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { motion } from 'framer-motion'

function NavBar() {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navBarHeight = 80

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="drop-shadow-custom fixed left-0 right-0 top-0 z-50 h-20 bg-neutral-50"
      >
        <div className="mx-auto flex w-full max-w-screen-xl justify-between py-7 pl-16 pr-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="align-middle"
          >
            <Link to="home" smooth={true} duration={700} offset={-navBarHeight}>
              <Image
                className="mt-0.5 flex cursor-pointer align-middle"
                src={logoBlack}
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </motion.div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="h-7 w-7 cursor-pointer duration-300 ease-in-out hover:scale-110 hover:text-green-600" />
              ) : (
                <FaBars className="h-7 w-7 cursor-pointer duration-300 ease-in-out hover:scale-110 hover:text-green-600" />
              )}
            </button>
          ) : (
            <ul className="flex space-x-7 text-lg font-semibold">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Link
                  to="home"
                  smooth={true}
                  duration={700}
                  offset={-navBarHeight}
                  className="cursor-pointer duration-300 ease-in-out hover:scale-110 hover:text-green-600"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link
                  to="about"
                  smooth={true}
                  duration={700}
                  offset={-navBarHeight}
                  className="cursor-pointer duration-300 ease-in-out hover:scale-110 hover:text-green-600"
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={700}
                  offset={-navBarHeight}
                  className="cursor-pointer duration-300 ease-in-out hover:scale-110 hover:text-green-600"
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={700}
                  offset={-navBarHeight}
                  className="cursor-pointer duration-300 ease-in-out hover:scale-110 hover:text-green-600"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          )}
        </div>
      </motion.nav>
      <SideBar menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default NavBar
