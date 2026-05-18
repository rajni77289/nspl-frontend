import React from "react";
// import axios from "axios";
import { Outlet } from "react-router-dom";
import Saidbar from "./Saidbar";
// import { FaUser } from "react-icons/fa6";
import Header from "./Header";
// import Saidbar from "./Saidbar";

function Dashboard() {
    return (
        <>
            <div>
                <div style={{ display: "flex" ,justifyContent: "space-between"}}>
                    <Saidbar />
                   <div style={{width:"100%",marginTop:"0px"}}>
                     <Header />
                     <Outlet/>
                   </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard