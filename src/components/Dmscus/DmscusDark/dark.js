import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./home/home";
import Contact from "./contact/contact";
import Past from "./past/past";
import Button from 'react-bootstrap/Button';



  export default function TopNav(){
    return ( 
    <Router>    
        <Navbar variant="dark" classname="navbar">  
            <Nav activeKey="/Home">
                <Nav.Item> 
                    <Nav.Link href="/Home" className="homeLink">Dmscus</Nav.Link>
                </Nav.Item> 
                <Nav.Item>
                    <Nav.Link href="/Past">Past Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navBtn1">
                    <Button variant="dark" className="navButton">B/W</Button>
                </Nav.Item> 
                <Nav.Item className="navBtn2">
                    <Button variant="dark" className="navButton navBtn2">Color</Button>
                </Nav.Item>
            </Nav>  
        </Navbar>

        <Switch>
            <Route path="/Home">
                <Home/>
            </Route>

            <Route path="/Past">
                <Past/>
            </Route> 

            <Route path="/Contact">
                <Contact/>
            </Route> 

            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>
    )
  }
  