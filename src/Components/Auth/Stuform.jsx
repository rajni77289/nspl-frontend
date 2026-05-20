// import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../API/Api";


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


        await Api.post("/studata", fdata).then((res) => {
            if (res.data.status) {
                toast.success("SuccessFull Form", res.data.message)
                setTimeout(() => {
                    nav('/')
                }, 2000)
            }
            else {
                toast.error("Invelid Form", res.data.message)
            }
        })
    }

    return (
        <>

            {/* mother name or ba,bcom.bsc ye defilen nhi ho raha h  */}


            <Toaster />

            <div className="student">
                <h3>Registration Form</h3>

                <form onSubmit={hendlesubmit} encType="multipart/form-data">

                    <div className="names">
                        <input type="text" name="firstname" placeholder="First Name" required onChange={getValue} />
                        <input type="text" name="lastname" placeholder="Last Name" onChange={getValue} />
                    </div>

                    <div className="fath">
                        <input type="text" name="fathername" placeholder="Father Name" required onChange={getValue} />
                    </div>

                    <div className="address">
                        <input type="text" name="roll_no" placeholder="Roll No" required onChange={getValue} />
                        <input type="text" name="address" placeholder="Address" required onChange={getValue} />
                    </div>

                    <div className="sub">
                        <select name="course" required onChange={getValue}>
                            <option value="">Select Course</option>
                            <option value="bca">BCA</option>
                            <option value="bba">BBA</option>
                            <option value="mca">MCA</option>
                            <option value="mba">MBA</option>
                            <option value="b.com">B.Com</option>
                            <option value="iti">ITI</option>
                            <option value="ba">B.A</option>
                            <option value="bsc">B.Sc</option>
                        </select>

                        <select name="courseduration" required onChange={getValue}>
                            <option value="">Course Duration</option>
                            <option value="6months">6 Months</option>
                            <option value="1-2years">1-2 Years</option>
                            <option value="2years">2 Years</option>
                            <option value="3years">3 Years</option>
                        </select>
                    </div>

                    <div className="date">
                        <input type="date" name="date" required onChange={getValue} />
                        <input type="file" name="image" onChange={(e) => setImages(e.target.files[0])} />
                    </div>

                    <div className="address">
                        <input type="text" name="mobailno" placeholder="Mobile Number" required onChange={getValue} />
                        <input type="text" name="email" placeholder="Email Address" required onChange={getValue} />
                    </div>

                    <div className="gender">
                        <input type="text" name="state" placeholder="State" required onChange={getValue} />

                        <select name="category" required onChange={getValue}>
                            <option value="">Category</option>
                            <option value="obc">OBC</option>
                            <option value="sc">SC</option>
                            <option value="st">ST</option>
                            <option value="st">Other</option>
                        </select>
                    </div>

                    <div className="gender">
                        <div className="radio-group">
                            <span>
                                <input type="radio" name="gender" value="male" onChange={getValue} />
                                Male
                            </span>

                            <span>
                                <input type="radio" name="gender" value="female" onChange={getValue} />
                                Female
                            </span>

                            <span>
                                <input type="radio" name="gender" value="other" onChange={getValue} />
                                Other
                            </span>
                        </div>
                    </div>

                    <button type="submit" className="subbtn">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Stuform