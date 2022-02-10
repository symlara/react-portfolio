import React from 'react';
import resume from "../../assets/files/Aaliyah Symlar_Resume_2022.docx";

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="resume-header">My Resume</h1>
            </div>

            <div className="resume">
                <a href={resume} download>Download my Resume here</a>
            </div>
            
            <div className="proficiencies">
                    <h3> Front-End Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>Responsive UI</li>
                    </ul>
                    <br />
                    <h3>Back-End Proficiencies</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node.Js</li>
                        <li>Express</li>
                        <li>(MVC) Model View Controller</li>
                        <li>REST</li>
                        <li>(PWA) Progressive Web Application</li>
                    </ul>
                   <br />
                       <h3>Dev-Tool Proficiencies</h3>
                       <ul>
                       <li>mySQL</li>
                       <li>Sequalize</li>
                       <li>noSQL</li>
                       <li>SQLite</li>
                       <li>MongoDB</li>
                       <li>Mongoose</li>
                   </ul>
            </div>
        </section>
    )
}

export default Resume;