import styles from '../style'
import { services } from '../constants'
import { HashLink as Link } from 'react-router-hash-link';
const Services = ({changeCategory}) => {
  
  return (
    <section id="services" className={` bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
      <h1 className={`${styles.flexCenter} font-semibold text-[30px]`} >Services</h1>
      <div className={`${styles.flexCenter} bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col flex-wrap justify-evenly ${styles.paddingY}`}>
        {services.map((service,index) => (
          
          <button key={service.id} className=" flex flex-col border-[1px] 
           shadow-lg justify-start items-center m-3 
        xs:text-[14px] ss:text-[14px] md:text-[18px]
        xs:w-[258px] ss:w-[358px] md:w-[40%] 
        overflow-hidden
        transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110  duration-300"
        onClick={() => {
          changeCategory(service.id);
         }}
          >
            <Link to="/Projects" className={`${styles.flexCenter} flex flex-col`} >
            <img src={service.icon} alt={service.title} className={`${styles.flexCenter}  w-full  h-full transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110  duration-300`}/>
            <h4 className='  font-semibold text-[24px] mt-6' >{service.title}</h4>
            <p className="lg:px-16 lg:pb-16  p-4  text-left">{service.content}</p>
            </Link>
          </button>
          
        ))}
      </div>
      <Link to={`/Projects#Projects`}>
          <button className=' flex flex-1  w-[200px] text-white m-auto h-[42px] ss:w-[300px] ss:h-[60px] 
        drop-shadow uppercase hover:grow
        bg-primary ss:text-[18px] text-[11px]
        transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110 hover:bg-secondary duration-300'>
          <p className='m-auto '>Nos Réalisation</p>
          </button>
        </Link>
    </section>
  )
}

export default Services