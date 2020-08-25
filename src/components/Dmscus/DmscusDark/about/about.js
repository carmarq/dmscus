import React from "react";
import Card from "react-bootstrap/Card";
import HeaderImage from "./about.png";
import "./about.css";

export default function About() {
    return(
        <Card classname="aboutHeader" style={{ width: '100%'}}>
            <Card.Img className="headerImage" variant="top" src={HeaderImage}/>
            <Card.Body className="headerBody">
                <Card.Title className="titleHeader">About Dmscus</Card.Title>
                <Card.Text classname="textHeader">Dmscus is a group of individuals with training in software development,
                                                  instructing, graphic design, sound engineering, and SalesForce
                                                  Administration.
                                                  <br/> 
                                                  We are a coalition of College Graduates, Certified Developers,
                                                  SalesForce Administrators, and compassionate people. 
                </Card.Text>
            </Card.Body>
        </Card>
    )
}