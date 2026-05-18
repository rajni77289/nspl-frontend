import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa6";

function Student() {

    const [studentdata, setStudentdata] = useState([])
    console.log(studentdata)

    // const nav = useNavigate()

    const [Bca, setBca] = useState([]);
    // const [Bba, setBba] = useState([]);
    const [Mba, setMba] = useState([]);
    const [Mca, setMca] = useState([]);
    const [Iti, setIti] = useState([]);
    // const [Ba, setBa]=useState([]);
    // const [Bcom, setBcom] = useState([]);
    // const [Bsc, setBsc] = useState([]);

    

    async function getStudents() {
     await axios.get("https://nspl-backend.vercel.app/studentgetdata").then((res) => {
            console.log(res.data.user)
            setStudentdata(res.data.user)

            // const students = res.data.user;
            // const bcastudent = students.filter((item) => item.course == "bba")
            // console.log(bcastudent)

            // const bcastudent2 = students.filter((item) => item.bath == "BBA")
            // setBca(bcastudent2)

            const students = res.data.user
            const bcaStudents = students.filter((item) => item.course === "bca")
            setBca(bcaStudents)

            // const bbaStudents = students.filter((item) => item.course == "bba")
            // setBba(bbaStudents)

            const mbaStudents = students.filter((item) => item.course === "mba")
            setMba(mbaStudents)

            const mcaStudents = students.filter((item) => item.course === "mca")
            setMca(mcaStudents)

            const itiStudents = students.filter((item) => item.course === "iti")
            setIti(itiStudents);

            // const baStudents = students.filter((item) => item.course == "ba")
            // setIti(baStudents);

            // const bcomStudents = students.filter((item) => item.course == "bcom")
            // setIti(bcomStudents);

            // const bscStudents = students.filter((item) => item.course == "bsc")
            // setIti(bscStudents);
        })
    }


    // function logout() {
    //     localStorage.removeItem("nsplAuth")
    //     nav('/login')
    // }


    useEffect(() => {
        getStudents()
    }, [])


    return (
        <>
            <div className="start">
                <div className="startchaild">
                    <div className="cart">
                        <p>BCA Students</p>
                        <h2>{Bca.length}</h2>
                    </div>
                    <div className="cart">
                        <p>BBA Students</p>
                        {/* <h2>{Bba.length}</h2> */}
                    </div>
                    <div className="cart">
                        <p>MBA Students</p>
                        <h2>{Mba.length}</h2>
                    </div>
                    <div className="cart">
                        <p>MCA Students</p>
                        <h2>{Mca.length}</h2>
                    </div>
                </div>
                <div className="startchaild">
                    <div className="cart">
                        <p>ITI Students</p>
                        <h2>{Iti.length}</h2>
                    </div>
                    <div className="cart">
                        <p>B.A Students</p>
                        {/* <h2>{Ba.length}</h2> */}
                    </div>
                    <div className="cart">
                        <p>B.com Students</p>
                        {/* <h2>{Bcom.length}</h2> */}
                    </div>
                    <div className="cart">
                        <p>B.sc Students</p>
                        {/* <h2>{Bsc.length}</h2> */}
                    </div>
                </div>
            </div>

            {/* filters */}
            <div className="filters">
                <button className="add-btn">
                    <Link to="/stuform">
                        <span style={{ color: "white", fontSize: "17px" }}>+Add Student</span>
                    </Link>
                </button>
            </div>

            {/* table */}
            <div className="tablecon">
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Roll_No</th>
                            <th>Course</th>
                            <th>Mobailno</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentdata && studentdata.map((item) => {
                            return (
                                <tr key={item._id}>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.roll_no}</td>
                                    <td>{item.course}</td>
                                    <td>{item.mobailno}</td>
                                    <td>{item.state}</td>
                                    <td>
                                        <Link to={`/studentdetails/${item._id}`}><FaEye/></Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Student