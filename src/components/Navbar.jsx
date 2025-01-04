import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from "../assets";
import { navLinks } from '../constants'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

  const [toggle, settoggle] = useState(false)
  return (
    <nav className=' bg-primary w-full flex sm:py-3 py-3  justify-between items-center navbar '>
      <Link to={`/#home`}>
        <img src={logo} title="PVP construction logo" alt="PVP construction"
        className="md:w-[150px] md:h-[62px] w-[100px] h-[60px]" />
        </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 pr-6" >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
            uppercase`}
          >
            {
                nav.id == 'Projects'? <Link to={`/${nav.id}#Projects`}><div className='bg-white text-black p-3'>{nav.title}</div></Link> : nav.id == 'home'? 
                <Link to={`/#home`}>{nav.title}</Link> : 
                nav.id == 'services'? <Link to={`/#services`}>{nav.title}</Link> :
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              }
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          title="menu"
          className="w-[40px] h-[40px] pr-3 object-contain filter invert-[100%] sepia-[0%] saturate-[0%] brightness-[100%] contrast-[100%]"
          onClick={() => settoggle((prev) => !prev)} />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 text-white bg-primary-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end flex-col items-center flex-1" >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins 
                font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
            uppercase`}
              >
                {
                nav.id == 'Projects'? <Link to={`/${nav.id}#Projects`}>{nav.title}</Link> : nav.id == 'home'? 
                <Link to={`/#home`}>{nav.title}</Link> : 
                nav.id == 'services'? <Link to={`/#services`}>{nav.title}</Link> :
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar