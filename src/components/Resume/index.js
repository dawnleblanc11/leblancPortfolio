import React from "react";
import respdf from "../../assets/DLeBlanc_resume.pdf";


function Resume() {
  return (
    <div>
        
        <h3>Please reach out:</h3>
        <div class="techinfo">
            Technology proficiencies: HTML, CSS, Javascript, Mongo, React
        </div>
        <div class="emailinfo">
        email: dawnleblanc11@gmail.com
        </div>
            <div class="resumelink">
                <a href= {respdf} target="_blank" rel="noreferrer"> Click to download my resume</a>
            </div>   
    </div>
  );
}

export default Resume;
