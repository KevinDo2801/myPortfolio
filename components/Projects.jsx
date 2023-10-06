import React from "react";
import data from "../data_projects";

export default function Projects() {
  const firstThreeProjects = data.slice(0, 3);

  const image = (project)=>(
    <a target="_blank" href={project.web} className="image">
      <img src={`../assets/${project.img}`} alt={project.alt} />
    </a>
  )

  const infoProject = (project)=>(
  <div className="item__info">
  <h3 className="item__title">{project.title}</h3>
  <p className="item__descriptive">
    {project.description}
  </p>
  <div className="framework" dangerouslySetInnerHTML={{ __html: project.framework }}>
    
  </div>
  <div className="code__demo">
    <span>
      <a target="_blank" href={project.code}>
        Code <i className="fab fa-github"></i>
      </a>
    </span>
    <span>
      <a target="_blank" href={project.web}>
        Live Demo <i className="fa fa-external-link-alt"></i>
      </a>
    </span>
  </div>
</div>)

  return (
    <section className="projects" id="projects">
      <h3 className="section__title">PORTFOLIO</h3>
      <h2 className="sub__title">Each project is a unique of development 💡</h2>

      <div className="portfolio">
      {firstThreeProjects.map(project => (
        <div className="portfolio__item" key={project.id}>
            {image(project)}
            {infoProject(project)}
        </div>
      ))}
      </div>
    </section>
  );
}
