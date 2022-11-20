import React, { useEffect } from 'react'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ImageSlider = ({ images }) => {
    const slides = images
    const [current, setCurrent] = useState(0)

    const gotToPrevious = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }
    const gotToNext = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }
    const gotToSlide = (index) => {
        setCurrent(index)
    }
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        });
    }, [])
    return (

        <div className=' relative
                    mx-auto  
                    md:w-[100vh] sm:w-[70vh] ss:w-[50vh] sss:w-[40vh] xs:w-[35vh] w-[35vh] 
                    md:h-[70vh] sm:h-[50vh] ss:h-[35vh] sss:h-[28vh] xs:h-[25vh] h-[25vh]
                    transition ease-in-out delay-150 hover:-translate-y-1 
                    hover:scale-110  duration-300

        '>
            <img loading="lazy" data-aos="fade-in" className={`absolute bg-fill bg-no-repeat bg-center  object-fill w-full h-full 

            
                 `} src={slides[current]} />
            <div className='absolute top-[50%] z-10 md:text-[40px] text-[30px] text-white font-bold cursor-pointer
             left-[3%] 
            transform -translate-y-1/2
            '
                onClick={gotToPrevious}>❮</div>
            <div className='absolute top-[50%] z-10 md:text-[40px] text-[30px] text-white font-bold cursor-pointer
            right-[3%] 
            transform -translate-y-1/2
            '
                onClick={gotToNext}>❯</div>




            <ul className=' absolute bottom-[8%] h-0 w-full  mx-auto  z-10 sm:text-[80px] text-[50px] justify-center flex flex-row items-center   '>
                {slides.map((slide, index) => (

                    <li className={` pr-1 ${index == current ? "text-primary opacity-90" : "text-white"} h-auto  font-bold cursor-pointer`} onClick={() => gotToSlide(index)} key={index}>
                        ·
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default ImageSlider