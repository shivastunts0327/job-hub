import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumePassport = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Passport</h2>
            </div>
            <div>
                <input placeholder="passport number" className="resume-input" />
                <input placeholder="visa" className="resume-input" />
            </div>
            <div>
                <button onClick={() => setStep(5)} className="back"><i className="fas fa-arrow-left"></i>Back</button>
                <button onClick={() => setStep(7)} className="next">Next<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default ResumePassport;