import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./TeacherDetail.css";

function TeacherDetail() {

    const { id } = useParams();

    const [teachdetails, setTeachdetails] = useState()
    console.log(teachdetails);

    async function getTeacher() {
        const res = await axios.get("http://localhost:8000/teacgergetdata")
        let teacherdata = res.data.user
        console.log("teacherdata", teacherdata)

        const findTeacher = await teacherdata.find((item) => item._id === id)
        setTeachdetails(findTeacher)
    }

    useEffect(() => {
        getTeacher()
    })

    return (
        <div className="teacher-container">

            <div className="teacher-card">

                {/* Header */}
                <div className="teacher-header">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="teacher"
                        className="teacher-image"
                    />

                    <h1>{teachdetails?.fullname}</h1>
                    <p>{teachdetails?.subject} Teacher</p>
                </div>

                {/* Details */}
                <div className="teacher-details">

                    <div className="detail-box">
                        <h2>Personal Details</h2>

                        <p>Age:-  {teachdetails?.age}</p>
                        <p>Gender:-  {teachdetails?.gender}</p>
                        <p>Qualification:-  {teachdetails?.qualification}</p>
                        <p>Experience:- {teachdetails?.experience}</p>
                    </div>

                    <div className="detail-box">
                        <h2>Contact Details</h2>

                        <p>Phone:-  {teachdetails?.contact}</p>
                        <p>Email:-  {teachdetails?.email}</p>
                        <p>Address:-  {teachdetails?.address}</p>
                        <p>Salary:-  {teachdetails?.salary}</p>
                    </div>

                </div>

                {/* Footer */}
                <div className="teacher-footer">
                    <button>Edit Profile</button>
                </div>

            </div>

        </div>
    );
}

export default TeacherDetail;