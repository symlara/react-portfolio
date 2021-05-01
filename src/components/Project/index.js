import React from 'react';
// import Card from 'react-bootstrap/Card';
import allen from "../../assets/images/allenstone.jpg";
import alien from "../../assets/images/lifeform_background.jpg";
 

function Project(props) {
    // const currentProject = useState(props)[0].projects;

    // const name = currentProject.name;
    // const description = currentProject.description;
    // const image = currentProject.image;
    // const tech = currentProject.technologies;
    // const githubLink = currentProject.github;
    // const liveLink = currentProject.deployedLink;

    // grabs info from array
    // function getTechs(techArray) {
    //     let techList = "";

    //     for (var i = 0; i < techArray.length; i++) {
    //         if (i === techArray.length - 1) {
    //             techList += techArray[i];
    //         }else {
    //             techList += techArray[i] + ", ";
    //         }
    //     }

    //     return techList;
    // }

    return (

        <div className="container">
            <div className="row text-center text-white">
                <div className="col-lg-8 mx-auto">
                    <h1 className="card-title">About Allen Stone</h1>
                        <p>This app is a quick source to all things Allen Stone, who is a Pop/Soul Musician. It's a source for Al's music, Instagram photos, and even his social media accounts! Another cool aspect of this app is that the user can interact with other fans by making comments in the comment field on the page and those messages will be saved for the user.</p>
                        <img src={allen} className="allen-stone" alt="allen stone" />
                        <h2>Technologies</h2>
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
                            
                        </p>
                </div>
            </div>

            <div className="col-lg-8">
                <h1>Alien Generator</h1>
                <p>This app was created to help to inspire game masters, artists, and players in the endeavor of character creation and design. Each lifeform will be generated with a random backstory, physical description, and list of abilities!</p>
                <img src={alien} className="alien" alt="alien-generator" />
                <h2>Technologies</h2>
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
        </div>

    // <Card style={{ width: "18rem" }}>
    //   <Card.Img
    //         variant="top"
    //         src={require(`../../assets/images/${image}`)}
    //         className="card-image"
    //     />
    //     <div className="center">
    //         <Card.Body>
    //             <Card.Title className="card-title">{name}</Card.Title>
    //             <Card.Text className="card-text">{description}</Card.Text>
    //             <Card.Subtitle className="card-subtitle">Tech Used</Card.Subtitle>
    //             <Card.Text className="card-techs">{getTechs(tech)}</Card.Text>
    //             <Card.Link href={liveLink} target="_blank" className="card-link">
    //                 {name} App
    //             </Card.Link>
    //             <br></br>
    //             <Card.Link href={githubLink} target="_blank" className="card-link">
    //                 {name} Github
    //             </Card.Link>
    //         </Card.Body>
    //     </div>
    // </Card>
    );
}

export default Project;