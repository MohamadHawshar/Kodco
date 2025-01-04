import React, { useState } from 'react'
import styles from './style'
import { Navbar, Hero, Services, Footer, Copyright, Projects, Certificats } from './components'
import { Route, Routes } from 'react-router-dom'


const App = () => {

  const [category, setCategory] = useState("all");

  const changeCategory = (index) => { // the callback. Use a better name
    console.log(index);
    setCategory(index);
  };

  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className={` ${styles.flexCenter} bg-white w-full top-0 z-50 md:fixed`} >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path={"/"} element={
              <div>
                <Services changeCategory={changeCategory} />
                
                <Certificats />
              </div>

            } />
            <Route path="/projects" element={<Projects category={category} changeCategory={changeCategory} />} />
          </Routes>
          <Footer />
          <Copyright />

        </div>
      </div>
    </div>
  )
}

export default App