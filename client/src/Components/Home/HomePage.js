import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../Styles/HomePage.scss'

export default function HomePage() {
    return (
        <>
            <div class="background-container">
                    <div class="stars"></div>
                    <div class="twinkling"></div>
                    <div class="clouds"></div>
            </div>
        <div className="Home-Flex">
            <span>
                Hello, my name is Jorge Villarreal
            </span>
            <NavLink className = "Project-Re" to="/Projects">My Work</NavLink>
        </div>
        </>
    )
}
