// import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState, useEffect } from "react";
// import Saidbar from "../Saidbar";
// import Search from "./Search";
// import { FaEdit } from "react-icons/fa";
// import { Link, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

import EditEnformation from "./EditEnformation";

function Profile() {

    const [user, setUser] = useState()
    console.log(user);

    const [edituser, setEdituser] = useState(false)


    useEffect(() => {
        const saveuser = JSON.parse(localStorage.getItem("nspl"))
        setUser(saveuser)
    }, []);


    return (
        <>
            <div className="profile-layout">
                <div className="maincontentt">
                    <div className="sec1st">
                        {/* Header */}
                        <div className="profile-header">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="profile" style={{ width: "15%" }}
                            />
                            <div>
                                <h2>My Profile</h2>
                                {/* <p>Teacher Name</p> */}
                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="info-card">
                            <div className="edit3st">
                                <h3>Personal Information</h3>
                                {/* <button className="edit4nd"><Link to={'/editenformation'}>Edit <FaEdit /></Link></button> */}
                            </div>
                            <div className="form-row">
                                <div className="infoprofile">
                                    <label>Full Name :-</label>
                                    {/* <input type="text" placeholder="Enter your name" /> */}
                                    {user?.username}
                                </div>

                                <div className="infoprofile">
                                    <label>Date of Birth :-</label>
                                    {user?.datebirth}
                                </div>
                                <div className="infoprofile">
                                    <label>Phone :-</label>
                                    {user?.phoneno}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="infoprofile">
                                    <label>Email :-</label>
                                    {user?.email}
                                </div>

                                <div className="form-row">
                                <div className="addpro">
                                    <label>State :-</label>
                                    {user?.state}
                                </div>

                                <div className="infoprofile">
                                    <label>bio :-</label>
                                    {user?.bio}
                                    {/* <input type="text" placeholder="Enter phone number" /> */}
                                </div>
                            </div>
                        </div>

                        </div>
                        <button onClick={() => setEdituser(true)} className="delbtn" style={{marginLeft:"230px", width:"30%",marginBottom:"20px",background:"orange"}}><Link to={'/editenformation'}>Edit</Link></button>
                    {
                        edituser === true ? <EditEnformation user={user} setEdituser={setEdituser} /> : ""
                    }
                    </div>
                </div>
            </div>


            {/* <span>{user?.password}</span> */}
        </>
    )
}
export default Profile

