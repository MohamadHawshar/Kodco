import React from 'react'
import styles from './style'
import { Navbar, Hero, Services, Footer, Copyright,Projects } from './components'
import { Route, Routes } from 'react-router-dom'

const App = () => (

  <div className='bg-white w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-white w-full fixed top-0 z-50`} >
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
          <Route path={"/"  } element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
        <Copyright />

      </div>
    </div>
  </div>
)


export default App