import styles from '../style'
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col 
    ${styles.paddingY} sm:pt-[150px] pt-[120px]  
    md:bg-cover md:bg-top bg-center bg-cover  bg-no-repeat 
     md:h-[90vh] sm:h-[70vh] h-[60vh]
    `} title="PVP construction house image">
    {/* <div className={`flex w-full justify-center items-center`}>
      <div className=' flex flex-col justify-center bg-primary-gradient-hero bg-opacity-60 xl:w-[800px] sm:w-[600px] w-[300px] items-center font-poppins
       text-white sm:py-14 py-8 '>
        <h1 className='flex-1 font-semibold xl:text-[38px] ss:text-[32px] text-[18px]'>PVP Construction</h1>
        <p className='md:pt-[40px] pt-[15px] xs:px-[10%] sm:px-[10%] px-[0%] xl:text-[24px] ss:text-[18px] text-[12px] text-center'>
          Tout projet doit être entrepris par des professionnels.<br></br> Avec PVP Construction, vous pouvez compter sur une équipe expérimentée capable de fournir des services immobiliers efficaces et fiables, de la conception à la réalisation. Contactez-nous dès aujourd'hui pour une consultation gratuite !
        </p>
        <Link to={`/Projects#Projects`}>
          <button className='w-[180px] h-[32px] ss:w-[240px] ss:h-[40px] 
        drop-shadow uppercase hover:grow
        bg-primary ss:text-[18px] text-[11px]
        transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110 hover:bg-secondary duration-300 hidden'>Réalisation</button>
        </Link>
      </div>
    </div> */}
  </section>
)
export default Hero