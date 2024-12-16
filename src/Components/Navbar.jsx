import React from 'react'
// import logo from '../assets/react-portfolio-assets-kevin-main/assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <h2 className='text-white text-xl px-8 '>MS</h2>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedin/>
      <FaGithub/>
      <FaInstagram/>
      <FaFacebook/>
    </div>
  </nav>
}

export default Navbar