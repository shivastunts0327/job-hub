import React from "react";
import AddResume from "./AddResume";
import StepContext from './StepContext';
import Footer from "./Footer";
import HeaderResume from "./HeaderResume";


const Resume = () => {
    return (
        <div>
            <HeaderResume />
            
            <StepContext>
                <AddResume />
            </StepContext>

            <Footer />
        </div>
    )
}

export default Resume;

