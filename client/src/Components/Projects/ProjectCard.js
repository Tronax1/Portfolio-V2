import React from 'react'
import '../../Styles/ProjectCard.scss'
import TestImage from '../Images/test image.jpg'

export default function ProjectCard() {
    return (
        <div className = "Card-bg">
            <img src={TestImage} alt="" />
                <div className = "Card-Header">
                </div>
        </div>
    )
}
