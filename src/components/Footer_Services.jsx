import React from 'react'
import styles from '../style'
import { navLinks } from '../constants'
import { HashLink as Link } from 'react-router-hash-link';
const Footer_Services = () => {
  return (
    <div className={`${styles.paddingY} ${styles.paddingX} flex-auto hidden md:block`}>
          <h2 className={`font-semibold mb-[18px] lg:text-[30px] text-[20px] text-white  `} >
            Nos services
          </h2>
          <hr className='w-[111px]  border-white border-t-[5px] mb-[50px]' />
          <ul className="list-none flex justify-end flex-col  flex-1" >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-white
                font-normal cursor-pointer lg:text-[18px] text-[14px]
                transition ease-in-out delay-150 hover:-translate-y-1 
                hover:scale-110  duration-300
            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-[50px]'}
            `}
              >
                
                <Link to={nav.id === "services" ? `/#${nav.id}`: nav.id === "Projects" ? `/Projects#Projects` : `#${nav.id}`}  >
                  {nav.title}
                </Link>
              </li>
            ))}

          </ul>
        </div>
  )
}

export default Footer_Services