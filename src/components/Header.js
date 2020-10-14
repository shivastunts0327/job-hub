import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/homepage/logo.svg';
import india from '../../public/images/india.svg';
import Modal from 'react-modal';

const Header = () => {
    const [navLinkOpen, navLinkToggle] = useState(false);
    
    const handleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen)
    }

    const renderClasses = () => {
        let classes = "navlinks";
        if (navLinkOpen) {
            classes += " active"
        }
        return classes
    }



    const [modalIsOpen, setModalIsOpen] = useState(false)

    var modalCustomStyles = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          borderRadius: '20px',
          padding: '0',
          transform: 'translate(-50%, -50%)',
          height: '500px', // <-- This sets the height
          width: '78%',
          overlfow: 'scroll' // <-- This tells the modal to scroll
        }
      };


    return (
        <nav>
            <div className="logo">
                <img src={logo} className="ihs-logo"></img>
                <p className="beta-tag">BETA</p>
            </div>
            <ul className={renderClasses()}>
                <li>
                    <Link to='/about-us' className="link">About us</Link>
                </li>
                <li>
                    <Link to='/blog-grid' className="link">Blog</Link>
                </li>
                <li>
                <Link to='/advisory' className="link">Advisory</Link>
                </li>
                <li>
                    <Link to='/contact-us' className="link">Contact us</Link>
                </li>
                <li>
                <Link to='/login' className="link" >Login</Link>
                </li>
                
                <li className="bell">
                    <i className="fas fa-bell"></i>
                </li>
                <li>
                    <img src={india} className="india"></img>
                </li>
            </ul>
            <div onClick={handleNavLinksToggle} className="hamburger-toggle">
                <i className="fas fa-bars fa-lg"></i>
            </div>


            <Modal
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                style ={modalCustomStyles}
            >
                <div className="flexbox">
                    <div className="modal-left-login">
                            
                    </div>
                    <div className="modal-right">
                        <div className="modal-header">
                            <h2 className="login-account">LOGIN</h2>
                            <div className="modal-header-flex">
                                <i className="fas fa-times"
                                    aria-hidden="true"
                                    onClick={() => setModalIsOpen(false)}
                                ></i>
                                <div className="modal-login">
                                    <p className="newUser">I'm a new user?</p>
                                    <Link to='/signup' className="signup">signup</Link>
                                </div>
                            </div>
                        </div>
                        
                        <form>
                            <div className="modalIcon">
                                <input type="text" placeholder="Email" className="form-styling" />
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div className="modalIcon">
                                <input type="text" placeholder="Password" className="form-styling" />
                                <i className="fas fa-lock" aria-hidden="true"></i>
                            </div>
                            <div className="checkbox-flex">
                                <div className="login-flex">
                                    <input type="checkbox" className="checkbox"/>
                                    <label className="accept">Remember me</label>
                                </div>
                                <Link to='/forgot' className="forgot">Forgot password?</Link>
                            </div>
                            <button type="submit" className="modal-register">LOGIN<i className="fas fa-arrow-right" aria-hidden="true"></i></button>
                        </form>
                        <p className="connect">Or connect with</p>
                        <div className="form-flex">
                            <button className="social-login-facebook">Login with<i className="fab fa-facebook-f" aria-hidden="true"></i></button>
                            <button className="social-login-google">Login with<i className="fab fa-google" aria-hidden="true"></i></button>
                            <button className="social-login-linkedin">Login with<i className="fab fa-linkedin-in" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    </div>
            </Modal>



        </nav>
    )
}



export default Header

