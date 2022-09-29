import styles from '../style'
import {house_hero} from '../assets'
const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col 
    ${styles.paddingY} sm:pt-[150px] pt-[130px] bg-hero-pattern
    md:bg-cover md:bg-top bg-center bg-cover  bg-no-repeat 
    `} title="kodco construction house image">
    <div className={`flex-1  `}>
      <div className='flex flex-col justify-between w-full items-center font-poppins
       text-white  '>
        <h1 className='flex-1 font-semibold ss:text-[32px] text-[18px]'>Kodco Construction</h1>
        <p className='py-[50px] xs:px-[10%] sm:px-[25%] px-[20%] ss:text-[18px] text-[11px]'>Lorem ipsum dolor sit amet. Ut doloremque consequatur aut libero sunt ut minima doloribus 
        ut enim quasi! Id voluptas et totam vitae et rerum quos ut ipsa culpa.   Lorem ipsum dolor sit amet. 
        Ut doloremque consequatur aut libero sunt ut minima doloribus ut enim quasi! Id voluptas et totam vitae et rerum quos ut ipsa culpa.   </p>
        <button className='w-[180px] h-[32px] ss:w-[240px] ss:h-[40px] 
        drop-shadow uppercase hover:grow
        bg-primary ss:text-[18px] text-[11px]
        transition ease-in-out delay-150 hover:-translate-y-1 
        hover:scale-110 hover:bg-secondary duration-300'>Nos Réalisation</button>
      </div>
    </div>
  </section>
)
export default Hero