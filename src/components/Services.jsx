import styles from '../style'
import { services } from '../constants'

const Services = () => {
  return (
    <section id="services" className={` bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
      <h1 className={`${styles.flexCenter} font-semibold text-[30px]`} >Services</h1>
      <div className={`${styles.flexCenter} bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col flex-wrap justify-evenly ${styles.paddingY}`}>
        {services.map((service,index) => (
          <button key={service.id} className=" flex flex-col border-[1px] 
           shadow-lg justify-start items-center p-4 m-3 
        xs:text-[14px] ss:text-[14px] md:text-[18px]
        xs:w-[258px] ss:w-[358px] md:w-[30%]  transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110  duration-300"
        
          >
            <img src={service.icon} alt={service.title} className="m-3 w-[80px]  h-[80px] transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110  duration-300" />
            <h4 className=' font-semibold text-[24px] m-3' >{service.title}</h4>
            <p className=" text-left">{service.content}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Services