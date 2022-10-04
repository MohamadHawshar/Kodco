import styles from '../style'
import { navLinks, socialMedia, footerLinks } from '../constants'
import Map from './Map';


const Footer = () => {
  return (
    <section id='Contact' className={`bg-[#1C2D58] px-0 flex flex-col justify-center`}>

      <div className={` justify-center items-center ${styles.marginX} sm:mt-16 mt-6`}>
        <Map />
      </div>







      <div className={`flex md:flex-row flex-col justify-between `}>
        <div className={`${styles.paddingY} ${styles.paddingX} flex-auto `}>
          <h1 className={`font-semibold mb-[18px]  lg:text-[30px] text-[20px] text-white  `} >
            Envoi nous un couriel
          </h1>
          <hr className='w-[111px]  border-white border-t-[5px]' />
          <div className=''>
            <form name="contact_form" method="POST" className={`flex flex-col `} >
              <input type="text" id="fname" name="courriel" placeholder="Courriel" className={`mt-[25px] md:h-[40px] h-[35px] p-4`} />
              <input type="text" id="fname" name="nom" placeholder="Nom et Prenom" className={`mt-[15px] md:h-[40px] h-[35px] p-4`} />
              <textarea id="lname" name="contenue" placeholder="Contenu" className={`mt-[15px] md:h-[140px] h-[140px] p-4 `} />
              <input type="file" className="mt-[15px] h-[50px] text-white" name="attachment" ></input>
              <input type="hidden" name="form-name" value="contact_form" />
              <input type="submit" value="Envoyer" className={`mt-[0px] bg-secondary md:h-[50px] h-[35px] uppercase text-white 
              font-semibold cursor-pointer`} />
            </form>
          </div>
        </div>




        <div className={`${styles.paddingY} ${styles.paddingX} flex-auto hidden md:block`}>
          <h1 className={`font-semibold mb-[18px] lg:text-[30px] text-[20px] text-white  `} >
            Nos services
          </h1>
          <hr className='w-[111px]  border-white border-t-[5px] mb-[50px]' />
          <ul className="list-none flex justify-end flex-col  flex-1" >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-white
                font-normal cursor-pointer lg:text-[18px] text-[14px]
                transition ease-in-out delay-150 hover:-translate-y-1 
                hover:scale-110  duration-300
            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-[50px]'}
            `}
              >
                <a href={`#${nav.id}`}  >
                  {nav.title}
                </a>
              </li>
            ))}

          </ul>
        </div>


        <div className={`${styles.paddingY} ${styles.paddingX} flex-auto `}>
          <h1 className={`font-semibold mb-[18px] lg:text-[30px] text-[20px] text-white  `} >
            Contactez-Nous
          </h1>
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
                    <img src={`${link.icon}`} alt={`${link.link} kodco construction`} />
                  </a>
                </li>
              ))}
            </ul>
            <ul className='list-none flex flex-col flex-1'>
              {footerLinks.map((item, index) => (
                <li className='mb-[50px] flex flex-row' key={item.id}>
                  <img src={`${item.icon}`} className="mr-7 justify-center w-5" alt={`${item.name} kodco construction`} />
                  <span className="text-white lg:text-[18px] text-[14px]">{item.value}</span>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>

  )
}

export default Footer