import React from 'react'
import '../../Styles/ProjectCard.scss'
import Modal from '../Modal/Modal'
import {useState} from 'react'

interface ProjectCardProps{
    title: string,
    image: string,
    url: string,
    description: string,
    technologies: Array<string>
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, image, url, description, technologies}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className = "Card-bg">
                <img src={image} alt="" />
                    <div className = "Card-Header">
                            <button onClick={()=>setShow(!show)}>About</button>

                            <a href={url} target="_blank" rel="noopener noreferrer">
                                View Project</a>
                    </div>
            </div>
            <Modal show={show} toggleShow={setShow} modalDesc = {description} modalTech = {technologies} modalTitle={title}/>
        </>
    )
}
export default ProjectCard;
