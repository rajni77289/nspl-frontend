import React, { useState } from "react";
import Api from "../API/Api";

function UpdateTeach({ teachdetails, setUpdateteachdata }) {

    const [upteacher, setUpteacher] = useState({})
    console.log(upteacher);

    // const [closeicon, setCloseicon] = useState(false);

    const [subject, setSubject] = useState(teachdetails?.subject)
    const [contact, setContact] = useState(teachdetails?.contact)
    const [email, setEmail] = useState(teachdetails?.email)
    const [address, setAddress] = useState(teachdetails?.address)
    const [salary, setSalary] = useState(teachdetails?.salary)
    const [experience, setExperience] = useState(teachdetails?.experience)




    const handlechange = (e) => {
        setUpteacher({ ...UpdateTeach, [e.target.name]: e.target.value });
    }

    const hendleSubmit = async (e) => {
        const id = teachdetails?._id;
        e.preventDefault()
        await Api.post(`/teacherupdate/${id}`, { subject, contact, email, address, salary, experience }).then((res) => {
            console.log(res);
        })
    }
    return (
        <>
                <div className="teacher_popup_wrapper">

                    <div className="teacher_popup_form_box">

                        <div
                            className="teacher_popup_close_icon"
                            onClick={() => setUpdateteachdata(false)}
                        >
                            <p>&times;</p>
                        </div>

                        <h2 className="teacher_popup_heading">
                            Update Faculty Information
                        </h2>
                        <form className="teacher_popup_form" onSubmit={hendleSubmit}>

                            <div className="teacher_popup_input_box">
                                <label>Full Name</label>

                                <input
                                    className="teacher_popup_input"
                                    type="text"
                                    name="fullname"
                                    placeholder="Enter full name"
                                    onChange={handlechange}

                                />
                            </div>

                            <div className="teacher_popup_input_box">
                                <label>Qualification</label>

                                <input
                                    className="teacher_popup_input"
                                    type="text"
                                    name="qualification"
                                    placeholder="Enter qualification"
                                    onChange={handlechange}
                                />
                            </div>

                            <div className="teacher_popup_input_box">
                                <label>Age</label>

                                <input
                                    className="teacher_popup_input"
                                    type="number"
                                    name="age"
                                    placeholder="Enter age"
                                    onChange={handlechange}
                                />
                            </div>

                            <div className="teacher_popup_input_box">
                                <label>Subject</label>

                                <input
                                    className="teacher_popup_input"
                                    type="text"
                                    name="subject"
                                    placeholder="Enter subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>

                            <div className="teacher_popup_input_box">
                                <label>Contact Number</label>

                                <input
                                    className="teacher_popup_input"
                                    type="text"
                                    name="contact"
                                    placeholder="Enter contact number"
                                    value={contact}

                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>

                            <div className="teacher_popup_input_box">
                                <label>Email Address</label>

                                <input
                                    className="teacher_popup_input"
                                    type="email"
                                    name="email"
                                    placeholder="Enter email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="teacher_popup_input_box">
                                <label>Address</label>

                                <input
                                    className="teacher_popup_input"
                                    type="text"
                                    name="address"
                                    placeholder="Enter address"
                                    value={address}

                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="teacher_popup_input_box">
                                <label>Salary</label>

                                <input
                                    className="teacher_popup_input"
                                    type="number"
                                    name="salary"
                                    placeholder="Enter salary"
                                    value={salary}

                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </div>

                            <div className="teacher_popup_input_box">
                                <label>Experience (Years)</label>

                                <input
                                    className="teacher_popup_input"
                                    type="text"
                                    name="experience"
                                    placeholder="Enter experience"
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}

                                />
                            </div>

                            <button
                                className="teacher_popup_submit_btn" type="submit">Submit</button>

                        </form>

                    </div>

                </div>

        </>
    )
}
export default UpdateTeach