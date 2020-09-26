import React from 'react'
import ProjectCard from './ProjectCard'
import '../../Styles/ProjectsPage.scss'
import Projects from './Projects'

const ProjectsPage: React.FC = () => {

    const displayProjects = () => {
        return Projects.map((item, i) => (
                <ProjectCard key={i} image={item.img} url={item.URL}
                    description={item.Description} technologies={item.Technologies} title={item.title} />
            ))
    }
    return (
        <div className = "Project-Flex">
            {displayProjects()}
        </div>
    )
}
export default ProjectsPage;
