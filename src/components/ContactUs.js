import React from "react";
import { Link } from 'react-router-dom';
import HeaderAboutUs from "./HeaderAboutUs";
import ContactUsDetails from "./ContactUsDetails";
import FooterAboutus from "./FooterAboutus";


const ContactUs = () => {
    return (
        <div>
            <HeaderAboutUs />
            <div className="jobseeker-subheader">
                <div>
                    <a href='https://www.linkedin.com/groups/13896200/' target="_blank" className="fa"><i className="fab fa-linkedin"></i></a>
                    <a href='/twitter' className="fa"><i className="fab fa-twitter"></i></a>
                    <a href='/facebook' className="fa"><i className="fab fa-facebook"></i></a>
                    <a href='https://www.instagram.com/ihscareers.ai/' target="_blank" className="fa"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="contact-us-touch">
                <h1>KEEP IN TOUCH</h1>
            </div>
            <div>
                <form>
                    <div className="contact-us-form">
                        <div className="contact-us-flex">
                            <div className="modalIcon">
                                <input type="text" placeholder="First Name" className="form-styling" name="firstName" />
                                <i className="fas fa-user" aria-hidden="true"></i>
                            </div>
                            <div className="modalIcon">
                                <input type="text" placeholder="Last Name" className="form-styling" name="lastName" />
                                <i className="fas fa-user" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="contact-us-flex">
                            <div className="modalIcon">
                                <input type="email" placeholder="Email" className="form-styling" name="email" />
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div className="modalIcon">
                                <input type="text" placeholder="Phone" className="form-styling" name="phone" />
                                <i className="fas fa-phone" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div>
                            <textarea placeholder="Subject" name="message" className="contact-us-textarea"></textarea>
                        </div>
                        <div>
                            <textarea placeholder="Message" name="message" className="contact-us-textarea"></textarea>
                        </div>
                        <div className="contact-us-buttons">
                            <div>
                                <button type="submit" className="contact-us-submit">Submit</button>
                            </div>
                            <div>
                                <button type="submit" className="contact-us-request-call">Request call<i className="fas fa-phone" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
            <ContactUsDetails />
            <FooterAboutus />
        </div>
    );
};

export default ContactUs;