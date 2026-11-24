import ProjectCard from "../components/ProjectCard"

function Work () {
    return (
        <main className="work-content">
            <section className="work-block">
                <h1>Selected Work</h1>
                <p>Thoughtful digital experiences where technology, creativity,
                    and human connection meet
                </p>
            </section>
            <section className="project-content">
                <ProjectCard
                    category="01 / Product Engineering"
                    title="Better Kitchen" 
                    description="Receipt Scanning and Inventory Entry"
                    caseStudyLink="/work/better-kitchen"
                />
                <ProjectCard
                    category="02 / Full Stack Engineering"
                    title="Infinity Keys"
                    description="Discord Engagement System"
                    caseStudyLink="/work/infinity-keys"
                />
                <ProjectCard
                    category="03 / Creative Technology"
                    title="Poem Generator"
                    description="Interactive Poetry through Motion and Play"
                    caseStudyLink="/work/poem-generator"
                />
            </section>
        </main>
    )
}

export default Work