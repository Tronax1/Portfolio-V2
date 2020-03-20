import React from 'react'
import '../../Styles/ProjectCard.scss'

export default function ProjectCard({image, url}) {
    return (
        <div className = "Card-bg">
            <img className src={image} alt="" />
                <div className = "Card-Header">
                        <button>About</button>

                        <a href={url} target="_blank" rel="noopener noreferrer">
                            View Project</a>
                </div>
        </div>
    )
}
