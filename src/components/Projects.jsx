import styles from '../style'
import { projects, categories } from '../constants'
import Project from './Project'

const Projects = ({category, changeCategory}) => {
    console.log(category);
    let count = 0;
  return (
    <section id="Projects" className={` bg-white px-0 w-full 
    flex-1 items-center sm:flex-row flex-col sm:pt-16 pt-6 `}>
      
        <hr className={` ${styles.marginX}  border-t-neutral-600 border-t-[1px] mb-2`} />
        <ul className={`list-none flex flex-row flex-1 items-start justify-start ${styles.marginX}`}>
            {categories.map((category, index) => (
                <li className={`flex flex-row md:text-[20px] text-[12px] mr-5 font-semibold text-primary cursor-pointer`} onClick={() => changeCategory(category.id)} key={index}>
                    {category.title}
                </li>
            ))}
        </ul>
        <hr className={`${styles.marginX}  border-t-neutral-600 border-t-[1px] mt-2`} />
      
      {projects.filter(project => project.category.includes(category)).map((project, index) => (
        <Project key={project.id} project={project} index={index}/>
      ))
      }
      

    </section>
  )
}

export default Projects