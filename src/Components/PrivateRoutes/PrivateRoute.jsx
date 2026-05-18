import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
    const islogin=localStorage.getItem("nsplAuth")==="true";
    return islogin ? children: <Navigate to={'/login'}/>

}
export default PrivateRoute