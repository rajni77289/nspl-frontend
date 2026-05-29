import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateTeach from "./UpdateTeach";
import Api from "../API/Api";


function TeacherDetail() {

    const { id } = useParams();

    const [teachdetails, setTeachdetails] = useState()
    console.log(teachdetails);

    const [updateteachdata, setUpdateteachdata] = useState()

    async function getTeacher() {
        const res = await Api.get("/teachergetdata")
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

                        <p><spn style={{ fontWeight: "bold" }}>Age:-</spn>  {teachdetails?.age}</p>
                        <p><spn style={{ fontWeight: "bold" }}>Subject:-</spn>  {teachdetails?.subject}</p>
                        <p><spn style={{ fontWeight: "bold" }}>Qualification:-</spn>  {teachdetails?.qualification}</p>
                        <p><spn style={{ fontWeight: "bold" }}>Experience:-</spn> {teachdetails?.experience}</p>
                    </div>

                    <div className="detail-box">
                        <h2>Contact Details</h2>

                        <p><spn style={{ fontWeight: "bold" }}>Phone:-</spn>  {teachdetails?.contact}</p>
                        <p><spn style={{ fontWeight: "bold" }}>Email:-</spn>  {teachdetails?.email}</p>
                        <p><spn style={{ fontWeight: "bold" }}>Address:-</spn>  {teachdetails?.address}</p>
                        <p><spn style={{ fontWeight: "bold" }}>Salary:-</spn>  {teachdetails?.salary}</p>
                    </div>

                </div>

                {/* Footer */}
                <div className="teacher-footer">
                    <button onClick={() => deleteteacher(teachdetails?._id)} className="techfooterbtn1">Remove</button>
                    <button onClick={() => setUpdateteachdata(true)} className="techfooterbtn2">Update</button>
                    {
                        updateteachdata===true ? <UpdateTeach teachdetails={teachdetails} setUpdateteachdata={setUpdateteachdata} />:""
                    }
                </div>

            </div>

        </div>
    );
}

export default TeacherDetail;