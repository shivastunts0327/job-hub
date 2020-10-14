import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumeExperience = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Work Experience</h2>
            </div>
            <div>
                <input placeholder="Company name" className="resume-input" />
                <input placeholder="Designation" className="resume-input" />
                <input placeholder="Period" className="resume-input" />
            </div>
            <div>
                <input placeholder="Team size" className="resume-input" />
                <input placeholder="Work location" className="resume-input" />
                <input placeholder="Domain" className="resume-input" />
            </div>
            <div>
                <button className="add-experience"><i className="fas fa-plus"></i>Add experience</button>
            </div>
            <div>
                <button onClick={() => setStep(2)} className="back"><i className="fas fa-arrow-left"></i>Back</button>
                <button onClick={() => setStep(4)} className="next">Next<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default ResumeExperience;