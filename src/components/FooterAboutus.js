import React from 'react';
import { Link } from 'react-router-dom';
//import bg from '../../public/images/footer/bg.svg';
import icon from '../../public/images/footer/icon.svg';


const FooterAboutus = () => {
    return (
        <div className="footer-bg-aboutus">
            <div className="footer-flex">
                <div className="footer-1">
                    <img src={icon}></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='footer-2'>
                    <p>Information</p>
                    <Link to='/about' className="footer-link"><i className="fas fa-caret-left"></i>About us</Link>
                    <Link to='/contact-us' className="footer-link"><i className="fas fa-caret-left"></i>Contact us</Link>
                    <Link to='/privacy-policy' className="footer-link"><i className="fas fa-caret-left"></i>Privacy policy</Link>
                    <Link to='/terms' className="footer-link"><i className="fas fa-caret-left"></i>Terms & Conditions</Link>
                </div>
                <div className="footer-2">
                    <p>Job Seekers</p>
                    <Link to='/jobseeker/register' className="footer-link"><i className="fas fa-caret-left"></i>Create account</Link>
                    <Link to='/login' className="footer-link"><i className="fas fa-caret-left"></i>Login</Link>
                    <Link to='/advisory' className="footer-link"><i className="fas fa-caret-left"></i>Career Advisory</Link>
                </div>
                <div className="footer-2">
                    <p>Employee</p>
                    <Link to='/create-account' className="footer-link"><i className="fas fa-caret-left"></i>Create account</Link>
                    <Link to='/login' className="footer-link"><i className="fas fa-caret-left"></i>Login</Link>
                    <Link to='/pricing' className="footer-link"><i className="fas fa-caret-left"></i>Pricing</Link>
                    <Link to='/post-a-job' className="footer-link"><i className="fas fa-caret-left"></i>Post a job</Link>
                    <Link to='/call' className="footer-link"><i className="fas fa-caret-left"></i>Demo</Link>
                </div>
            </div>
            <div className="newsletter">
                <div>
                    <h1>NEWSLETTER</h1>
                    <p>Subscribe To Newsletter To Stay Upto Date On Our Latest News</p>
                </div>
                <div className="footer-subscribe">
                    <input type="text" name="email" placeholder="Email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-ending">
                <p>Copyright 2020</p>
            </div>
        </div>
    );
};

export default FooterAboutus;