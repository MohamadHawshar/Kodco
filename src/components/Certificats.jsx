import React from 'react'
import { certificats } from '../constants'
import styles from '../style'


const Certificats = () => {
  return (
    <section id="Certificates" className={` bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
      <h1 className={`${styles.flexCenter} font-semibold text-[30px]`} >Nos Certificats</h1>
      <div className={`${styles.flexCenter} bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col flex-wrap justify-evenly ${styles.paddingY}`}>
        {certificats.map((certificate,index) => (
          
          <div key={certificate.id} className=" flex flex-col
            justify-start items-center lg:p-16 p-4 
        h-auto w-auto"
          >
            
            <img src={certificate.image} alt={certificate.alt} className={`${styles.flexCenter} sm:w-[150px] w-[90px] transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110  duration-300`}/>

            
          </div>
          
        ))}
      </div>
    </section>
  )
}

export default Certificats