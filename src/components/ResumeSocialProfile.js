import React, {useContext} from "react";
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from './StepContext';

const ResumeSocialProfile = () => {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
    return (
        <div className="resume-container-border">
            <div className="heading">
                <h2 className="heading-label">Social Profile</h2>
            </div>
            <div>
                <select className="social-select">
                    <option disabled="true">Select</option>
                    <option>Linkedin</option>
                    <option>Twitter</option>
                    <option>Facebook</option>
                    <option>Github</option>
                    <option>Instagram</option>
                </select>
                <input placeholder="Link here" className="resume-input" />
            </div>
            <div>
                <button className="add-experience"><i className="fas fa-plus"></i>Add Social</button>
            </div>
            <div>
                <button onClick={() => setStep(6)} className="back"><i className="fas fa-arrow-left"></i>Back</button>
                <button className="preview">Preview</button>
                <button onClick={submitData} className="submit">Submit</button>
            </div>
        </div>
    )
}

export default ResumeSocialProfile;