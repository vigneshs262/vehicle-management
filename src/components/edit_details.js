import {useNavigate} from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from 'react-bootstrap/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import UndoIcon from '@mui/icons-material/Undo';
import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './img.css'
export default function Edit_details() {
    const navigate=useNavigate();
    const navtodash=()=>{
      navigate("/dash");
    };
    const navtoabout=()=>{
      navigate("AboutUs");
    }
    const navtocontact=()=>{
      navigate("/contactUs");
    };
    const navtoprofile=()=>{
      navigate("/profile");
    };
    const navtogarage=()=>{
      navigate("/garage");
    };
    const navtodetails=()=>{
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
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Add logic to update user profile (e.g., make an API call)
    //   console.log('Profile updated:', userData);
    // };
    return (
        <>
        <div>
              <Navbar className="navbar" data-bs-theme="light">
        <Container>
        <div className="text-white display-5 font"><strong>Vinfo</strong></div> 
          <Navbar.Brand href="/dash" onClick={navtodash}></Navbar.Brand>
          <Nav className="">
          <Nav.Link href="/vehicledetails" onClick={navtodetails} style={{fontSize:"1.5rem"}} ><strong className="text-white"><UndoIcon/>Back</strong></Nav.Link>
          <Nav.Link href="/dash" onClick={navtodash} style={{fontSize:"1.5rem"}}><strong className="text-white"><DashboardIcon/> Dashboard</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout}style={{fontSize:"1.5rem"}}><strong className="text-white"><InfoIcon/> About Us</strong></Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontact}style={{fontSize:"1.5rem"}}><strong className="text-white"><ConnectWithoutContactIcon/> Contact Us</strong></Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile}style={{fontSize:"1.5rem"}}><strong className="text-white"><AccountCircleIcon/> profile</strong></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      </div>
      <div>
        <Container><br></br>
        <p className="display-5"><strong>Add Vehicles</strong></p><br></br>
          <p><strong>Enter the details of our Vehicle</strong></p>
        <form>
            <Row>
                <Col lg={6}>
                <div className="form-group mt-2">
            <label>Registration Number</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Eg:TN XX SV XXXX"
            />
          </div>
          <div class="form-group mt-2">
             <label >vehicle image</label><br></br>
             <input type="file" class="form-control-file mt-2" />
           </div>
          <div className="form-group mt-2">
            <label>Owner Or User Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="eg:Hari"
            />
          </div>
          <div className="form-group mt-2">
            <label>Vehicle Manufacture_Company Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="eg:Hero"
            />
          </div>
          <Form.Group controlId="formDateOfBirth">
              <Form.Label>Purchase Date</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
          <div className="form-group mt-2">
            <label>Vehicle Model</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="eg:2 Weeler"
            />
          </div>
          <div className="form-group mt-2">
            <label>Fuel Type</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="eg:petrol"
            />
          </div>
          
          
          <Button className="m-3" style={{backgroundColor:"#344292ce"}} type="submit" onClick={navtodetails}><SaveSharpIcon></SaveSharpIcon>
             save
            </Button>
                </Col>
            </Row>
        </form>
        </Container>
        </div>
        </>
    )
    }