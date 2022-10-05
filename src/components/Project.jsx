import React from 'react'
import styles from '../style'
const Project = ({ key, index, project }) => {
    return (
        <div className={`${project.id % 2 == 0 ? 'bg-secondary text-white' : 'bg-white text-black'}
                        ${styles.flexCenter} flex flex-col items-center justify-center w-full  ${styles.paddingY}`}>
            <div className={`${styles.flexCenter} px-0 w-full 
                                flex-1 items-center sm:flex-row flex-col flex-wrap justify-evenly ${styles.paddingY}`}
            >
                <div className=''>
                    <h1 className={`${styles.flexCenter} font-semibold text-[24px]`}>{project.title}</h1>
                    <p className={`${styles.flexCenter} text-[14px]`}>{
                    project.description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))
                    }</p>
                </div>
                <div>2</div>
            </div>

        </div>
    )
}

export default Project