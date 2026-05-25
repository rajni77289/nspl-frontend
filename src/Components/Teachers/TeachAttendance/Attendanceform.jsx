import React, { useState } from "react";
import Api from "../../API/Api";
import toast from "react-hot-toast";

function Attendanceform() {

    const [attendance, setAttendance] = useState({
        name: "",
        present: "",
        absent: ""
    })
    console.log(attendance)

    function getValue(e) {
        setAttendance({
            ...attendance,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        // const fattendance = new FormData()
        // fattendance.append("name", attendance.name)
        // fattendance.append("present", attendance.present)
        // fattendance.append("absent", attendance.absent)

        await Api.post("/attendancedata",attendance).then((res) => {
            console.log(res)
            if (res.data.status) {
                toast.success("SuccessFull Form", res.data.message)
            } else {
                toast.error(res.data.message)
            }
        })
    }

    return (
        <>
            <div className="attendance-form-wrapper">

                <form className="attendance-form" onSubmit={handleSubmit}>

                    <h2 className="attendance-form-title">
                        Add Attendance
                    </h2>
                    {/* <div className="attendance-input-box">
                        <label>Serial No</label>
                        <input type="number" name="serialno" placeholder="S.No" onChange={getValue} />
                    </div> */}

                    <div className="attendance-input-box">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter Name" onChange={getValue} />
                    </div>

                    <div className="attendance-input-box">
                        <label>Present</label>
                        <input type="number" name="present" placeholder="Present Days" onChange={getValue} />
                    </div>

                    <div className="attendance-input-box">
                        <label>Absent</label>
                        <input type="number" name="absent" placeholder="Absent Days" onChange={getValue} />
                    </div>

                    <button className="attendance-submit-btn">
                        Submit Attendance
                    </button>

                </form>

            </div>
        </>
    )
}
export default Attendanceform