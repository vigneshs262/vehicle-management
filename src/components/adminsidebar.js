import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import PostAddIcon from '@mui/icons-material/PostAdd';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default function SideBar() {
  const navigate = useNavigate();
 
  const navtohome = () => {
    navigate("/");
  };
  const navtoadminjob = () => {
    navigate("/adminjob");
  }; 
  const navtoadmincom = () => {
    navigate("/admincom");
  }; 
  const navtoadminsearch = () => {
    navigate("/adminsearch");
  };
  const navtodashadmin=()=>
  {
    navigate("/dashadmin");
  };
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className=" me-3 fs-4"></i>
        <span className="brand-name fs-4"></span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2 ">
       < DashboardCustomizeIcon/>
          <span onClick={navtodashadmin} className="fs-5">Dashboard</span>
        </a>
        <a className="list-group-item py-2 ">
         <WarehouseIcon/>
          <span onClick={navtoadminjob} className="fs-5">Garage</span>
        </a>
        <a className="list-group-item py-2">
          <PostAddIcon/>
          <span onClick={navtoadmincom} className="fs-5">Documents</span>
        </a>
        <a className="list-group-item py-2">
       <ExitToAppIcon/>
          <span onClick={navtohome} className="fs-5">SignOut</span>
        </a>
      </div>
    </div>
  );
}
