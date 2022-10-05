import styles from '../style'
import { projects } from '../constants'
import Project from './Project'

const Projects = () => {
  return (
    <section id="Projects" className={` bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col ${styles.paddingY} `}>
      <h1 className={`${styles.flexCenter} font-semibold text-[30px]`} >Projects</h1>
      {projects.map((project, index) => (
        <Project key={project.id} project={project} index={index}/>
      ))
      }
      

    </section>
  )
}

export default Projects