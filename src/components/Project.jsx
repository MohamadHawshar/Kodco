import React from 'react'
import styles from '../style'
import { arrow } from '../assets'
import ImageSlider from './ImageSlider'

const Project = ({  index, project }) => {
    return (
        // <div className={`${project.id % 2 == -1 ? 'bg-secondary text-white' : 'bg-white text-black'}
        //                 ${styles.flexCenter} flex flex-col items-center justify-center w-full  ${styles.paddingY}
        //                 `}
        //                 key={index}>
        //     <div className={`${styles.flexCenter} px-0 w-full 
        //                          items-center md:flex-row flex-col  justify-center  `}
        //     >
        //         <div className={`text-left hidden ${styles.marginX}`}  >
        //             <h1 className={` font-semibold sm:text-[40px] text-[24px] md:mb-12 mb-6 text-center`}>{project.title}</h1>
        //             <ul className={` list-none sm:text-[24px] text-[16px] flex flex-col flex-1`}>{
        //                 project.description.map((desc, index) => (
        //                     <li className='mb-3 flex flex-row' key={index}>
        //                         <img src={arrow} alt="arrow" className="justify-center  sm:w-5 w-4 sm:h-10 h-6 sm:mr-7 mr-2 " />
        //                         <p className={` sm:pb-3 pb-2 sm:text-[16px] text-[14px] flex-initial`} key={index}>{desc}</p>
        //                     </li>
        //                 ))
        //             }
        //             </ul>
        //         </div>
        //         <div className='flex mt-10'>
        //             <ImageSlider images={project.images} />
        //         </div>
        //     </div>

        // </div>

        <div className={`${project.id % 2 == -1 ? 'bg-secondary text-white' : 'bg-white text-black'}
                        ${styles.flexCenter} flex flex-col items-center justify-center w-full  ${styles.paddingY}
                        `}
                        key={index}>
            <div className={`${styles.flexCenter} px-0 w-full 
                                 items-center md:flex-row flex-col  justify-center  `}
            >

                <div className='flex '>
                    <ImageSlider images={project.images} />
                </div>
            </div>

        </div>
    )
}

export default Project