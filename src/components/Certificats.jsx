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
    <section id="Certificates" data-aos="slide-left" data-aos-duration="3000" data-aos-anchor-placement="top-center" className={`px-0 w-full bg-[url('src/assets/bg.jpg')] bg-center bg-fixed no-repeat bg-cover bg-opacity-5
    flex-1 items-center sm:flex-row flex-col ${styles.paddingY} ${styles.paddingX} md:rounded-tl-[300px]
     `}>
      <h1 className={`${styles.flexCenter} font-semibold md:text-[50px] text-[35px] mt-5 `} >Nos Certifications</h1>
      <div className={`${styles.flexCenter}  px-0 w-full 
    flex-1 items-center sm:flex-row flex-col flex-wrap justify-evenly ${styles.paddingY} `}>
        {certificats.map((certificate,index) => (
          
          <div key={certificate.id} className=" flex flex-col 
            justify-start items-center lg:p-16 p-4 
        h-auto w-auto mb-5"
          >
            
            <img data-aos="fade-in" data-aos-duration="5000" data-aos-anchor-placement="top-center" src={certificate.image} alt={certificate.alt} className={`${styles.flexCenter} sm:w-[150px] w-[90px] ${certificate.title == "ccq"? 'scale-150 ' : 'scale-100'} h-auto transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110  duration-300`}/>

            
          </div>
          
        ))}
      </div>
    </section>
  )
}

export default Certificats