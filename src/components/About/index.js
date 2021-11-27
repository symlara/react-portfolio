import React from 'react';
import headshot from '../../assets/images/Symlar_Aaliyah002.JPG';
import './about.css';

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
                        
                        I'm have completed the Coding Bootcamp for Vanderbilt University and I now have
                        work that I will showcase in this portfolio. The projects that I will show are examples of a range of coding languages,
                        libraries,and concepts that I've learned in a span of 10 months. I hope that this will give a glimpse into the work
                        I am capable to doing and will showcase my ability to learn difficult concepts in a short period of time and make something beautiful from it.
                    </p>
                
                </div>
             &nbsp;
            
        </section>
        
    );
}

export default About;