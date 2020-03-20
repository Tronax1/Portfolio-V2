import React from 'react'
import ProjectCard from './ProjectCard'
import '../../Styles/ProjectsPage.scss'
import Projects from './Projects'

export default function ProjectsPage() {
    return (
        <div className = "Project-Flex">
            {Projects.map((item, i) =>(
                <ProjectCard key={i} image={item.img} url={item.URL}/>
            ))}
        </div>
    )
}
