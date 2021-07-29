import React from 'react';
import headshot from '../../assets/images/Symlar_Aaliyah002.JPG';
import './about.css';

function About() {
    return (
        <section>
            <div className="center" id="about">
            <h3 className="page-header">About Me</h3>
                </div>
                <div className="profile-picture">
                    <img src={headshot} alt="profile" />
                </div>

                <div className="about-me">
                    <p>
                        I am a front end developer looking to continue building my career in Web Development.
                        
                        I'm have completed the Coding Bootcamp for Vanderbilt University and I have
                        work that I will showcase in the portfolio. The work that I will show are examples of a range of coding languages,
                        libraries,and concepts that I've learned in a span of 10 months. 
                    </p>
                
                </div>
             &nbsp;
            
        </section>
        
    );
}

export default About;