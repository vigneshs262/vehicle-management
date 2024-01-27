import {useNavigate} from "react-router-dom";
import { Col, Container,Form, Row,Button} from 'react-bootstrap';
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
import './doc.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function Documents() {
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
    const navtoadd_documents=()=>{
      navigate("/add_documents");
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
          <Nav.Link href="/add_documents" onClick={navtoadd_documents} style={{fontSize:"1.5rem"}} ><strong className="text-white"><UndoIcon/> Back</strong></Nav.Link>
          <Nav.Link href="/dash" onClick={navtodash} style={{fontSize:"1.5rem"}}><strong className="text-white"><DashboardIcon/> Dashboard</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout}style={{fontSize:"1.5rem"}}><strong className="text-white"><InfoIcon/> About Us</strong></Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontact}style={{fontSize:"1.5rem"}}><strong className="text-white"><ConnectWithoutContactIcon/> Contact Us</strong></Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile}style={{fontSize:"1.5rem"}}><strong className="text-white"><AccountCircleIcon/> profile</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
        
        <Container>
        <p className="display-5 m-3"><strong>Upload_Documents</strong></p><br>
        </br>
          <Row>
          <Col lg={6}>
        <div class="form-group mt-2">
             <label >Upload your Vehicle Registration Certificate </label><br></br>
             <input type="file" class="form-control-file mt-2" />
           </div>
        <div className="form-group mt-2">
            <label>Registration Number of the Vehicle</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Eg:TN XX SV XXXX"
            />
          </div>
          <div class="form-group mt-2">
             <label >Upload your driving Licence</label><br></br>
             <input type="file" class="form-control-file mt-2" />
           </div>
        {/* <Form.Group controlId="formLicense Vadild Start_date">
              <Form.Label>Licence Vadild Start_date</Form.Label>
              <Form.Control
                type="date"
                name="License Vadild Start_date"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group> */}
            <Form.Group controlId="form License Vadild End_date">
              <Form.Label>Licence Validity End_date</Form.Label>
              <Form.Control
                type="date"
                name="Licence Vadild End_date"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div class="form-group mt-2">
             <label >Upload your Insurance Certificate</label><br></br>
             <input type="file" class="form-control-file mt-2" />
           </div>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Insurance Start_date</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Insurance End_date</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div class="form-group mt-2">
             <label >Upload your Under Pollusion Certificate  </label><br></br>
             <input type="file" class="form-control-file mt-2" />
           </div>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label> Enter Test_date</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Enter Validity End_date</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div class="form-group mt-2">
             <label >Upload Last Serive Certificate  </label><br></br>
             <input type="file" class="form-control-file mt-2" />
           </div>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Enter Last_Service_Date</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Enter Next_Service_Date</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button className="m-3" style={{backgroundColor:"#344292ce"}} type="submit" onClick={navtodocinfo}><AddCircleOutlineIcon/>
              Add
            </Button>
            </Col>
            </Row>
            </Container>
        </>
    )
    }