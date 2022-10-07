import React from 'react'
import { useState } from 'react'
import { projects, categories } from '../constants'

const ImageSlider = ({ id, images }) => {
    const slides = images
    const [current, setCurrent] = useState(0)
    console.log(slides)
    const gotToPrevious = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }
    const gotToNext = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }
    const gotToSlide = (index) => {
        setCurrent(index)
    }
    return (
        <div className=' relative
                    mx-auto  
                    xl:w-[700px]  lg:w-[800px] md:w-[500px]  w-full
                    xl:h-[450px] lg:h-[500px] md:h-[300px] h-[60%]
                    transition ease-in-out delay-150 hover:-translate-y-1 
                    hover:scale-110  duration-300

        '>
            <img loading="lazy" className={` bg-cover bg-no-repeat bg-center 
                xl:w-[700px]  lg:w-[800px] md:w-[500px] w-[90%]  
                xl:h-[450px] lg:h-[500px] md:h-[300px] h-[60%]
                mx-auto 
                `} src={slides[current]} />
            <div className='absolute top-[50%] z-10 md:text-[40px] text-[30px] text-white font-bold cursor-pointer
            md:left-3 sm:left-12 left-6 
            transform -translate-y-1/2
            '
                onClick={gotToPrevious}>❮</div>
            <div className='absolute top-[50%] z-10 md:text-[40px] text-[30px] text-white font-bold cursor-pointer
            md:right-3 sm:right-12 right-6 
            transform -translate-y-1/2
            '
                onClick={gotToNext}>❯</div>

            


            <ul className=' absolute bottom-0 h-20 w-full  mx-auto  z-10 text-[80px] justify-center flex flex-row items-center   '>
                {slides.map((slide, index) => (

                    <li className={` pr-1 ${index == current ? "text-primary opacity-90" : "text-white"}  font-bold cursor-pointer`} onClick={() => gotToSlide(index)} key={index}>
                        ‧
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default ImageSlider