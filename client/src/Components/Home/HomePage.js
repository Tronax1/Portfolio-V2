import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../Styles/HomePage.scss'

export default function HomePage() {
    return (
        <div className="Home-Flex">
            <span>
                Hello, my name is Jorge Villarreal
            </span>
            <NavLink to="/Projects">My Work</NavLink>
        </div>
    )
}
