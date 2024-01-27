import {useNavigate} from "react-router-dom";
import { Col, Container,Form,Card,Button, Row} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from 'react-bootstrap/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import UndoIcon from '@mui/icons-material/Undo';
import Image from 'react-bootstrap/Image';
import './img.css'
import './dash.css';
export default function DocImages() {
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
    const navtodocinfo=()=>{
        navigate("/docinfo");
      };
      const navtoupdatedoc=()=>{
        navigate("/updatedoc");
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
          <Nav.Link href="/docinfo" onClick={navtodocinfo} style={{fontSize:"1.5rem"}} ><strong className="text-white"><UndoIcon/> Back</strong></Nav.Link>
          <Nav.Link href="/dash" onClick={navtodash} style={{fontSize:"1.5rem"}}><strong className="text-white"><DashboardIcon/> Dashboard</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout}style={{fontSize:"1.5rem"}}><strong className="text-white"><InfoIcon/> About Us</strong></Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontact}style={{fontSize:"1.5rem"}}><strong className="text-white"><ConnectWithoutContactIcon/> Contact Us</strong></Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile}style={{fontSize:"1.5rem"}}><strong className="text-white"><AccountCircleIcon/> profile</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
        
        <Container>
        <p className="display-5 m-3"><strong>Vehicle Info</strong></p><br>
        </br>
          <Row>
            <Col>
             <div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div id="main-content" class="file_manager">
              <p><strong>Registration Certificate :</strong></p>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="file">
                            <a href="#/">
                                <div class="hover">
                                    <button type="button" class="btn btn-icon btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                                <div class="image">
                                    <img src="Form SD-Vehicle-Title-Transfer.jpg" alt="img" class="img-fluid"/>
                                </div>
                                <div class="file-name">
                                    <p class="m-b-5 text-muted">img21545ds.jpg</p>
                                    <small>Size: 2MB <span class="date text-muted">Dec 11, 2017</span></small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> 
                <p><strong>Registration Number:</strong></p>
                   <span className="">
                      <td><strong>
                        TN XX SV XXXX
                    </strong></td>
                </span> 
                <p> </p>
               <p><strong>Driving Licence :</strong></p>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="file">
                            <a href="#/">
                                <div class="hover">
                                    <button type="button" class="btn btn-icon btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                                <div class="image">
                                    <img src="Car driver license.jpg" alt="img" class="img-fluid"/>
                                </div>
                                <div class="file-name">
                                    <p class="m-b-5 text-muted">img21545ds.jpg</p>
                                    <small>Size: 2MB <span class="date text-muted">Dec 11, 2017</span></small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <p><strong>Licence Vadild End_date</strong></p>
                   <span className="">
                      <td><strong>
                        12/12/2012
                    </strong></td>
                </span> 
                <p> </p>
                <p><strong>Insurace Certificate:</strong></p>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="file">
                            <a href="#/">
                                <div class="hover">
                                    <button type="button" class="btn btn-icon btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                                <div class="image">
                                    <img src="Vehicle Inspection Form - AH – STUDIO Blog.jpg" alt="img" class="img-fluid"/>
                                </div>
                                <div class="file-name">
                                    <p class="m-b-5 text-muted">img21545ds.jpg</p>
                                    <small>Size: 2MB <span class="date text-muted">Dec 11, 2017</span></small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <p><strong>Insurance Validity Start_date</strong></p>
                   <span className="">
                      <td><strong>
                      13/12/2012
                    </strong></td>
                </span> 
                <p> </p>
                <p><strong>Insurance Validity End_date</strong></p>
                   <span className="">
                      <td><strong>
                      14/12/2012
                    </strong></td>
                </span> 
                <p> </p>
                <p><strong>Pollution Certificate:</strong></p>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="file">
                            <a href="#/">
                                <div class="hover">
                                    <button type="button" class="btn btn-icon btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                                <div class="image">
                                    <img src="Motor vehicle pollution abstract.jpg" alt="img" class="img-fluid"/>
                                </div>
                                <div class="file-name">
                                    <p class="m-b-5 text-muted">img21545ds.jpg</p>
                                    <small>Size: 2MB <span class="date text-muted">Dec 11, 2017</span></small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <p><strong>Pollution_Certificate Validity Start_date</strong></p>
                   <span className="">
                      <td><strong>
                      15/12/2012
                    </strong></td>
                </span> 
                <p> </p>
                <p><strong>Pollution_Certificate Validity End_date</strong></p>
                   <span className="">
                      <td><strong>
                      16/12/2012
                    </strong></td>
                </span> 
                <p> </p>
                <p><strong>Service Certificate:</strong></p>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="file">
                            <a href="#/">
                                <div class="hover">
                                    <button type="button" class="btn btn-icon btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                                <div class="image">
                                    <img src="Vehicle Service Contract Letter _ Templates at allbusinesstemplates_com.jpg" alt="img" class="img-fluid"/>
                                </div>
                                <div class="file-name">
                                    <p class="m-b-5 text-muted">img21545ds.jpg</p>
                                    <small>Size: 2MB <span class="date text-muted">Dec 11, 2017</span></small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <p><strong>Last_Service_Date</strong></p>
                   <span className="">
                      <td><strong>
                      17/12/2012
                    </strong></td>
                </span> 
                <p> </p>
                <p><strong>Next_Service_Date</strong></p>
                   <span className="">
                      <td><strong>
                      18/12/2012
                    </strong></td>
                </span> 
                <p> </p>
    </div>
		</div>
            </Col>
          </Row>
          <div className="align-center ">
          <Button  className="m-3" style={{backgroundColor:"#344292ce"}}type="submit" onClick={navtoupdatedoc}>
              Update
            </Button>
          </div>
        </Container>
        </>
    )
    }