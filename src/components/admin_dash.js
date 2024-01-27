import React, { useState } from 'react'
import Chart from "react-apexcharts"
import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from "./adminsidebar.js"
import { Container, Row, Col, Navbar, Nav} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

export default function AdminDashboard() {
  const [state, setState] = useState({

    options: {
      chart: {
        id: "basic-bar444"
      },
      xaxis: {
        categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
      }
    },
    series: [
      {
        name: "No of Users Registered",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 85, 70, 91, 85]
      },
      {
        name: "No of vehicles_Updated",
        data: [0, 48, 56, 50, 95, 73, 100, 35, 56, 50, 95, 25]
      }
    ]
  });
  const navigate = useNavigate();
  const navtoadmindash = () => {
    navigate("/admin_dash");
  };
  const navtoabout = () => {
    navigate("/admin_about");
  }
  const navtocontact = () => {
    navigate("/contact");
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar expand="lg" className="bg-body-tertiary" >
              <div className="container-fluid" style={{ backgroundColor: " #344292ce" }}>
                <Navbar.Brand href="/" ><h1 className='ms-0 text-white'><strong>Vinfo</strong></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
                  <Nav>
                    <Nav.Link href="/admin_dash" onClick={navtoadmindash} className='fw-bold text-white'><strong><HomeIcon/>Home</strong></Nav.Link>
                    <Nav.Link href="/admin_about" onClick={navtoabout} className='fw-bold text-white'><strong><InfoIcon/>About_Us</strong></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <SideBar />
          </Col>
          <Col lg={10}>
            <h4 className='pb-2'><strong>Hello Admin...</strong></h4><br></br>
            <div className='d-inline-flex'>
              
              <div className=' d-flex justify-content-around align-items-center w-50
            col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-white border border-secondary shadow-sm me-2'>
                <h1> <i className='bi bi-person-vcard-fill'></i></h1>
                <div>
                  <p>Register_Users</p>
                  <h2>854</h2>
                </div>
              </div>
              <div className='d-flex justify-content-around align-items-center w-50
            col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-white border border-secondary shadow-sm me-2'>
                <h1><i class="bi bi-car-front-fill"></i></h1>
                <div>
                  <p>Vehicle_Updated</p>
                  <h2>500</h2>
                </div>
              </div>
              <div className='d-flex justify-content-around align-items-center w-50
            col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-white border border-secondary shadow-sm me-2'>
                <h1><i class="bi bi-file-earmark-text"></i></h1>
                <div>
                  <p>Documents_Updated</p>
                  <h2>912</h2>
                </div>
              </div>
            </div>
            <div className="mx-5 px-5 pt-2">
              <div className="row">
                <div className="col-4 ">
                  <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="800"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
