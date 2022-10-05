import React from 'react'
import styles from '../style'
import { arrow } from '../assets'

const Project = ({ key, index, project }) => {
    return (
        <div className={`${project.id % 2 == 0 ? 'bg-secondary text-white' : 'bg-white text-black'}
                        ${styles.flexCenter} flex flex-col items-center justify-center w-full  ${styles.paddingY}
                        `}>
            <div className={`${styles.flexCenter} px-0 w-full 
                                 items-center md:flex-row flex-col  justify-center  `}
            >
                <div className={`text-left ${styles.marginX}`}  >
                    <h1 className={` font-semibold sm:text-[40px] text-[24px] md:mb-12 mb-8 text-center`}>{project.title}</h1>
                    <ul className={` list-none sm:text-[24px] text-[16px] flex flex-col flex-1`}>{
                        project.description.map((desc, index) => (
                            <li className='mb-3 flex flex-row' key={index}>
                                <img src={arrow} alt="arrow" className="justify-center  sm:w-5 w-4 sm:h-10 h-7 sm:mr-7 mr-4 " />
                                <p className={` pb-3 flex-initial`} key={index}>{desc}</p>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className='flex mt-10'>
                    <img src={project.images[0]} alt={project.title} className=" mx-auto  
                    xl:w-[700px]  lg:w-[800px] md:w-[500px] w-[90%]  
                    xl:h-[450px] lg:h-[500px] md:h-[300px] h-[60%]" />
                </div>
            </div>

        </div>
    )
}

export default Project