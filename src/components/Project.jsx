import React from 'react'
import styles from '../style'
import ImageSlider from './ImageSlider'

const Project = ({  index, project }) => {
    return (

        <div className={`${project.id % 2 == -1 ? 'bg-secondary text-white' : ' text-black'}
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