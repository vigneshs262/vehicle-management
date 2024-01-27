import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from "./footer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

import './img.css'
import './contact.css'
export default function ContactUs() {
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
  return (
    <>
       
        <Navbar className="navbar" data-bs-theme="light">
		<Container>
          <div className="text-white display-5 font"><strong>Vinfo</strong></div> 
            <Navbar.Brand href="/dash" onClick={navtodash}></Navbar.Brand>
            <Nav className="">
            <Nav.Link href="/dash" onClick={navtodash}><strong className="text-white"><DashboardIcon/> Dashboard</strong></Nav.Link>
          <Nav.Link href="/AboutUs" onClick={navtoabout}><strong className="text-white"><InfoIcon/> About Us</strong></Nav.Link>
          <Nav.Link href="/contactUs" onClick={navtocontact} style={{fontSize:"1.5rem"}}><strong className="text-white"><ConnectWithoutContactIcon/> Contact Us</strong></Nav.Link>
            <Nav.Link href="/profile" onClick={navtoprofile}><strong className="text-white"><AccountCircleIcon/> profile</strong></Nav.Link>
            <Nav.Link href="/signin" onClick={navtosignin} ><strong className="text-white"><LogoutIcon/> Logout</strong></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
   
    <div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div id="contact" class="contact-area section-padding">
	<div class="container">										
		<div class="section-title text-center">
			<h1>Get in Touch</h1>
			
		</div>					
		<div class="row">
			<div class="col-lg-7">	
				<div class="contact">
					<form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
						<div class="row">
							<div class="form-group col-md-6">
								<input type="text" name="name" class="form-control" placeholder="Name" required="required"/>
							</div>
							<div class="form-group col-md-6">
								<input type="email" name="email" class="form-control" placeholder="Email" required="required"/>
							</div>
							<div class="form-group col-md-12">
								<input type="text" name="subject" class="form-control" placeholder="Subject" required="required"/>
							</div>
							<div class="form-group col-md-12">
								<textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
							</div>
							<div class="col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div> 
			<div class="col-lg-5">
				<div class="single_address">
					<i class="fa fa-map-marker"></i>
					<h4>Our Address</h4>
					<p>3481 Melrose Place, Beverly Hills</p>
				</div>
				<div class="single_address">
					<i class="fa fa-envelope"></i>
					<h4>Send your message</h4>
					<p>V_Info@example.com</p>
				</div>
				<div class="single_address">
					<i class="fa fa-phone"></i>
					<h4>Call us on</h4>
					<p>(+91)(93614 60811)</p>
				</div>
				<div class="single_address">
					<i class="fa fa-clock-o"></i>
					<h4>Work Time</h4>
					<p>24/7</p>
				</div>					
			</div> 
		</div>
	</div>	
</div>
		</div>
		<Container>
			<div>
				<Footer/>
			</div>
		</Container>
    </>
  )
}