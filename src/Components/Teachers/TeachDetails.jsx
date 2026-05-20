import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateTeach from "./UpdateTeach";
import Api from "../API/Api";
// import UpdateTeach from "./UpdateTeach";
// import Update from "../Layout/Update";
// import "./TeacherDetail.css";

function TeacherDetail() {

    const { id } = useParams();

    const [teachdetails, setTeachdetails] = useState()
    console.log(teachdetails);

    const [updateteachdata, setUpdateteachdata] = useState()

    async function getTeacher() {
        const res = await Api.get("/teacgergetdata")
        let teacherdata = res.data.user
        console.log("teacherdata", teacherdata)

        const findTeacher = await teacherdata.find((item) => item._id === id)
        setTeachdetails(findTeacher)
    }

    useEffect(() => {
        getTeacher()
    })

    async function deleteteacher(id) {
        console.log("delete", id)
        await Api.delete(`/deleteteacher/${id}`);
    }

    return (
        <div className="teacher-container">

            <div className="teacher-card">

                {/* Header */}
                <div className="teacher-header">
                    {/* <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="teacher"
                        className="teacher-image"
                    /> */}
                    <h2>Faculty Information</h2>

                    <h3>{teachdetails?.fullname}</h3>
                </div>

                {/* Details */}
                <div className="teacher-details">

                    <div className="detail-box">
                        <h2>Personal Details</h2>

                        <p>Age:-  {teachdetails?.age}</p>
                        <p>Subject:-  {teachdetails?.subject}</p>
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
                    <button onClick={() => deleteteacher(teachdetails?._id)} className="techfooterbtn">Remove</button>
                    <button onClick={() => setUpdateteachdata(true)} className="techfooterbtn">Update</button>
                    {
                        updateteachdata===true ? <UpdateTeach teachdetails={teachdetails} setUpdateteachdata={setUpdateteachdata} />:""
                    }
                </div>

            </div>

        </div>
    );
}

export default TeacherDetail;