import React from 'react'
import ProjectCard from './ProjectCard'
import '../../Styles/ProjectsPage.scss'
import Projects from './Projects'

const ProjectsPage: React.FC = () => {
    return (
        <div className = "Project-Flex">
            {Projects.map((item, i) =>(
                <ProjectCard key={i} image={item.img} url={item.URL} 
                description={item.Description} technologies={item.Technologies} />
            ))}
        </div>
    )
}
export default ProjectsPage;
