import React from 'react';

function About() {
    return (
        <section>
            <div className="center" id="about">
            <h1 className="page-header">About Me</h1>
                </div>
                <div className="center">
                    <img src={require('../../assets/images/1608236902552.jpg')} 
                    alt="about-me"
                    className="photo"
                    />
                </div>

                <div>
                    <p>
                        I am a front end developer looking to continue building my career in Web Development.
                        
                    </p>
                </div>
            

            
        </section>
        
    );
}

export default About;