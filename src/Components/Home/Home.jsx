import React from "react";
import { Link } from "react-router-dom";
import studentimg from "../imgreact/student.jpg";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome Admin 👋</h1>
          <p>
            Manage your Student Management System with a modern,
            fast and secure dashboard experience.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              <Link to="/stuform">Add Student</Link>
            </button>

            <button className="secondary-btn">
              View Reports
            </button>
          </div>
        </div>

        <div className="hero-img">
          <img src={studentimg} alt="students" />
        </div>
      </div>

      {/* STATS */}
      <div className="cards">
        <div className="card">
          {/* <h2>{studentdata.length}</h2> */}
          <p>Active Students</p>
        </div>

        <div className="card">
          <h2>98</h2>
          <p>Teachers</p>
        </div>

        <div className="card">
          <h2>90%</h2>
          <p>Attendance</p>
        </div>

        <div className="card">
          <h2>24/7</h2>
          <p>System Access</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature-box">
          <h3>⚡ Fast Management</h3>
          <p>Quickly add, update and manage student records without delay.</p>
        </div>

        <div className="feature-box">
          <h3>📊 Smart Dashboard</h3>
          <p>Get real-time overview of students, teachers and attendance.</p>
        </div>

        <div className="feature-box">
          <h3>🔐 Secure System</h3>
          <p>All data is protected with secure access control system.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;