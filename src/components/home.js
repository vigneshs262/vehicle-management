import React from "react";
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import "./home.css";
export default function Home(){
    const navigate=useNavigate();
    const navtosignin=()=>{
        navigate("/signin");
      };
      const navtosignup=()=>{
        navigate("/signup");
      };
      const navtoadminsignin=()=>{
        navigate("/adminsignin");
      };
  return (
    <div className="main ">
      <Container>
        <Row>
            <Col >
          <div className="intro-text">
            <div>
            <span className="align-text-top"><h1 className=" text-primary  fw-bold" >welcome To Our Site</h1></span>
              <p className="subtitle text-warning fw-bold">
              Your App Journey, Our Expertise
              </p>
            </div>
            <div className="buttonContainer">
              <a href="/signin"onClick={navtosignin}>
                <Button size="lg" className="landingbutton p-2">
                  Sign In
                </Button>
              </a>
              <a href="/signup" onClick={navtosignup}>
                <Button size="lg" className="landingbutton" variant="warning text-white p-2">
                  Sign Up
                </Button>
              </a>
            </div><br></br>
            <a href="/adminsignin" onClick={navtoadminsignin}>
                <Button size="lg" className="landingbutton" >
                  Admin
                </Button>
              </a>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

