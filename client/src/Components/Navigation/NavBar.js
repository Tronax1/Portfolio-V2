import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import '../../Styles/NavBar.scss'

function NavBar() {
    return (
        <nav className = "Nav">
            <ul className = "Nav-Flex">
                <li>
                    <NavLink className = "Nav-Links" activeClassName = "Active" to = "/" exact>
                        <i className="fas fa-home fa-2x"></i>
                        <span>Hello</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="Nav-Links" activeClassName="Active" to = "/About">
                        <i className="fas fa-address-card fa-2x"></i>
                        <span>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="Nav-Links" activeClassName="Active" to = "/Projects">
                        <i className="fas fa-project-diagram fa-2x"></i>
                        <span>Projects</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="Nav-Links" activeClassName="Active" to = "/Contact">
                        <i className="fas fa-envelope fa-2x"></i>
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default withRouter(NavBar);
