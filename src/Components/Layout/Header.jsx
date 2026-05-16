import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Header() {

    const nav = useNavigate()
    function logout() {
        localStorage.removeItem("nsplAuth")
        nav('/login')
    }

    return (
        <>
                <div className="header">
                    <div className="childheader">
                        <h2>NeuroSharp Pvt Ltd.</h2>
                        <p>Student Management System</p>
                    </div>
                        <button onClick={logout} className="logout" >Logout</button>
                </div>
        </>
    )
}

export default Header