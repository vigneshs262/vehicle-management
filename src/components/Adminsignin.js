import "./ex.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


export default function AdminSignin(props) {
  
 
  const navigate=useNavigate();
  const navtoadmindash=()=>
  {
    navigate("/admin_dash");
  };
    return (
      
      <>
      <div className="Auth-form-container">
        {/* <img className="title" src="logo.png" alt="logo"/> */}
        <form className="Auth-form ">
          <img className="img" src="logo.png" alt="Logo"/>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In-Admin<span ></span></h3>
            <div className="form-group mt-3">
              <label >Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
         
              <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(31, 99, 145)"}} onClick={navtoadmindash} >
                Submit
              </button>
              
            </div>
            <p className="text-center mt-2 forgot">
              Forgot <a href="/signin">password?</a>
            </p>
          </div>
        </form>
      </div>
      </>
    )
  }