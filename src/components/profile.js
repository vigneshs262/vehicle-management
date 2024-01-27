import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './footer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import './img.css'

const UserProfile = () => {
  const navigate = useNavigate();
  const navtodash = () => {
    navigate("/dash");
  };
  const navtoabout = () => {
    navigate("/AboutUs");
  }
  const navtocontact = () => {
    navigate("/contactUs");
  };
  const navtosignin = () => {
    navigate("/signin");
  };
  const navtoprofile = () => {
    navigate("/profile");
  };
  
  const navtoprofilesave = () => {
    navigate("/profile_save");
  };
  // Sample user data (replace with actual user data from state or context)
  const [userData, setUserData] = useState({
    Username:'hari778756',
    Firstname:'Hari',
    Lastname:'Krishana',
    email: 'john@example.com',
    dateOfBirth: '1990-01-01',
    contact:'790658958',
    address: '23 , XX Stree , XXX Area , X DT',
    gender: 'Male',
    // Add more user details as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user profile (e.g., make an API call)
    console.log('Profile updated:', userData);
  };

  return (
    <>
    <Navbar className="navbar" data-bs-theme="light">
          <Container>
          <div className="text-white display-5 font"><strong>Vinfo</strong></div> 
            <Navbar.Brand href="/dash" onClick={navtodash}></Navbar.Brand>
            <Nav className="">
            <Nav.Link href="/dash" onClick={navtodash}><strong className="text-white"><DashboardIcon/> Dashboard</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout}><strong className="text-white"><InfoIcon/> About Us</strong></Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontact}><strong className="text-white"><ConnectWithoutContactIcon/> Contact Us</strong></Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile} style={{fontSize:"1.5rem"}}><strong className="text-white"><AccountCircleIcon/> profile</strong></Nav.Link>
            <Nav.Link href="/signin" onClick={navtosignin} ><strong className="text-white"><LogoutIcon/> Logout</strong></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container>
      <h1>User Profile</h1>

      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="hari6587"
                name="UserName"
                value={userData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formContact">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Hari"
                name="name"
                value={userData.Firstname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formContact">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Krishana"
                name="name"
                value={userData.Lastname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div class="form-group mt-2">
             <label >Profile Picture</label><br></br>
             <input type="file" class="form-control-file mt-2" />
           </div>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formContact">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="text"
                placeholder="89786XXXXX"
                name="contact"
                value={userData.contact}
                onChange={handleChange}
                required
              />
            </Form.Group>

            

            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="email"
                value={userData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Add more form fields for additional user details if needed */}
            <div className='text-center p-4'>
            <Button style={{backgroundColor:"#344292ce"}} type="submit" onClick={navtoprofilesave}>
              Save
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <div className='p-5'>
        <Footer/>
      </div>
    </Container>
    </>
  );
};

export default UserProfile;