import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from "react-bootstrap/Carousel";
import Three from "./bwabq.png";
import Two from "./bwabq2.png";
import One from "./bwabq3.png";
import "./home.css";

export default function Home(){
    return(
            <Carousel>
                    <Carousel.Item className="topHeader">
                        <img
                        className="d-block w-100"
                            src={One}
                        alt="First Slide"
                        />
                         <Carousel.Caption className="topHeaderCaption">
                            <h3>Dmscus</h3>
                            <p>Welcome</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="topHeader">
                        <img
                        className="d-block w-100"
                            src={Two}
                        alt="Second Slide"
                        />
                         <Carousel.Caption className="topHeaderCaption">
                            <h3>Dmscus</h3>
                            <p>Welcome</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="topHeader">
                        <img
                        className="d-block w-100"
                            src={Three}
                        alt="Third Slide"
                        />
                         <Carousel.Caption className="topHeaderCaption">
                            <h3>Dmscus</h3>
                            <p>Welcome</p>
                         </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
    )
}