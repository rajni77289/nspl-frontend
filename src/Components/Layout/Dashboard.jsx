import React from "react";
import { Outlet } from "react-router-dom";
import Saidbar from "./Saidbar";
import Header from "./Header";
import Footer from "./Footer";


function Dashboard() {
    return (
        <>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Saidbar />

                    <div className="main-cont" style={{ width: "80%", marginTop: "0px", margin: "auto", marginRight: "0px" }}>
                        <Header />
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Dashboard