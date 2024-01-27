import React from "react";
import { Route, Routes } from "react-router-dom";
import Carousel from "./components/carousel";
import Dashboard from "./components/dashboard";
import Signup from './components/signup';
import Signin from './components/signin';
import AboutUs from "./components/AboutUs";
import Update_profile from "./components/update_profile";
import Garage from "./components/garage";
import Documents from "./components/documents";
import History from "./components/history";
import AdminSignin from "./components/Adminsignin";
import AddVehicles from "./components/addvehicle";
import VehicleDetails from "./components/vehicledetails";
import AdminDashboard from "./components/admin_dash";
import User_Profile from "./components/profile_save";
import UserProfile from "./components/profile";
import Doc_Store from "./components/doc_store";
import Doc from "./components/doc";
import DocInfo from "./components/docinfo";
import DocImages from "./components/docimages";
import AddDocuments from "./components/add_documents";
import UpdateDoc from "./components/updatedoc";
import ContactUs from "./components/contactUs";
import Edit_details from "./components/edit_details";
import Admin_about from "./components/admin_about";
import Admin_Contact from "./components/admin_contact";
export default function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/profile" element={<UserProfile />} />
        <Route path="/update_profile" element={<Update_profile/>} />
        <Route path="garage" element={<Garage/>} />
        <Route path="documents" element={<Documents/>} />
        <Route path="history" element={<History/>} />

        <Route path="adminsignin" element={<AdminSignin/>} />
        <Route path="carousel" element={<Carousel/>} />
        <Route path="addvehicle" element={<AddVehicles/>} />
        <Route path="vehicledetails" element={<VehicleDetails/>} />
        <Route path="admin_dash" element={<AdminDashboard/>} />
        <Route path="profile_save" element={<User_Profile/>} />
        <Route path="doc_store" element={<Doc_Store/>} />

        <Route path="doc" element={<Doc/>} />
        <Route path="docinfo" element={<DocInfo/>} />
        <Route path="docimages" element={<DocImages/>} />
        <Route path="add_documents" element={<AddDocuments/>} />
        <Route path="updatedoc" element={<UpdateDoc/>} />
        <Route path="edit_details" element={<Edit_details/>} />
        <Route path="admin_about" element={<Admin_about/>} />
        <Route path="admin_contact" element={<Admin_Contact/>} />
      </Routes>
    </>


  );
}



