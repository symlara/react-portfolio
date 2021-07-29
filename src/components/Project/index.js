import React from 'react';
// import Card from 'react-bootstrap/Card';
import allen from "../../assets/images/allenstone.jpg";
import alien from "../../assets/images/lifeform_background.jpg";
 import blog from "../../assets/images/112373497-053d4900-8caf-11eb-9127-f38ffec41fe1.png";
import notes from "../../assets/images/note-taker.png";
import password from "../../assets/images/password-generator.png";
import planning from "../../assets/images/daily-planning-calendar.png";
import deepthoughts from '../../assets/images/deep-thoughts.png';
import photoalbum from '../../assets/images/photo-album.png';



function Project(props) {

    return (

        <div className="container">
            <div className="row text-center text-white">
                <div className="col-lg-2 mx-auto">
                    <h1>About Allen Stone</h1>
                        <p id="overflow">This app is a quick source to all things Allen Stone, who is a Pop/Soul Musician. It's a source for Al's music, Instagram photos, and even his social media accounts! Another cool aspect of this app is that the user can interact with other fans by making comments in the comment field on the page and those messages will be saved for the user.</p>
                        <img src={allen} className="allen-stone" alt="allen-stone" />
                        <h3>Technologies</h3>
                        <ul>
                        <li>Instagram API</li>
                        <li>Deezer API</li>
                        <li>Tachyons CSS</li>
                        <li>jQuery</li>
                        <li>JavaScript</li>
                         <li>HTML/CSS</li>
                        <li>LocalStorage</li>
                        <li>Modals</li>
                        </ul>

                        <p>
                            <a href="https://github.com/symlara/about-allen-project" target="_blank" rel="noopener noreferrer">Allen Stone Github</a>
                            <br></br>
                                <a href="https://symlara.github.io/about-allen-project/" target="_blank" rel="noopener noreferrer">Allen Stone Site</a>
                        </p>
                </div>
          

            <div className="col-lg-2">
                <h1>Alien Generator</h1>
                <p>This app was created to help to inspire game masters, artists, and players in the endeavor of character creation and design. Each lifeform will be generated with a random backstory, physical description, and list of abilities!</p>
                <img src={alien} className="alien" alt="alien-generator" />
                <h3>Technologies</h3>
                <ul>
                    <li>HTML/CSS</li>
                    <li>mySQL</li>
                    <li>Sequalize</li>
                    <li>random-js</li>
                    <li>express</li>
                    <li>ejs</li>
                </ul>
                <p>
                <a href="https://github.com/symlara/alien-generator" target="_blank" rel="noopener noreferrer">Alien Generator GitHub</a>
                <br></br>
                <a href="http://alien-generator.herokuapp.com/" target="_blank" rel="noopener noreferrer">Alien Generator App</a>
                </p>
                </div>

                <div className="col-lg-2">
                    <h1>Blog Site</h1>
                    <p>This is a personal blog site created with MySQl, Sequalize, Express, Express Session, and Handlebars.</p>
                    <img src={blog} className="blog" alt="blog-site" />
                    <h3>Technologies</h3>
                    <ul>
                        <li>mySQL</li>
                        <li>Sequalize</li>
                        <li>Express</li>
                        <li>Express Seesion</li>
                        <li>Handlebars</li>
                        <li>Jest</li> 
                        <li>Connect Session Sequalize</li>
                    </ul>
                    <p>
                        <a href="https://github.com/symlara/blog-site/ " target="_blank" rel="noopener noreferrer">Blog Site GitHub</a>
                        <br></br>
                        <a href="https://arcane-meadow-70375.herokuapp.com/" target="_blank" rel="noopener noreferrer">Blog Site App</a>
                    </p>
                </div>

                <div className="col-lg-2">
                    <h1>Note Taker</h1>
                    <p>This application is used to generate notes.</p>
                    <img src={notes} className="notes" alt="note-taker" />
                    <h3>Technologies</h3>
                    <ul>
                    <li>Express.js</li>
                    <li>npm uuid package</li>
                    <li>Node.js</li>
                    </ul>

                    <p>
                        <a href="https://github.com/symlara/Note-Taker" target="_blank" rel="noopener noreferrer">Note Taker GitHub</a>
                        <br></br>
                        <a href="https://note-creater.herokuapp.com/notes" target="_blank" rel="noopener noreferrer">Note Taker App</a>
                    </p>
                </div>

                <div className="col-lg-2">
                    <h1>Password Generator</h1>
                    <p>This application is used to generate a random password using JavaScript</p>
                    <img src={password} className="password" alt="password-generator app" />
                    <h3>Technologies</h3>
                    <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    </ul>

                    <p>
                        <a href="https://github.com/symlara/password-assistant" target="_blank" rel="noopener noreferrer">Password Assistant GitHub</a>
                        <br></br>
                        <a href="https://symlara.github.io/password-assistant/" target="_blank" rel="noopener noreferrer">Password Assistant App</a>
                    </p>
                </div>

                <div className="col-lg-2">
                    <h1>Daily-Planning</h1>
                    <p>This calendar application runs in the browser and is used to allow users to see their events for the day. It's color coded to inform the user of the status of each event.</p>
                    <img src={planning} className="planning" alt="daily-planning" />
                    <h3>Technologies</h3>
                    <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    </ul>

                    <p>
                        <a href="https://github.com/symlara/daily-planning" target="_blank" rel="noopener noreferrer">Daily Planning GitHub</a>
                        <br></br>
                        <a href="https://symlara.github.io/daily-planning/" target="_blank" rel="noopener noreferrer">Daily Planning App</a>
                    </p>
                </div>
            </div>
            <div className="row text-center text-white">
            <div className="col-lg-2 mx-auto">
                <h1>Deep Thoughts</h1>
                <p>This project was built using React and is a full stack MERN application.</p> 
                <img src={deepthoughts} className="thoughts" alt="deep-thoughts-app" />
                <h3>Technologies</h3>
                <ul>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>JSX</li>
                    <li>CSS</li>
                </ul>

                <p>
                    <a href="https://github.com/symlara/deep-thoughts" target="_blank" rel="noopener noreferrer">Deep Thuoghts GitHub</a>
                    <br />
                    <a href="https://shielded-depths-37761.herokuapp.com" target="_blank" rel="noopener noreferrer">Deep Thoughts App</a>
                </p>
            </div>

            <div className="col-lg-10 mx-auto">
                <h1>Photo Album</h1>
                <p>A great resource for local freelance photographers and clients. This 1 app will help photographers generate revenue in 3 ways: Selling prints, Booking clients for sessions and students for lessons. This app is easily accessible by mobile device for the client to purchase photographs and hire local photographers</p>
                <img src={photoalbum} className="album" alt="album-app" />
                <h3>Technologies</h3>
                <ul>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>JSX</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Mongoose</li>
                </ul>

                <p>
                    <a href="https://github.com/jojoford/Project3" target="_blank" rel="noopener noreferrer">Photo Album Github</a>
                </p>
            </div>

        </div>

        </div>

   
    );
}

export default Project;