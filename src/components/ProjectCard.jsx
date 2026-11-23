function ProjectCard({category, title, description, caseStudyLink}) {
    return (
        <article className="project-block">
            <div className="project-block__details">
                <p className="project-block__title">{category}</p>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Link to Case Study</p>
            </div>
            <div className="project-block__visuals">
                <p></p>
            </div>
        </article>
    )
}

export default ProjectCard