import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import studentimg from "../imgreact/student.jpg";
import Api from "../API/Api";

function Home() {

  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  const [attendance, setAttendance] = useState([])
  // const [notifications, setNotifications] = useState([])

  // today date
  const today = new Date().toDateString()

  useEffect(() => {

    Api.get("/allstudent")
      .then((res) => {
        setStudents(res.data.user)
      })

    Api.get("/teachergetdata")
      .then((res) => {
        setTeachers(res.data.user)
      })

    Api.get("/getattendance")
      .then((res) => {
        setAttendance(res.data.user)
      })

    // Api.get("/notifications")
    //   .then((res) => {
    //     setNotifications(res.data.user)
    //   })

  }, [])
  return (
    <>
      <div className="home">

        {/* TOP HEADER */}
        <div className="top-header">
          <div>
            <h2>Dashboard</h2>
            <p>Welcome back, Admin 👋</p>
          </div>

          <div className="top-right">
            <span>📅 {today}</span>
            {/* <Link to={'/notification'} ><button className="notify-btn">{notifications.length}🔔</button></Link> */}
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="hero">

          <div className="hero-text">
            <span className="tag">Student Management System</span>

            <h1>
              Manage Students <br /> Easily & Smartly
            </h1>

            <p>
              Modern dashboard to manage students, attendance,
              teachers and reports in one secure platform.
            </p>

            <div className="hero-buttons">

              <Link to="/stuform">
                <button className="primary-btn">
                  + Add Student
                </button>
              </Link>

              <Link to="student">
                <button className="secondary-btn">
                  View Students
                </button>
              </Link>

            </div>
          </div>

          <div className="hero-img">
            <img src={studentimg} alt="students" />
          </div>

        </div>

        {/* STATS */}
        <div className="cards">

          <div className="card">
            <h2>{students.length}+</h2>
            <p>Students</p>
          </div>

          <div className="card">
            <h2>{teachers.length}+</h2>
            <p>Teachers</p>
          </div>

          <div className="card">
            <h2>{attendance.length}+</h2>
            <p>Attendance</p>
          </div>

          <div className="card">
            <h2>100%</h2>
            <p>Secure Data</p>
          </div>

        </div>

        {/* FEATURES */}
        <div className="features">

          <div className="feature-box">
            <h3>⚡ Fast Management</h3>

            <p>
              Add and manage student records quickly with a smooth interface.
            </p>
          </div>

          <div className="feature-box">
            <h3>📊 Smart Analytics</h3>

            <p>
              Track attendance and student performance using dashboard insights.
            </p>
          </div>

          <div className="feature-box">
            <h3>🔐 Secure System</h3>

            <p>
              Keep all student information protected with secure access.
            </p>
          </div>

        </div>

      </div>
    </>
    // <div className="home">

    //   {/* HERO */}
    //   <div className="hero">
    //     <div className="hero-text">
    //       <h1>Welcome Admin 👋 </h1>
    //       <p>
    //         Manage your Student Management System with a modern,
    //         fast and secure dashboard experience.
    //       </p>

    //       <div className="hero-buttons">
    //         <button className="primary-btn">
    //           <Link to="/stuform">Add Student</Link>
    //         </button>

    //         <button className="secondary-btn"><Link to="/studentdetails">View Reports</Link></button>
    //       </div>
    //     </div>

    //     <div className="hero-img">
    //       <img src={studentimg} alt="students" />
    //     </div>
    //   </div>

    //   {/* STATS */}
    //   <div className="cards">
    //     <div className="card">
    //       {/* <h2>{studentdata.length}</h2> */}
    //       <p>Active Students</p>
    //     </div>

    //     <div className="card">
    //       <h2>98</h2>
    //       <p>Teachers</p>
    //     </div>

    //     <div className="card">
    //       <h2>90%</h2>
    //       <p>Attendance</p>
    //     </div>

    //     <div className="card">
    //       <h2>24/7</h2>
    //       <p>System Access</p>
    //     </div>
    //   </div>

    //   {/* FEATURES */}
    //   <div className="features">
    //     <div className="feature-box">
    //       <h3>⚡ Fast Management</h3>
    //       <p>Quickly add, update and manage student records without delay.</p>
    //     </div>

    //     <div className="feature-box">
    //       <h3>📊 Smart Dashboard</h3>
    //       <p>Get real-time overview of students, teachers and attendance.</p>
    //     </div>

    //     <div className="feature-box">
    //       <h3>🔐 Secure System</h3>
    //       <p>All data is protected with secure access control system.</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Home;