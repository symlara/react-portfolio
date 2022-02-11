import React from 'react';
import allen from "../../assets/images/allenstone.jpg";
import alien from "../../assets/images/lifeform_background.jpg";
import notes from "../../assets/images/note-taker.png";
import password from "../../assets/images/password-generator.png";
import han from '../../assets/images/han_solo_project.png';
import her from '../../assets/images/Back_Of_My_Mind_By_H.E.R.png';
import 'tachyons';


function Project(props) {

    return (

        <div className="container">
            <div className="row text-center text-white">
                <div class="pa3 pa5-ns">

                    {/* allen stone project  */}
                    <h1>About Allen Stone</h1>
                        <p id="overflow">This app is a quick source to all things Allen Stone, who is a Pop/Soul Musician. It's a source for Al's music, and links to his social media accounts! </p>
                        <img src={allen} className="allen-stone" alt="allen-stone" />
                        <h3>Technologies:</h3>
                        <ul>
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

                {/* H.E.R project */}

                <div class="pa3 pa5-ns">
                    <h1>H.E.R FanPage</h1>
                        <p id="overflow">Fan Site created for multi-grammy winner H.E.R. This site will stand as a source for all things H.E.R, including Shows, interviews, Tour, and Miscellaneous things.</p>
                        <img src={her} className="her" alt="h.e.r" />
                        <h3>Technologies:</h3>
                        <ul>
                        <li>Deezer API</li>
                        <li>Tachyons CSS</li>
                        <li>Express</li>
                        <li>JavaScript</li>
                         <li>HTML/CSS</li>
                         <li>Node.js</li>
                        </ul>

                        <p>
                            <a href="https://github.com/symlara/HERFan" target="_blank" rel="noopener noreferrer">H.E.R FanSite Github</a>
                            <br></br>
                                <a href="https://symlara.github.io/HERFan/" target="_blank" rel="noopener noreferrer">H.E.R FaSite</a>
                        </p>
                </div>
          

            <div class="pa3 pa5-ns">
                <h1>Alien Generator</h1>
                <p>This app was created to help to inspire game masters, artists, and players in the endeavor of character creation and design. Each lifeform will be generated with a random backstory, physical description, and list of abilities!</p>
                <img src={alien} className="alien" alt="alien-generator" />
                <h3>Technologies:</h3>
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


                <div class="pa3 pa5-ns">
                    <h1>Star Wars Character</h1>
                    <p>This project has been created to show spotlight on Han Solo from Star Wars as a profile page. This will be a REACT app built using API tool SWAPI.</p>
                    <img src={han} className="han" alt="han-solo" />
                </div>

                <div class="pa3 pa5-ns">
                    <h1>Note Taker</h1>
                    <p>This application is used to generate notes.</p>
                    <img src={notes} className="notes" alt="note-taker" />
                    <h3>Technologies:</h3>
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

                <div class="pa3 pa5-ns">
                    <h1>Password Generator</h1>
                    <p>This application is used to generate a random password using JavaScript</p>
                    <img src={password} className="password" alt="password-generator app" />
                    <h3>Technologies:</h3>
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

                <h1 class="tc f5 ttu fw6 tracked mb4" id="new-projects">New Projects Coming Soon! Stay tuned!</h1>
            </div>

        </div>

   
    );
}

export default Project;