import React from 'react';
import headshot from '../../assets/images/Symlar_Aaliyah002.JPG';
import resume from '../../assets/files/Aaliyah Symlar-Resume-2022.docx';
import '../../../src/index.css'
import 'tachyons';

function About() {
    return (
        <article class="pa3 pa5-ns" id="about">
            <div className="center">
            <h2 class="f3 f2-m f1-l">About Me</h2>
                </div>
                <div className="profile-picture center-1">
                    <img src={headshot} alt="profile" />
                </div>

                <div class="measure lh-copy">
                    <p>
                    I am a front end developer looking to continue building my career in Web Development and Web Content Management. 
                    This site will give a glimpse into the skills I am able to utitlize and build on if given the opportunity. 
                    This Portfolio will also help showcase my ability to learn concepts and build webpages/sites, and apps efficiently. 
                    </p>
                
                </div>
             &nbsp;
             <p>Download my resume <a id="resume" class="dim" href={resume}>here</a></p>
            
        </article>
        
    );
}

export default About;