
import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import Home from "./home";
import './home.css'


export default function carousel() {
  return (
    <Container className="carousel">
      <Row>
        <Col lg={8}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100 " src={require('../assets/second.jpg')} alt="second"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={require('../assets/third.jpg')} alt="third"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={require('../assets/4.jpg')} alt="second"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={require('../assets/1.jpg')} alt="second"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={require('../assets/2.jpg')} alt="second"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={require('../assets/5.jpg')} alt="second"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={require('../assets/6.jpg')} alt="second"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={require('../assets/7.jpg')} alt="second"></img>
            </Carousel.Item>
            <Carousel.Item><br></br>
          <br></br>
              <img className="d-block w-100 " src={require('../assets/fourth.jpg')} alt="fourth"></img>
            </Carousel.Item>
          </Carousel>
          
        </Col>
        <Col lg={4}>
          <Home></Home>
        </Col>
      </Row>
    </Container>
  )
}