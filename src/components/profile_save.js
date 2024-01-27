// import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import './img.css'
import Footer from './footer';

const User_Profile = () => {
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
  const navtoUd_profile = () => {
    navigate("/update_profile");
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
        <div className='m-4'>
			<div class="container bootstrap snippets bootdey">
<div class="panel-body inf-content">
    <div class="row">
        <div class="col-md-4">
            <img alt="" style={{/*width:600px;*/}} title="" class="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario"/> 
            <ul title="Ratings" class="list-inline ratings text-center">
                <li><a href="#/"><span class="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#/"><span class="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#/"><span class="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#/"><span class="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#/"><span class="glyphicon glyphicon-star"></span></a></li>
            </ul>
        </div>
        <div class="col-md-6">
            <strong>Personal Details</strong><br/><br/>
            <div class="table-responsive">
            <table class="table table-user-information">
                <tbody>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-asterisk text-primary"></span>
                              User_Name                                               
                            </strong>
                        </td>
                        <td class="text-primary">
                          hari96986    
                        </td>
                    </tr><br/>
                    <tr>    
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-user  text-primary"></span>    
                               First_Name                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            Hari   
                        </td>
                    </tr><br/>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-cloud text-primary"></span>  
                                Last_Name                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            Krishnan 
                        </td>
                    </tr><br/>

                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-bookmark text-primary"></span> 
                                Gender                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            Male 
                        </td>
                    </tr><br/>


                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-eye-open text-primary"></span> 
                                Date_Of_Birth                                               
                            </strong>
                        </td>
                        <td class="text-primary">
                           12/27/2023
                        </td>
                    </tr><br/>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-envelope text-primary"></span> 
                                Email_Address                                              
                            </strong>
                        </td>
                        <td class="text-primary">
                            noreply@email.com  
                        </td>
                    </tr><br/>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                Created_Date                                               
                            </strong>
                        </td>
                        <td class="text-primary">
                            20 jul 20014
                        </td>
                    </tr><br/>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                Modified_Date                                               
                            </strong>
                        </td>
                        <td class="text-primary">
                             20 jul 20014 20:00:00
                        </td>
                    </tr>  <br/>                                  
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
</div>                                        
		</div>
        <div className='text-center'>
        <Button className='m-3' style={{backgroundColor:"#344292ce"}} type="submit" onClick={navtoUd_profile}>
              Update_profile
            </Button>
            </div>
        <div className='p-5'>
        <Footer/>
      </div>
    </>
  );
};

export default User_Profile;