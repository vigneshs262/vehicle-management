import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from 'react-bootstrap/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import './img.css'
export default function About(){
    const navigate=useNavigate();
    const navtodash=()=>{
      navigate("/dash");
    };
    const navtoabout=()=>{
      navigate("/AboutUs");
    }
    const navtocontact=()=>{
      navigate("/contactUs");
    };
    const navtoprofile=()=>{
      navigate("/profile");
    };
    const navtosignin=()=>{
      navigate("/signin");
    };
   
    return(
      <>
        <div>
              <Navbar className="navbar" data-bs-theme="light">
        <Container>
        <img  className='image' src="logo.png" alt="logo" />
          <Navbar.Brand href="/dash" onClick={navtodash}></Navbar.Brand>
          <Nav className="">
          <Nav.Link href="/dash" onClick={navtodash} ><DashboardIcon/>Dashboard</Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout} style={{fontSize:"1.5rem"}}><InfoIcon/>About Us</Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontact}><ConnectWithoutContactIcon/>Contact Us</Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile}><AccountCircleIcon/>profile</Nav.Link>
            <Nav.Link href="/signin" onClick={navtosignin} ><LogoutIcon/>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <div>
    <Container>
      <h1>About Us</h1>

      <Row>
        <Col>
          <p>
            Welcome to our Vehicle Management website! We are dedicated to providing you with a seamless
            experience in managing and maintaining your vehicles.
          </p>
          <p>
            Our user-friendly dashboard allows you to keep track of your vehicles' details, fuel efficiency,
            maintenance schedule, and more.
          </p>
          <p>
            Whether you're a car enthusiast or someone who simply wants to keep their vehicles in top
            condition, our platform is designed to meet your needs.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify vehicle management and empower users to make informed decisions
            regarding their vehicles' maintenance and usage.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? Feel free to reach out to our support team. We're here to assist you!
          </p>
          <p>Email: support@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </Col>
      </Row>
    </Container>
    </div>
   </>
  );
}

