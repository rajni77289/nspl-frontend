import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";


function Saidbar() {
    return (
        <>
            <div className="sidebar">
                <h2 className="sidebar-logo">Dashboard</h2>
                <ul className="sidebar-menu">
                    <li>🏠 Home</li>
                    <li><Link to={'teacher'}>👩‍🏫 Teachers</Link></li>
                    <li><Link to={'student'}>🎓 Students</Link></li>
                    <li><Link to={"profile"}><FaUser /> Profile</Link></li>
                    <li><Link to={'/attendance'}>📝 Attendance</Link></li>
                    <li>⚙️ Settings</li>
                </ul>
            </div>

        </>
    )
}
export default Saidbar