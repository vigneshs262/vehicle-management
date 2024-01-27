import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from 'react-bootstrap/Navbar';
import {Card, Button } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import UndoIcon from '@mui/icons-material/Undo';
import './dash.css'
import './img.css'
export default function Garage() {
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
    const navtoaddvehicle=()=>{
      navigate("/addvehicle");
    };
    const navtodetails=()=>{
      navigate("/vehicledetails");
    };
return (
    <>
      
    <div>
              <Navbar className="navbar" data-bs-theme="light">
        <Container>
        <div className="text-white display-5 font"><strong>Vinfo</strong></div> 
          <Navbar.Brand href="/dash" onClick={navtodash}></Navbar.Brand>
          <Nav>
          <Nav.Link href="/dash" onClick={navtodash} style={{fontSize:"1.5rem"}} ><strong className="text-white"><UndoIcon/> Back</strong></Nav.Link>
          <Nav.Link href="/dash" onClick={navtodash} style={{fontSize:"1.5rem"}}><strong className="text-white"><DashboardIcon/> Dashboard</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout}style={{fontSize:"1.5rem"}}><strong className="text-white"><InfoIcon/> About Us</strong></Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontact}style={{fontSize:"1.5rem"}}><strong className="text-white"><ConnectWithoutContactIcon/> Contact Us</strong></Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile}style={{fontSize:"1.5rem"}}><strong className="text-white"><AccountCircleIcon/> profile</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      </div>
      <br></br>
      <Container>
      <p className="display-2"><strong>Garage</strong></p>
      <br></br>
      <div className="all flex">
      
    <div className="p-3">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="9.jpg" />
      <Card.Body>
        <Card.Title>Add vehicle</Card.Title>
        <Card.Text>
          <strong>Add Your Vehicle Info here</strong>
        </Card.Text>
        <Button style={{backgroundColor:"#344292ce"}} onClick={navtoaddvehicle}>Add</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="p-3">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="vehicle.jpg" />
      <Card.Body>
        <Card.Title>Vehicle details</Card.Title>
        <Card.Text>
          <strong>The Stored Info Can be View Here and can be updated</strong>
        </Card.Text>
        <Button style={{backgroundColor:"#344292ce"}} onClick={navtodetails}>Details</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </Container>
     

    </>
)
}