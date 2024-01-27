import {useNavigate} from "react-router-dom";
import {Row, Col, Container,Form,Card,Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from 'react-bootstrap/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import UndoIcon from '@mui/icons-material/Undo';
import './img.css'
import './dash.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function VehicleDetails() {
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
      const navtodoc=()=>{
        navigate("/doc");
      };
      const navtoaddvehicles=()=>{
        navigate("/addvehicle");
      };
      const navtoedit_details=()=>{
        navigate("/edit_details");
      };
    const [userData, setUserData] = useState({
      fullName: 'John Doe',
      email: 'john@example.com',
      dateOfBirth: '1990-01-01',
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
  
    
    return (
        <>
        <div>
              <Navbar className="navbar" data-bs-theme="light">
        <Container>
        <div className="text-white display-5 font"><strong>Vinfo</strong></div> 
          <Navbar.Brand href="/dash" onClick={navtodash}></Navbar.Brand>
          <Nav className="">
          <Nav.Link href="/addvehicle" onClick={navtoaddvehicles} style={{fontSize:"1.5rem"}} ><strong className="text-white"><UndoIcon/> Back</strong></Nav.Link>
          <Nav.Link href="/dash" onClick={navtodash} style={{fontSize:"1.5rem"}}><strong className="text-white"><DashboardIcon/> Dashboard</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout}style={{fontSize:"1.5rem"}}><strong className="text-white"><InfoIcon/> About Us</strong></Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontact}style={{fontSize:"1.5rem"}}><strong className="text-white"><ConnectWithoutContactIcon/> Contact Us</strong></Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile}style={{fontSize:"1.5rem"}}><strong className="text-white"><AccountCircleIcon/> profile</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      
      <Container>
      <p className="display-5 m-3"><strong>Data_Store</strong></p><br>
        </br>
        <Row>
            <Col lg={6}>
                <div className="doc">
                <div className="p-3">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="car.jpg" />
      <Card.Body>
        <Card.Title>TN XX SV XXXX</Card.Title>
        <Button style={{backgroundColor:"#344292ce"}} onClick={navtodoc}>Details</Button>
        <Button  className='m-3' style={{backgroundColor:"#344292ce"}} onClick={navtoedit_details}>Edit</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="m-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="bike.jpg" />
      <Card.Body>
        <Card.Title>TN XX RE XXXX</Card.Title>
        <Button style={{backgroundColor:"#344292ce"}}onClick={navtodoc}>Details</Button>
        <Button  className='m-3' style={{backgroundColor:"#344292ce"}} onClick={navtoedit_details}>Edit</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </Col>
    </Row>
    </Container>
        </>
    )
    }