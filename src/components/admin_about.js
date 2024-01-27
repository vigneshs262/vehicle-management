import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './footer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import './img.css'

const Admin_about = () => {
    const navigate = useNavigate();
  const navtodash = () => {
    navigate("/admin_dash");
  };
  const navtoabout = () => {
    navigate("/AboutUs");
  }
  const navtocontact = () => {
    navigate("/admin_contact");
  };
  const navtosignin = () => {
    navigate("/signin");
  };
  const navtoprofile = () => {
    navigate("/profile");
  };
  return (
    <>
    <div>
        <Navbar className="navbar" data-bs-theme="light">
          <Container>
          <div className="text-white display-5 font"><strong>Vinfo</strong></div> 
            <Navbar.Brand href="/dash" onClick={navtodash}></Navbar.Brand>
            <Nav className="">
            <Nav.Link href="/admin_dash" onClick={navtodash}><strong className="text-white"><HomeIcon/>Home</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout} style={{fontSize:"1.5rem"}}><strong className="text-white"><InfoIcon/>About Us</strong></Nav.Link>
          <Nav.Link href="/admin_contact" onClick={navtocontact}><strong className="text-white"><ConnectWithoutContactIcon/>Contact Us</strong></Nav.Link>
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
          <h2>Our Features</h2>
          <p>
          Comprehensive database of vehicle makes, models, and years.<br></br>
          Detailed information about each vehicle, including specifications, features, and reviews. <br></br>
          Guides on routine maintenance tasks for different vehicles.<br></br>
          Tips for extending the lifespan of vehicles and improving fuel efficiency.<br></br>
          Integration with services providing vehicle history reports, including information about accidents, odometer readings, and title information.<br></br>
          </p>
        </Col>
      </Row>
      <Footer/> 
    </Container>
    </div>
   
    </>
  );
};

export default Admin_about;
