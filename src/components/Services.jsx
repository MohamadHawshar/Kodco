import styles from '../style'
import {useEffect} from 'react'
import { services } from '../constants'
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Services = ({changeCategory}) => {
  
  useEffect(() => {
    Aos.init({duration: 2000,
      once: true});
  }, [])

  return (
    <section id="services" className={` bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
      <h2 className={`${styles.flexCenter} font-semibold md:text-[50px] text-[35px] text-gray-900 tracking-tight leading-tight mb-8`} >Services</h2>
      <div className={`${styles.flexCenter} bg-white px-0 w-full ${styles.paddingY}`}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            data-aos="fade-in"
            data-aos-anchor-placement="bottom-bottom"
            key={service.id}
            className="group block bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary aos-init aos-animate"
            onClick={() => { changeCategory(service.id); }}
          >
            {/* Image wrapper: fixed height so all images line up */}
            <Link to="/Projects" className="block">
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  loading="lazy"
                  src={service.icon}
                  alt={service.title}
                  title={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col h-full">
                <h3 className="font-semibold text-lg md:text-xl mb-2 text-center">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 flex-1 text-center">{service.content}</p>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
      <Link to={`/Projects#Projects`}>
          <button className=' flex flex-1  w-[200px] text-white m-auto h-[42px] ss:w-[300px] ss:h-[60px] 
        drop-shadow uppercase hover:grow
        bg-primary ss:text-[18px] text-[11px]
        transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110 hover:bg-secondary duration-300'>
          <p className='m-auto '>Réalisation</p>
          </button>
        </Link>
    </section>
  )
}

export default Services