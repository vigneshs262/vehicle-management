import "./ex.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import App from "./src/App.js"
import {Link, useNavigate} from "react-router-dom";
import React from "react"
export default function Signup(){
    const navigate=useNavigate();
    const navtosignin=()=>{
        navigate("/signin");
    }
return (
    <div className="Auth-form-container">
      {/* <img className="title" src="logo.png" alt="logo"/> */}
      <form className="Auth-form2 " >
      <img className="img" src="logo.png" alt="Logo"/>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up<span></span></h3>
          <div class="row">
            <div class="col">
            <label></label>
             <input type="text" class="form-control" placeholder="First name"/>
            </div>
            <div class="col">
            <label></label>
             <input type="text" class="form-control" placeholder="Last name"/>
            </div>
         </div>
         <div className="form-group mt-2">
            <label></label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          
          <div className="form-group mt-2 ">
            <label></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Create your Password"
            />
          </div>
          <div className="form-group mt-2">
            <label></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder=" Confirm your Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3"><Link to='/signin'>
            <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(31, 99, 145)"}} onClick={navtosignin}>
              Submit
            </button>
            </Link>
          </div>
          <br></br>
          <div className="text-center already">
            Already have account?{" "}
            <span className="link-primary" onClick={navtosignin}>    
              Sign In
            </span>
          </div>

        </div>
      </form>
    </div>
  )
}