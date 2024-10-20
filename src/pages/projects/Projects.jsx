import React from 'react'
import { portfolio } from '../../data'
import ProjectsItem from '../../components/ProjectsItem'
import './projects.css' 

const Projects = () => {
  return (
    <section className="project section">
      <h2 className="section__title">
        My <span>Projects</span>
      </h2>

      <div className="projects__container container grid">
        {portfolio.map((item) =>{
          return <ProjectsItem  key={item.id} {...item}/>;
        })}
      </div>
    </section>
  )
}

export default Projects
