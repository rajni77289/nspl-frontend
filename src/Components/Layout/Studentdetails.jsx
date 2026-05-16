import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Update from "../Layout/Update";


function Studentdetails() {
    const navigate = useNavigate()
    const { id } = useParams()

    const [detailstu, setDetailstu] = useState()
    console.log(detailstu)
    const [update, setUpdate] = useState()

    async function getStudents() {
        const res = await axios.get("http://localhost:8000/studentgetdata");
        let studentdata = res.data.user
        console.log("studentdata", studentdata)
        const findStudent = await studentdata.find((item) => item._id == id)
        setDetailstu(findStudent);

    }

    useEffect(() => {
        getStudents()
    }, [])


    async function deletestudent(id) {
        console.log("delete", id)
        const res = await axios.delete(`http://localhost:8000/deletestudent/${id}`);

    }
    return (
        <>
            <div className="mainstudent">
                <h2 className="profilepage">Student Details Page</h2>

                <div className="allde">
                    <div className="imgname">
                        {/* <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style={{ borderRadius: "10px", width: "100%", height: "190px" }} /> */}
                        <img
                            src={`data:image/;base64,${btoa(
                                String.fromCharCode(
                                    ...new Uint8Array(detailstu?.image?.data?.data || "")
                                )
                            )}`} style={{ width: "70%", borderRadius: "5px", boxShadow: "0 5px 15px white" }} />
                        <div>
                            <h3 className="firstlast">{detailstu?.firstname} {detailstu?.lastname}</h3>
                            <label className="roll">Roll_No:- {detailstu?.roll_no}</label>
                        </div>
                    </div>
                    <div className="allinfo">
                        <h4 className="genral" >General Information :-</h4>

                        <div style={{ display: "flex" }}>
                            <div className="father">
                                <div className="multinput" >
                                    <label>Father Name :-</label>
                                </div>

                                <div className="multinput">
                                    <label>Address :-</label>
                                </div>
                                <div className="multinput">
                                    <label>Course :-</label>
                                </div>
                                <div className="multinput">
                                    <label>Courseduration :-</label>
                                </div>
                                <div className="multinput">
                                    <label>Mobail No :-</label>
                                </div>
                                <div className="multinput">
                                    <label>Email :-</label>
                                </div>
                                <div className="multinput">
                                    <label>State :-</label>
                                </div>
                                <div className="multinput">
                                    <label>Category :-</label>
                                </div>
                                <div className="multinput">
                                    <label>date :-</label>
                                </div>
                                <div className="multinput">
                                    <label>gender :-</label>
                                </div>


                            </div>
                            <div className="point">
                                <p >:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className="datas">
                                <p>{detailstu?.fathername}</p>
                                <p>{detailstu?.mothername}</p>
                                <p>{detailstu?.address}</p>
                                <p>{detailstu?.course}</p>
                                <p>{detailstu?.courseduration}</p>
                                <p>{detailstu?.mobailno}</p>
                                <p>{detailstu?.email}</p>
                                <p>{detailstu?.state}</p>
                                <p>{detailstu?.category}</p>
                                <p>{detailstu?.date}</p>
                                <p>{detailstu?.gender}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="twobtn">
                    <button onClick={() => deletestudent(detailstu?._id)} className="delbtn">Delete</button>
                    <button onClick={() => setUpdate(true)} className="delbtn">Update</button>
                    {
                        update == true ? <Update detailstu={detailstu} setUpdate={setUpdate} /> : ""
                    }
                </div>

            </div>
        </>
    )
}
export default Studentdetails
