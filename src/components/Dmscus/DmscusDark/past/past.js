import React from "react";
import './past.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import OneAbq from './abq-skyline-blk.png';
import Circuit from './circuit.png';
import Code from './code.png'
import ABQ from './abq.png';


export default function Past() {
    return(
   <div>     
        <div class="pastMain">  
            <CardGroup>
                <Card classname="cards ">
                    <Card.Img className="pastImage" variant="top" src={Circuit}/>
                    <Card.Body className="pastBody">
                        <Card.Title className="pastHeader">Educational Instruction</Card.Title>
                        <Card.Text classname="pastText"> 
                                                        I've instructed classes for Adelante Development Inc's DiverseIT program. 
                                                        Classes instructed include Cyber Security, Computer Basics, Computer hardware
                                                        and Computer Software, specifically in Web Development and Salesforce.                                                       
                                                        I've also instructed full-stack web development classes for Cultivating Coders.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card classname="cards ">
                    <Card.Img className="pastImage" variant="top" src={Code}/>
                    <Card.Body className="pastBody">
                        <Card.Title className="pastHeader">Web Development Bootcamps</Card.Title>
                        <Card.Text classname="pastText">
                                                        I've graduated from both Deep Dive Coding and Cultivating Coders web development
                                                        bootcamps where I learned how to build websites using HTML, CSS, JavaScript,
                                                        PHP, mySQL, and WordPress. My final projects consisted of creating a
                                                        beer-style finder web application as well as a website mockup for Bob's
                                                        Burgers located in Albuquerque.             
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="cards ">
                    <Card.Img className="pastImage" variant="top" src={ABQ}/>
                    <Card.Body className="pastBody">
                        <Card.Title className="pastHeader">Community Websites</Card.Title>
                        <Card.Text classname="pastText">
                                                        I've developed websites for local business projects in the Albuquerque rea 
                                                        including websites for OneAbq Fund, Sapien Law and Breaking Bubbles NM. 
                                                        <br/>
                                                        <br/>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
                
        </div>  
    </div>
    )
}