import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react';
import {Card, Button, Row,Col } from 'react-bootstrap';
import Footer from "./footer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import './dash.css';
import './img.css'

export default function Dashboard(){

    const navigate=useNavigate();
    const navtodash=()=>{
      navigate("/dash");
    };
    const navtoabout=()=>{
      navigate("/AboutUs");
    }
    const navtocontactUs=()=>{
      navigate("/contactUs");
    };
    const navtograge=()=>{
      navigate("/garage");
    };
    const navtoadd_docments=()=>{
      navigate("/add_documents");
    };
    const navtoprofile=()=>{
      navigate("/profile");
    };
    const navtohistory=()=>{
      navigate("/history");
    };
    const navtocau=()=>{
      navigate("/carousel");
    };
    return(
      <>
      <div className="exp ">
      <Navbar  className="navbar " data-bs-theme="light">
        <Container>
        <div className="text-white display-5 font"><strong>Vinfo</strong></div> 
          <Navbar.Brand href="/dash" onClick={navtodash}></Navbar.Brand>
          <Nav >
          <Nav.Link href="/dash" onClick={navtodash} style={{fontSize:"1.5rem"}}><strong className="text-white"><DashboardIcon/>Dashboard</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout}><strong className="text-white"><InfoIcon/>About Us</strong></Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontactUs}><strong className="text-white"><ConnectWithoutContactIcon/>Contact Us</strong></Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile}><strong className="text-white"><AccountCircleIcon/>profile</strong></Nav.Link>
            <Nav.Link href="/carousel" onClick={navtocau} ><strong className="text-white"><LogoutIcon/>Logout</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <Container>
        <Row>
          <Col>
  <div className="all lg-3 sm-2">
            <div className="p-3">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="gar.jpg" />
      <Card.Body>
        <Card.Title>Garage</Card.Title>
        <Card.Text>
          <strong>Garage to store your vehicle information</strong>
        </Card.Text>
        <Button style={{backgroundColor:"#344292ce"}} onClick={navtograge}>Enter</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="p-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="doc 2.jpg" />
      <Card.Body>
        <Card.Title>Document Details</Card.Title>
        <Card.Text>
             <strong>Store Your Document Details Here
             and Download here</strong>
        </Card.Text>
        <Button style={{backgroundColor:"#344292ce"}} onClick={navtoadd_docments}>Enter</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="p-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="his.jpg" />
      <Card.Body>
        <Card.Title>History</Card.Title>
        <Card.Text>
           <strong>Your History of search would be stored here</strong>
        </Card.Text>
        <Button style={{backgroundColor:"#344292ce"}}  onClick={navtohistory}>Enter</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    <div className="p-5">
    <Footer/>
      </div>
      </Col>
      </Row>
    </Container>
    
      </>
    )
}