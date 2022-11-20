import React from 'react'
import styles from '../style'
import {  socialMedia, footerLinks } from '../constants'

const Contact = () => {
  return (
    <div className={`${styles.paddingY} ${styles.paddingX} flex-auto `}>
          <h2 className={`font-semibold mb-[18px] lg:text-[30px] text-[20px] text-white  `} >
            Contactez-Nous
          </h2>
          <hr className='w-[111px]  border-white border-t-[5px] mb-[50px]' />
          <div className='flex flex-col'>
            <ul className='list-none flex flex-row flex-1 mb-[50px]'>
              {socialMedia.map((link) => (

                <li
                  key={link.id}
                  className={`text-white fill-slate-600 cursor-pointer lg:text-[30px] text-[20px] mr-7
                  transition ease-in-out delay-150 hover:-translate-y-1 
                hover:scale-110  duration-300
                `}>
                  <a href={`${link.link}`}>
                    <img loading="lazy" src={`${link.icon}`} alt={`${link.id} `} title={`${link.id} `}/>
                  </a>
                </li>
              ))}
            </ul>
            <ul className='list-none flex flex-col flex-1'>
              {footerLinks.map((item, index) => (
                <li className='mb-[50px] flex flex-row' key={item.id}>
                  <img loading="lazy" src={`${item.icon}`} className="mr-3 justify-center w-5" alt={`${item.name}  `} title={`${item.name}  `} />
                  <span className="text-white lg:text-[18px] text-[14px]">{item.value}</span>

                </li>
              ))}
            </ul>
          </div>
        </div>
  )
}

export default Contact