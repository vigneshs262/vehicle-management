import {useNavigate} from "react-router-dom";
import { Col, Container,Form,Card,Button} from 'react-bootstrap';
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
import './dash.css';
export default function Doc() {
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
    const navtovehicledetails=()=>{
        navigate("/vehicledetails");
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
          <Nav.Link href="/vehicledetails   " onClick={navtovehicledetails} style={{fontSize:"1.5rem"}} ><strong className="text-white"><UndoIcon/> Back</strong></Nav.Link>
          <Nav.Link href="/dash" onClick={navtodash} style={{fontSize:"1.5rem"}}><strong className="text-white"><DashboardIcon/> Dashboard</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout}style={{fontSize:"1.5rem"}}><strong className="text-white"><InfoIcon/>About Us</strong></Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontact}style={{fontSize:"1.5rem"}}><strong className="text-white"><ConnectWithoutContactIcon/> Contact Us</strong></Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile}style={{fontSize:"1.5rem"}}><strong className="text-white"><AccountCircleIcon/>profile</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
        
        <Container>
        <p className="display-5 m-3"><strong>Vehicle Info</strong></p><br>
        </br>
        <div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
<div class="container bootdey flex-grow-1 container-p-y">

            <div class="media align-items-center py-3 mb-3">
              <img src="bike.jpg" alt="" class="d-block ui-w-100 rounded"/>
              <div class="media-body ml-4">
              </div>
            </div>

            <div class="card mb-4">
              <div class="card-body">
                <table class="table user-view-table m-0">
                  <tbody>
                    <tr>
                      <td><strong>Registered No:</strong></td>
                      <td>TN XX SV XXXX</td>
                    </tr>
                    <tr>
                      <td><strong>Owner Or User Name:</strong></td>
                      <td>Hari</td>
                    </tr>
                    <tr>
                      <td><strong>Registered date:</strong></td>
                      <td>17/08/2000</td>
                    </tr>
                    <tr>
                      <td><strong>Vehicle company name:</strong></td>
                      <td>Hero</td>
                    </tr>
                    <tr>
                      <td><strong>Vehicle Model:</strong></td>
                      <td>Hero HF Deluxe</td>
                    </tr>
                    <tr>
                      <td><strong>Vehicle Type:</strong></td>
                      <td>2 wheeler</td>
                    </tr>
                    <tr>
                      <td><strong>Insurance Start_Date:</strong></td>
                      <td>27/12/2023</td>
                    </tr>
                    <tr>
                      <td><strong>Insurance End_Date:</strong></td>
                      <td>27/12/2025</td>
                    </tr>
                    <tr>
                      <td><strong>Fuel Type:</strong></td>
                      <td>Petrol</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr class="border-light m-0"/>
            
            </div>
          </div>
		</div>
    </Container>
        </>
    )
    }