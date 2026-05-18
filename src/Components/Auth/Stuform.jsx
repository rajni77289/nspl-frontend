// import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Stuform() {
    const nav = useNavigate()
    const [images, setImages] = useState();
    const [datas, setDatas] = useState({
        firstname: "",
        lastname: "",
        fathername: "",
        mobailno: "",
        email: "",
        roll_no: "",
        date: "",
        address: "",
        course: "",
        state: "",
        gender: "",
        courseduration: "",
        category: "",
    })

    console.log(datas)
    console.log(images)

    function getValue(e) {
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        })
    }
    async function hendlesubmit(e) {
        e.preventDefault()
        const fdata = new FormData()
        fdata.append("firstname", datas.firstname)
        fdata.append("lastname", datas.lastname)
        fdata.append("fathername", datas.fathername)
        fdata.append("mobailno", datas.mobailno)
        fdata.append("email", datas.email)
        fdata.append("roll_no", datas.roll_no)
        fdata.append("date", datas.date)
        fdata.append("address", datas.address)
        fdata.append("course", datas.course)
        fdata.append("state", datas.state)
        fdata.append("gender", datas.gender)
        fdata.append("courseduration", datas.courseduration)
        fdata.append("category", datas.category)
        fdata.append("image", images)

        console.log(fdata);


         await axios.post("https://nspl-backend.vercel.app/studata", fdata).then((res) => {
            if (res.data.status) {
                toast.success("success", res.data.message)
                setTimeout(() => {
                    nav('/')
                }, 2000)
            }
            else {
                toast.error("Invelid", res.data.message)
            }
        })
    }

    return (
        <>

{/* mother name or ba,bcom.bsc ye defilen nhi ho raha h  */}


            <Toaster/>
            <div className="student" style={{padding:"5px",marginBottom:"20px"}}>
                <h3>Registration Form</h3>
                <form htmlFor="" onSubmit={hendlesubmit} encType="multipart/form-data">
                    <div className="names">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="firstname" placeholder="First Name" required onChange={getValue} />

                        <input type="text" id="name" name="lastname" placeholder="Last Name" onChange={getValue} />
                    </div>
                    <div className="fath">
                        <label htmlFor="fathername">Father Name:</label>
                        <input type="text" id="fathername" name="fathername" placeholder="Father Name" required onChange={getValue} />
                    </div>
                    {/* <div className="fath">
                        <label htmlFor="mothername">Mother Name:</label>
                        <input type="text" id="mothername" name="mothername" placeholder="Mother Name" required onChange={getValue} />
                    </div> */}
                    <div className="address">
                        <label htmlFor="">Roll_No:</label>
                        <input type="text" id="roll_no" name="roll_no" placeholder="roll_no" required onChange={getValue} />
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" placeholder="Address" required onChange={getValue} />
                    </div>

                    {/* ==========================select course-============================= */}
                    <div className="sub">
                        <label htmlFor="course">Course:</label>

                        <select id="course" name="course" required onChange={getValue}>
                            <option value="">Select</option>
                            <option value="bca">BCA</option>
                            <option value="bba">BBA</option>
                            <option value="mca">MCA</option>
                            <option value="mba">MBA</option>
                            <option value="b.com">B.Com</option>
                            <option value="iti">ITI</option>
                            <option value="it">B.A</option>
                            <option value="it">B.sc</option>

                        </select>

                        {/* =========================course Duration========================== */}

                        <label htmlFor="courseduration">Course Duration:</label>

                        <select id="courseduration" name="courseduration" required onChange={getValue}>
                            <option value="">Select</option>
                            <option value="3years">3 years</option>
                            <option value="3years">3 years</option>
                            <option value="3years">3 years</option>
                            <option value="2years">2 years</option>
                            <option value="2years">2 years</option>
                            <option value="3years">1-2 years</option>
                            <option value="6months">6 Months</option>
                        </select>
                    </div>


                    <div className="date">
                        <label htmlFor="date">Date:</label>
                        <input type="date" name="date" id="date" required onChange={getValue} />

                        <label htmlFor="photo">Photo :</label>
                        <input type="file" name="image" onChange={(e) => setImages(e.target.files[0])} style={{ marginLeft: "20px" }} />
                    </div>
                    <div className="address">
                        <label htmlFor="mobailno">Mobail No:</label>
                        <input type="text" id="mobailno" name="mobailno" placeholder="mobailno" required onChange={getValue} />

                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Email" required onChange={getValue} />
                    </div>

                    {/*=========================select===================== */}

                    <div className="gender">
                        <label htmlFor="state">State:</label>

                        <select id="state" name="state" required onChange={getValue}>
                            <option value="">Select</option>
                            <option value="rajasthan">Rajasthan</option>
                            <option value="gujarat">Gujarat</option>
                            <option value="haryana">Haryana</option>
                            <option value="kerala">Kerala</option>
                            <option value="andhrapradesh">Andhra Pradesh</option>
                            <option value="goa">Goa</option>
                            <option value="himachalpradesh">Himachal Pradesh</option>
                        </select>

                        {/* =====================category====================== */}

                        <label htmlFor="category">category:</label>
                        <select id="category" name="category" required onChange={getValue}>
                            <option value="">Select</option>
                            <option value="obc">OBC</option>
                            <option value="st">ST</option>
                            <option value="sc">SC</option>
                        </select>
                    </div>

                    <div className="gender">
                        <label>Gender:</label><br />

                        <label htmlFor="male">Male </label>
                        <input type="radio" name="gender" value="male" onChange={getValue} required />

                        <label htmlFor="female">Female </label>
                        <input type="radio" name="gender" value="female" onChange={getValue} required />

                        <label htmlFor="other">Other </label>
                        <input type="radio" name="gender" value="other" onChange={getValue} required />

                    </div>
                    <button type="submit" className="subbtn">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Stuform