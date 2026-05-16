import React, { useEffect, useState } from "react";
// import Saidbar from "../Layout/Saidbar";
import TechHeader from "./TechHeader";
import { Link } from "react-router-dom";
import axios from "axios";
// import "./Dashboard.css";

function TechDashboard() {

    const [teacherdata, setTeacherdata] = useState([])
    console.log(teacherdata);


    async function getTeacher() {
        const res = await axios.get("http://localhost:8000/teacherdata").then((res) => {
            console.log(res.data.user);
            setTeacherdata(res.data.user);
        })

    }

    useEffect(() => {
        getTeacher()
    }, [])
    return (
        <>
            <div className="mainteach">
                <TechHeader />
                <div className="childetech">
                    <div className="fourtech">
                        <div className="testustacou">
                            <p>Teachers</p>
                            <h2>0</h2>
                        </div>
                        <div className="testustacou">
                            <p>Students</p>
                            <h2>0</h2>
                        </div>
                        <div className="testustacou">
                            <p>Staff</p>
                            <h2>0</h2>
                        </div>
                        <div className="testustacou">
                            <p>Courses</p>
                            <h2>0</h2>
                        </div>
                    </div>
                    <button className="addteacher"><Link to={'/techregistation'} ><span style={{ color: "white" }}> Add Members ++</span></Link></button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                {/* <th>ID</th> */}
                                <th>Qualification</th>
                                <th>Contact</th>
                                <th>Age</th>
                                <th>Subject</th>
                                <th>Salary</th>
                                <th>Veiw</th>
                            </tr>
                        </thead>
                    </table>
                    <tbody>
                        {teacherdata && teacherdata.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.fullname}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.age}</td>
                                       

                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </div>
            </div>

        </>
    );
}

export default TechDashboard;