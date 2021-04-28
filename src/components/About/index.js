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
                        
                        I'm currently ennrolled in a Coding Bootcamp for Vanderbilt University and I have completed multiple projects of
                        work that I will showcase on the portfolio. The pieces of work that I will show are examples of a range of coding languages,
                        libraries and concepts that I've learned in a span of 7 months. 

                    </p>

                    <p>
                       
                    </p>
                </div>
            

            
        </section>
        
    );
}

export default About;