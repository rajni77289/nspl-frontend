import React from "react";
import { Link } from "react-router-dom";
function Attendance() {
    return (
        <>
            <div className="Attendance">
                <div className="childattendanc1st">
                    <h4>Teachers Attendance</h4>
                    <button><Link to={'/attendance'}>Add+Attendance</Link></button>
                </div>
                <div className="childattendanc2st">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Present</th>
                            <th>Absent</th>
                            <th>Leave</th>
                            <th>Check In Time</th>
                            <th>Check Out Time</th>
                            <th>Monthly Attendance Report</th>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Attendance