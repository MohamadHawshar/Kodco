import styles from '../style'
import { navLinks, socialMedia, footerLinks } from '../constants'
import Map from './Map';
import Form from './Form';
import Footer_Services from './Footer_Services'
import Contact from './Contact';

const Footer = () => {
  return (
    <section id='Contact' className={`bg-[#1C2D58] px-0 flex flex-col justify-center`}>

      <div className={` justify-center items-center ${styles.marginX} sm:mt-16 mt-6`}>
        <Map />
      </div>
      <div className={`flex md:flex-row flex-col justify-between `}>
        <Form />
        <Footer_Services />
        <Contact />
      </div>
    </section>

  )
}

export default Footer