import React from "react";
// import "./Footer.css";

function Footer() {
  return (
    <div className="footer" style={{width:"76%",marginRight:"0px"}}>

      <h2>NeuroSharp</h2>

      <p>Student Management System</p>

      <div className="footer-links">
        <span>Home</span>
        <span>Students</span>
        <span>Teachers</span>
        <span>Attendance</span>
      </div>

      <p className="copy">
        © 2026 All Rights Reserved | NeuroSharp Pvt Ltd.
      </p>

    </div>
  );
}

export default Footer;