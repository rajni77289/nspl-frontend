import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { IoClose } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


function Saidbar() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <button className='thirdicons' onClick={() => setIsOpen(!isOpen)}>&#9776;</button>
            {isOpen ? <div className="sidebar-mobile">
                {/* <div className="dasboardicon"> */}
                <h2>🎓 Dashboard</h2>
                <button className='closeiconssiabar' onClick={() => setIsOpen(false)}><IoClose /></button>
                {/* </div> */}
                <ul className="sidebar-menu ">
                    <li><Link to={'/'}>🏠 Home</Link></li>
                    <li><Link to={'student'}>👨‍🎓 Students</Link></li>
                    <li><Link to={'teacher'}>👩‍🏫 Teachers</Link></li>
                    <li><Link to={"profile"}>&#128100; Profile</Link></li>
                    <li><Link to={'/attendance'}> Attendance</Link></li>
                    <li>⚙️ Settings</li>
                </ul>
            </div>: ""}
             <div className="sidebar">
                 <h2>🎓 StudentMS</h2>
                 <ul className="sidebar-menu ">
                     <li><Link to={'/'}>📊 Dashboard</Link></li>
                     <li><Link to={'student'}>👨‍🎓 Students</Link></li>
                     <li><Link to={'teacher'}>👩‍🏫 Teachers</Link></li>
                     <li><Link to={"profile"}>&#128100; Profile</Link></li>
                     <li><Link to={'/attendance'}>📅 Attendance</Link></li>
                     <li>⚙️ Settings</li>
                 </ul>
            </div>

        </>
    )
}
export default Saidbar