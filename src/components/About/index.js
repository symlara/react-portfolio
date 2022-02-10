import React from 'react';
import headshot from '../../assets/images/Symlar_Aaliyah002.JPG';
import '../../../src/index.css'

function About() {
    return (
        <section>
            <div className="center" id="about">
            <h2 className="page-header">About Me</h2>
                </div>
                <div className="profile-picture">
                    <img src={headshot} alt="profile" />
                </div>

                <div className="about-me">
                    <p>
                    I am a front end developer looking to continue building my career in Web Development and Web Content Management. 
                    This site will give a glimpse into the skills I am able to utitlize and build on if given the opportunity. 
                    This Portfolio will also help showcase my ability to learn concepts and build webpages/sites, and apps efficiently. 
                    </p>
                
                </div>
             &nbsp;
            
        </section>
        
    );
}

export default About;