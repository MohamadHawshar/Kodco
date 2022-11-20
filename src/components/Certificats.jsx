import React, {useEffect} from 'react'
import { certificats } from '../constants'
import styles from '../style'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Certificats = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

  return (
    <section   data-aos-anchor-placement="top-center" 
    className={`px-0 bg-primary w-full   bg-opacity-5
    flex-1 items-center sm:flex-row flex-col   
     `}>
      <div className={`${styles.paddingY} ${styles.flexCenter} bg-primary text-white font-poppins md:text-[50px] text-[30px] `}> 
      <a className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 
            hover:scale-110  duration-300" href="#Contact">
              Contactez-Nous</a>
      </div>
      <div data-aos="slide-left" data-aos-duration="2000" className=' bg-center bg-fixed no-repeat bg-cover' id="certificates">
      <h2 className={`${styles.flexCenter} ${styles.paddingY} font-semibold md:text-[50px] text-[35px]  `} >Nos Certifications</h2>
      <div className={`${styles.flexCenter}  ${styles.paddingX} px-0 w-full 
    flex-1 items-center sm:flex-row flex-col flex-wrap justify-evenly pb-5`}>
        {certificats.map((certificate,index) => (
          
          <div key={certificate.id} className=" flex flex-col 
            justify-start items-center lg:p-16 p-4 
        h-auto w-auto "
          >
            
            <img loading="lazy" data-aos="fade-in" data-aos-duration="4000" data-aos-anchor-placement="bottom-bottom" src={certificate.image} title={certificate.title}  alt={certificate.alt} 
            className={`${styles.flexCenter} sm:w-[150px] w-[90px] ${certificate.title == "ccq"? 'scale-150 ' : 'scale-100'} 
            h-auto transition ease-in-out delay-150 hover:-translate-y-1 
            hover:scale-110  duration-300`}/>

            
          </div>
          
        ))}
      </div>
      </div>
    </section>
  )
}

export default Certificats