import React, { useEffect, useState } from "react";
// import Saidbar from "../Layout/Saidbar";
// import TechHeader from "./TechHeader";
import { Link } from "react-router-dom";
import Api from "../API/Api";
// import "./Dashboard.css";

function TechDashboard() {

    const [teacherdata, setTeacherdata] = useState([])
    console.log(teacherdata);

    // const [teacherData, setTeacherData] = useState([]);



    async function getTeacher() {
        await Api.get("/teacgergetdata").then((res) => {
            console.log(res.data.user);
            setTeacherdata(res.data.user);


            //     const Teacher=res.data.user;
            // const allTeacher =Teacher .filter((item) => item.course === "")
            // setBcasetBca(allTeacher)


            // <div className="testustacou">
            //     <p>Teachers</p>
            //     <h2>{teacherData.length}</h2>
            // </div>
        })

    }


    useEffect(() => {
        getTeacher()
    }, [])
    return (
        <>
            <div className="mainteach">
                {/* <TechHeader /> */}
                <div className="childetech">
                    <div className="fourtech">
                        <div className="testustacou">
                            <p>Teachers</p>
                            <h2>{teacherdata.length}</h2>
                        </div>
                        <div className="testustacou">
                            <p></p>
                            <h2>0</h2>
                        </div>
                        <div className="testustacou">
                            <p></p>
                            <h2>0</h2>
                        </div>
                        <div className="testustacou">
                            <p></p>
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
                        <tbody>
                            {teacherdata && teacherdata.map((item) => {
                                return (
                                    <>
                                        {/* key={item._id} */}
                                        <tr key={item._id}>
                                            <td>{item.fullname}</td>
                                            <td>{item.qualification}</td>
                                            <td>{item.contact}</td>
                                            <td>{item.age}</td>
                                            <td>{item.subject}</td>
                                            <td>{item.salary}</td>
                                            {/* <td>{item.gender}</td> */}
                                            <td>
                                                <Link to={`/teachdetails/${item._id}`}> 👁</Link>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default TechDashboard;