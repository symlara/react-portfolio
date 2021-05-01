import React from 'react';

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="resume-header">My Resume</h1>
            </div>

            <div>
                <a href={require("../../assets/files/AS updated resume 21.docx")} download>Download my Resume here</a>
            </div>
            
            <div>
                    <h4>Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>Responsive UI</li>
                        <li>APIs</li>
                        <li>Node.Js</li>
                        <li>Express</li>
                        <li>(MVC) Model View Controller</li>
                        <li>REST</li>
                        <li>(PWA) Progressive Web Application</li>
                    </ul>
                    <hr />
            </div>
        </section>
    )
}

export default Resume;