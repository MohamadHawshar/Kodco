import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const getLinkDestination = (nav) => {
    if (nav.id.toLowerCase() === 'projects') {
      return '/projects#Projects'
    }

    return `/#${nav.id}`
  }

  return (
    <nav
      className="
        relative flex w-full items-center justify-between
        border-b border-slate-200 bg-white
        px-4 py-2 shadow-[0_4px_20px_rgba(15,23,42,0.08)]
        sm:px-8 lg:px-12
      "
    >
      {/* Logo */}
      <Link
        to="/#home"
        className="flex shrink-0 items-center"
        onClick={() => setToggle(false)}
      >
        <img
          src={logo}
          title="PVP Construction"
          alt="PVP Construction"
          className="
            h-auto w-[155px] object-contain
            sm:w-[185px]
            md:w-[220px]
          "
        />
      </Link>

      {/* Desktop navigation */}
      <ul className="hidden flex-1 items-center justify-end gap-8 sm:flex lg:gap-11">
        {navLinks.map((nav, index) => {
          const isProjects = nav.id.toLowerCase() === 'projects'

          return (
            <li
              key={nav.id}
              className="font-poppins text-[16px] font-medium uppercase"
            >
              <Link
                smooth
                to={getLinkDestination(nav)}
                className={
                  isProjects
                    ? `
                      inline-flex items-center justify-center
                      bg-[#00ADED] px-6 py-3 text-white
                      transition duration-300
                      hover:bg-[#0088B5]
                    `
                    : `
                      relative py-3 text-slate-800
                      transition duration-300
                      hover:text-[#00ADED]
                      after:absolute after:bottom-1 after:left-0
                      after:h-[2px] after:w-0 after:bg-[#00ADED]
                      after:transition-all after:duration-300
                      hover:after:w-full
                    `
                }
              >
                {nav.title}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Mobile menu button */}
      <button
        type="button"
        className="flex items-center justify-center sm:hidden"
        onClick={() => setToggle((previous) => !previous)}
        aria-label={toggle ? 'Close menu' : 'Open menu'}
        aria-expanded={toggle}
      >
        <img
          src={toggle ? close : menu}
          alt=""
          className="h-8 w-8 object-contain"
        />
      </button>

      {/* Mobile navigation */}
      <div
        className={`
          absolute right-4 top-full z-50 mt-3
          w-[230px] rounded-xl border border-slate-200
          bg-white p-5 shadow-2xl
          ${toggle ? 'flex' : 'hidden'}
          sm:hidden
        `}
      >
        <ul className="flex w-full flex-col">
          {navLinks.map((nav) => {
            const isProjects = nav.id.toLowerCase() === 'projects'

            return (
              <li
                key={nav.id}
                className="font-poppins text-[15px] font-medium uppercase"
              >
                <Link
                  smooth
                  to={getLinkDestination(nav)}
                  onClick={() => setToggle(false)}
                  className={
                    isProjects
                      ? `
                        mt-2 block bg-[#00ADED] px-4 py-3
                        text-center text-white
                      `
                      : `
                        block border-b border-slate-100
                        px-2 py-4 text-slate-800
                        transition hover:text-[#00ADED]
                      `
                  }
                >
                  {nav.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar