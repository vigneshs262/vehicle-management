import "./ex.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


export default function Signin(props) {
  
 
  const navigate=useNavigate();
  const navtodash=()=>
  {
    navigate("/dash");
  };
    return (
      
      <>
      <div className="Auth-form-container">
        {/* <img className="title" src="logo.png" alt="logo"/> */}
        <form className="Auth-form ">
          <img className="img" src="logo.png" alt="Logo"/>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In<span ></span></h3>
            <div className="text-center account">
              Don't have an account?{" "}
              <Link to="/signup">
              <span className="link-primary">
                Sign Up
              </span></Link>
            </div>
            <div className="form-group mt-3">
              <label ></label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label></label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
         
              <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(31, 99, 145)"}} onClick={navtodash} >
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