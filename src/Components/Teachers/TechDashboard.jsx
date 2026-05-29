import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../API/Api";

function TechDashboard() {

    const [teacherdata, setTeacherdata] = useState([])
    console.log(teacherdata);

    // const [teacherData, setTeacherData] = useState([]);



    async function getTeacher() {
        await Api.get("/teachergetdata").then((res) => {
            console.log(res.data.user);
            setTeacherdata(res.data.user);
            // teacgergetdata


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
            <div className="teacher-dashboard">

    {/* Top Card Section */}
    <div className="teacher-topbar">

        <div className="teacher-stats-card">
            <div className="teacher-stats-content">
                <p className="teacher-label">
                    Faculty Members ✨
                </p>

                <h2 className="teacher-count">
                    {teacherdata?.length}
                </h2>

                <span className="teacher-subtitle">
                    Active teaching staff records
                </span>
            </div>
        </div>

        <button className="teacher-add-btn">
            <Link to={'/techregistation'}>
                Add New Member +
            </Link>
        </button>

    </div>

    {/* Table Section */}
    <div className="teacher-table-wrapper">

        <table className="teacher-table">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Qualification</th>
                    <th>Contact</th>
                    <th>Age</th>
                    <th>Subject</th>
                    <th>Salary</th>
                    <th>View</th>
                </tr>
            </thead>

            <tbody>

                {teacherdata && teacherdata.map((item) => {
                    return (

                        <tr key={item._id}>
                            <td>{item.fullname}</td>
                            <td>{item.qualification}</td>
                            <td>{item.contact}</td>
                            <td>{item.age}</td>
                            <td>{item.subject}</td>
                            <td>{item.salary}</td>

                            <td>
                                <Link
                                    className="teacher-view-btn"
                                    to={`/teachdetails/${item._id}`}
                                >
                                    👁
                                </Link>
                            </td>
                        </tr>

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