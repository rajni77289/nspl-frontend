import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../API/Api";
function Attendance() {

    const [attendancedata, setAttendancedata] = useState([])
    console.log("data",attendancedata)

    async function getAttendance(){
        await Api.get("/getattendance").then((res)=>{
            console.log(res.data.user)
            setAttendancedata(res.data.user)
        })
    }

    useEffect(()=>{
        getAttendance()
    },[])
    return (
        <>

            <div className="attendance-wrapper">

                <div className="attendance-header">
                    <h4 className="attendance-title">Student Attendance</h4>

                    <button className="add-attendance-btn">
                        <Link to={'/attendanceform'}>Add + Attendance</Link>
                    </button>
                </div>

                <div className="attendance-table-box">

                    <table className="attendance-table">
                        <thead>
                            <tr>

                                <th>S.No</th>
                                <th>Name</th>
                                <th>Present</th>
                                <th>Absent</th>
                                <th>Monthly Attendance Report</th>
                                <th>Total Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                attendancedata.map((item, index) => {
                                    return(
                                        <>
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.present}</td>
                                        <td>{item.absent}</td>
                                        <td>{item.monthlyattenreport}</td>
                                        <td>{item.totalpercentage}%</td>
                                    </tr>
                                    </>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                </div>

            </div>
        </>
    )
}
export default Attendance