import React from 'react'
import styles from '../style'

const Form = () => {
  return (
    <div className={`${styles.paddingY} ${styles.paddingX} flex-auto `}>
    <h1 className={`font-semibold mb-[18px]  lg:text-[30px] text-[20px] text-white  `} >
        Envoi nous un couriel
    </h1>
    <hr className='w-[111px]  border-white border-t-[5px]' />
    <div className=''>
        <form name="contact_form" method="POST" className={`flex flex-col `} data-netlify="true"   netlify-honeypot="bot-field">
            <input type="text" id="fname" name="courriel" placeholder="Courriel" className={`mt-[25px] md:h-[40px] h-[35px] p-4`} />
            <input type="text" id="fname" name="nom" placeholder="Nom et Prenom" className={`mt-[15px] md:h-[40px] h-[35px] p-4`} />
            <textarea id="lname" name="contenue" placeholder="Contenu" className={`mt-[15px] md:h-[140px] h-[140px] p-4 `} />
            {/* <input type="file" className="mt-[15px] h-[50px] text-white" name="attachment" /> */}
            <div data-netlify-recaptcha="true"></div>
            <input type="hidden" name="form-name" value="contact_form" />
            <input type="submit" value="Envoyer" className={`mt-[15px] bg-secondary md:h-[50px] h-[35px] uppercase text-white 
          font-semibold cursor-pointer`} />
        </form>
    </div>
</div>
  )
}

export default Form