import React from 'react';
import Project from '../Project';

function Portfolio() {

    const projects = [
        {
            name: 'About Allen Stone',
            description:
            "This app is a quick source to all things Allen Stone, who is a Pop/Soul Musician. It's a source for Al's music, Instagram photos, and even his social media accounts! Another cool aspect of this app is that the user can interact with other fans by making comments in the comment field on the page and those messages will be saved for the user.",
            image: 'allenstone.jpg',
            technologies: [
                'Instagram API',
                'Deezer API',
                'Tachyons CSS',
                'JQuery',
                'JavaScript',
                'HTML/CSS',
                'LocalStorage',
                'Modals'
            ],
            github: 'https://github.com/symlara/about-allen-project',
            deployedLink: 'https://symlara.github.io/about-allen-project/',
        },
        {
            name: 'Alien Generator',
            description: "This app was created to help to inspire game masters, artists, and players in the endeavor of character creation and design. Each lifeform will be generated with a random backstory, physical description, and list of abilities!",
            image: 'lifeform_background.jpg',
            technologies:
            ['HTML/CSS', 'mySQL', 'Sequalize', 'random-js', 'express', 'ejs'],
            github: 'https://github.com/symlara/alien-generator',
            deployedLink: 'http://alien-generator.herokuapp.com/',
        },
        {
            name: 'Blog Site',
            description: "This is a personal blog site created with MySQl, Sequalize, Express, Express Session, and Handlebars.",
            image: '112373497-053d4900-8caf-11eb-9127-f38ffec41fe1.png',
            technologies: ['mySQL', 'Sequalize', 'Express', 'Express Seesion', 'Handlebars', 'Jest', 'Connect Session Sequalize'
        ],
        github: 'https://github.com/symlara/blog-site/', 
        deployedLink: 'https://damp-reef-76694.herokuapp.com/'
        },
        {
            name: 'Note Taker',
            description: "This application is used to generate notes.",
            image: 'note-taker.png',
            technologies: ['Express.js', 'npm uuid package', 'Node.js'],
            github: 'https://github.com/symlara/Note-Taker',
            deployedLink: 'https://note-creater.herokuapp.com/notes'
        },
        {
            name: 'Password Generator',
            description: "This application is used to generate a random password using JavaScript",
            image: 'password-generator.png',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/symlara/password-assistant',
            deployedLink: 'https://symlara.github.io/password-assistant/'
        },
        {
            name: "Daily-Planning",
            description: "This calendar application runs in the browser and is used to allow users to see their events for the day. It's color coded to inform the user of the status of each event.",
            image: 'daily-planning-calendar.png',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/symlara/daily-planning',
            deployedLink: 'https://symlara.github.io/daily-planning/'
        },
        {
            name: "Photo Album",
            description: "A great resource for local freelance photographers and clients. This 1 app will help photographers generate revenue in 3 ways: Selling prints, Booking clients for sessions and students for lessons. This app is easily accessible by mobile device for the client to purchase photographs and hire local photographers",
            image: 'photo-album.png',
            technologies: ['React', 'MERN Stack app', 'CSS', 'Javascript', 'JWT', 'MongoDB', 'Mongoose ODM', 'GraphQL ', 'Node.js', 'Express.js'],
            github: 'https://github.com/jojoford/Project3',
        }
	];

    
    return (
        <section>
           <div className="center" id="portfolio">
                <h1> My Portfolio</h1>
            </div>

            <div>
                <ul className="flex-row">
                 <li>
                     <Project projects={projects[0]}></Project>
                   </li>
               </ul>
            </div> 
         </section>
    );
}

export default Portfolio;