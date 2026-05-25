import React, { useState } from "react";

function Propspage(){
const [studentdata, setStudentdata] = useState([])
    console.log(studentdata)

    return(
        <>
        <div data={setStudentdata}></div>
        </>
    )
}
export default Propspage