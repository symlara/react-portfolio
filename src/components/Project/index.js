import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const tech = currentProject.tech;
    const githubLink = currentProject.githubLink;
    const liveLink = currentProject.liveLink;

    // grabs info from array
    function infoLists(infoArray) {
        let infoList = "";

        for (var i = 0; i < infoArray.length; i++) {
            if (i === infoArray.length - 1) {
                infoList += infoArray[i];
            }else {
                infoList += infoArray[i] + ", ";
            }
        }

        return infoList;
    }

    return (
        <Card style={{ width: "80%" }}>
            <Card.img src={require(`../../assets/images/${image}`)} className="card-image"/>
            <div className="center">
                <Card.Body>
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <Card.Subtitle className="card-subtitle">Usage</Card.Subtitle>
                    <Card.Text className="card-tech">{infoLists(tech)}</Card.Text>
    <Card.Link href={liveLink} target="_blank" className="card-link">{name} App</Card.Link>
    <hr />
    <Card.Link href={githubLink} target="_blank" className="card-link">{name} GitHub</Card.Link>
                </Card.Body>
            </div>
        </Card>
    );
}

export default Project;