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
            {/* <div className="profile-layout">
                <div className="maincontentt">
                    <div className="sec1st">
                        <div className="profile-header">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="profile" style={{ width: "15%" }}
                            />
                            <div>
                                <h2>My Profile</h2>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="edit3st">
                                <h3>Personal Information</h3>
                            </div>
                            <div className="form-row">
                                <div className="infoprofile">
                                    <label>Full Name :-</label>
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
                                </div>
                            </div>
                        </div>

                        </div>
                        <button onClick={() => setEdituser(true)} className="delbtn" style={{marginLeft:"230px", width:"30%",marginBottom:"20px",background:"orange"}}><Link to={'/editenformation'}>Edit Profile</Link></button> */}
                        <div className="profile-page">
    <div className="profile-container">
        <div className="profile-section">

            {/* Header */}
            <div className="profile-top">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="profile"
                    className="profile-avatar"
                />
                <div className="profile-title">
                    <h2>My Profile</h2>
                </div>
            </div>

            {/* Personal Information */}
            <div className="profile-card-box">
                <div className="profile-card-header">
                    <h3>Personal Information</h3>
                </div>

                <div className="profile-row">
                    <div className="profile-item">
                        <label>Full Name :-</label>
                        {user?.username}
                    </div>

                    <div className="profile-item">
                        <label>Date of Birth :-</label>
                        {user?.datebirth}
                    </div>

                    <div className="profile-item">
                        <label>Phone :-</label>
                        {user?.phoneno}
                    </div>
                </div>

                <div className="profile-row">
                    <div className="profile-item">
                        <label>Email :-</label>
                        {user?.email}
                    </div>

                    <div className="profile-item">
                        <label>State :-</label>
                        {user?.state}
                    </div>

                    <div className="profile-item">
                        <label>Bio :-</label>
                        {user?.bio}
                    </div>
                </div>
            </div>

            <button
                onClick={() => setEdituser(true)}
                className="profile-edit-btn"
                style={{
                    marginLeft: "230px",
                    width: "30%",
                    marginBottom: "20px",
                    background: "orange"
                }}
            >
                <Link to={'/editenformation'}>Edit Profile</Link>
            </button>


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

