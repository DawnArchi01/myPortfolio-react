import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoA from '../../assets/images/logoA.svg'
import name from '../../assets/images/name.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faEnvelope, faGear, faHome, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={logoA} alt='logo' />
                <img className= 'sub-logo' src={name} alt='Archisman' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname="active" className='about-link' to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname="active" className='projects-link' to='/projects'>
                    <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname="active" className='skills-link' to='/skills'>
                    <FontAwesomeIcon icon={faGear} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/archisman-d-203a3a207/'>
                        <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e' />
                    </a>
                </li>
            
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/DawnArchi01'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
            

           
                <li>
                    <a target='_blank' rel='noreferrer' href='https://archismandawn7.medium.com/'>
                        <FontAwesomeIcon icon={faBlog} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar