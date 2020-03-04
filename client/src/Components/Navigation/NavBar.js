import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../Styles/NavBar.scss'

export default function NavBar() {
    return (
        <nav className = "Nav">
            <ul className = "Nav-Flex">
                <li>
                    <NavLink to = "/" exact>
                        <i class="fas fa-home fa-2x"></i> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About">
                        <i class="fas fa-address-card fa-2x"></i>
                        About</NavLink>
                </li>
                <li>
                    <NavLink to="/Projects">
                        <i class="fas fa-project-diagram fa-2x"></i>
                        Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">
                        <i class="fas fa-id-card-alt fa-2x"></i>
                        Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}
