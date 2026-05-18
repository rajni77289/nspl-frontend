import React from "react";
import { useState } from "react";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

function Update({ detailstu, setUpdate }) {
    const [images, setImages] = useState();
    console.log(images);
    const [datas, setDatas] = useState()

    // const [lastname, setlastname] = useState(detailstu?.lastname);
    // const [fathername, setfathername] = useState(detailstu?.fathername);
    // const [address, setaddress] = useState(detailstu?.address);
    // const [course, setcourse] = useState(detailstu?.course);
    // const [courseduration, setcourseduration] = useState(detailstu?.courseduration);
    // const [mobailno, setmobailno] = useState(detailstu?.mobailno);
    // const [email, setemail] = useState(detailstu?.email);
    // const [image, setimage] = useState(detailstu?.image);
    // const [state, setstate] = useState(detailstu?.state);

    const [firstname, setFirstname] = useState(detailstu?.firstname);
    const [roll_no, setRoll_no] = useState(detailstu?.roll_no);
    const [date, setDate] = useState(detailstu?.date);
    const [category, setCategory] = useState(detailstu?.category);


    const hendleChange = (e) => {
        setDatas({ ...datas, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {

        const id = detailstu?._id
        e.preventDefault()
         await axios.post(`https://nspl-backend.vercel.app/updatestudent/${id}`, { firstname, roll_no, date, category }).then((res) => {
            console.log(res)
        })

        // page refresh ke liye

    }

    return (
        <>
            <div className="form-container">
                <h2>Update Form</h2>

                <form encType="multipart/form-data">

                    <div className="row">
                        <input type="text" name="firstname" value={firstname} placeholder="First Name" required onChange={(e) => setFirstname(e.target.value)} />
                        <input type="text" name="lastname" placeholder="Last Name" required onChange={hendleChange} />
                    </div>

                    <input type="text" name="fathername" placeholder="Father Name" required onChange={hendleChange} />

                    <input type="text" name="roll_no" placeholder="Roll No" required value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />

                    <input type="text" name="address" placeholder="Address" required onChange={hendleChange} />

                    <div className="row">
                        <select name="course" required onChange={hendleChange}>
                            <option value="">Select Course</option>
                            <option value="bca">BCA</option>
                            <option value="bba">BBA</option>
                            <option value="mca">MCA</option>
                            <option value="mba">MBA</option>
                            <option value="bcom">B.Com</option>
                            <option value="iti">ITI</option>
                            <option value="it">IT</option>
                        </select>

                        <select name="courseduration" required onChange={hendleChange}>
                            <option value="">Duration</option>
                            <option value="3years">3 Years</option>
                            <option value="2years">2 Years</option>
                            <option value="1-2years">1-2 Years</option>
                            <option value="6months">6 Months</option>
                        </select>
                    </div>

                    <input type="date" name="date" required value={date} onChange={(e) => setDate(e.target.value)} />

                    <input type="text" name="mobailno" placeholder="Mobile No" required onChange={hendleChange} />

                    <input type="email" name="email" placeholder="Email" required onChange={hendleChange} />

                    <input type="file" name="image" onChange={(e) => setImages(e.target.files[0])}  />

                    <div className="row">
                        <select name="state" onChange={hendleChange}>
                            <option value="">Select State</option>
                            <option value="rajasthan">Rajasthan</option>
                            <option value="gujarat">Gujarat</option>
                            <option value="haryana">Haryana</option>
                            <option value="kerala">Kerala</option>
                            <option value="andhra">Andhra Pradesh</option>
                            <option value="goa">Goa</option>
                            <option value="himachal">Himachal Pradesh</option>
                        </select>

                        <select name="category" required value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Category</option>
                            <option value="obc">OBC</option>
                            <option value="st">ST</option>
                            <option value="sc">SC</option>
                        </select>
                    </div>

                    <div className="gender">
                        <input type="radio" name="gender" value="male" onChange={hendleChange} />
                        <label> Male</label>
                        <input type="radio" name="gender" value="female" onChange={hendleChange} />
                        <label>Female</label>
                        <input type="radio" name="gender" value="other" onChange={hendleChange} />
                        <label>Other</label>
                    </div>

                    {/* <button type="submit" className="updatebtn">Submit</button> */}
                    <button type="submit" onClick={handleSubmit} className="updatebtn">Submit</button>
                    <button type="submit" onClick={handleSubmit} className="updatebtn">Close</button>
                </form>
            </div>
        </>
    )
}
export default Update