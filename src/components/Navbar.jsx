import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from "../assets";
import { navLinks } from '../constants'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

  const [toggle, settoggle] = useState(false)
  return (
    <nav className=' bg-white w-full flex py-6 justify-between items-center navbar '>
      <Link to={`/#home`}>
        <img src={logo} alt="kodco construction"
        className="w-[100px] h-[32px]" />
        </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1" >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
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
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
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