import styles from '../style'
import { projects, categories } from '../constants'
import Project from './Project'

const Projects = () => {
  return (
    <section id="Projects" className={` bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col ${styles.paddingY} `}>
      
        <hr className={` ${styles.marginX}  border-t-neutral-600 border-t-[1px] mb-2`} />
        <ul className={`list-none flex flex-row flex-1 items-start justify-start ${styles.marginX}`}>
            {categories.map((category, index) => (
                <li className={`flex flex-row text-[20px] mr-5`} key={index}>
                    {category}
                </li>
            ))}
        </ul>
        <hr className={`${styles.marginX}  border-t-neutral-600 border-t-[1px] mt-2`} />
      
      {projects.map((project, index) => (
        <Project key={project.id} project={project} index={index}/>
      ))
      }
      

    </section>
  )
}

export default Projects