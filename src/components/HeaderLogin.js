import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/header2/whiteLogo.svg';

const HeaderLogin = () => {
    const [navLinkOpen, navLinkToggle] = useState(false);
    
    const handleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen)
    }

    const renderClasses = () => {
        let classes = "navlink";
        if (navLinkOpen) {
            classes += " active"
        }
        return classes
    }

    return (
        <div className="nav">
            <div className="whitelogo">
                <Link to='/'>
                    <img src={logo} className="ihs-whitelogo"></img>
                </Link>
            </div>
            <ul className={renderClasses()}>
                <li>
                    <Link to='/' className="links">Home</Link>
                </li>
                <li>
                    <Link to='/advisory' className="links">Advisory</Link>
                </li>
                <li>
                    <Link to='/contact-us' className="links">Contact us</Link>
                </li>
                <li>
                    <Link to='/jobseeker/register' className="links">Register</Link>
                </li>
            </ul>
            <div onClick={handleNavLinksToggle} className="hamburger-Toggle">
                <i className="fas fa-bars fa-lg"></i>
            </div>

        </div>
    )
}

export default HeaderLogin;