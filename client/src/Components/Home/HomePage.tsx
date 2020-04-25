import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../Styles/HomePage.scss'

const HomePage: React.FC = () => {
    return (
        <>
            <div className="background-container">
                    <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className="clouds"></div>
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
export default HomePage;
