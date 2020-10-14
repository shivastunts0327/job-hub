import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumeEducation = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Education</h2>
            </div>
            <div>
                <input placeholder="Qualification" className="resume-input" />
                <input placeholder="Specialization" className="resume-input" />
                <input placeholder="University/College" className="resume-input" />
            </div>
            <div>
                <input placeholder="Location" className="resume-input" />
                <input placeholder="Year of passing" className="resume-input" />
                <input placeholder="GPA" className="resume-input" />
            </div>
            <div>
                <button className="add-experience"><i className="fas fa-plus"></i>Add Education</button>
            </div>
            <div>
                <button onClick={() => setStep(3)} className="back"><i className="fas fa-arrow-right"></i>Back</button>
                <button onClick={() => setStep(5)} className="next">Next<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default ResumeEducation;