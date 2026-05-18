// import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function TechRegistation() {

  const nav = useNavigate()
  // const [images, setImages] = useState();
  // console.log(images);

  const [teacher, setTeacher] = useState({
    fullname: "",
    qualification: "",
    contact: "",
    age: "",
    subject: "",
    salary: "",
    email: "",
    address: "",
    experience: "",
  })
  console.log(teacher)
  // console.log(image)

  function getValue(e) {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value
    })
  }

  // API function :-
  async function handleSubmit(e) {
    e.preventDefault()
    const fteacher = new FormData()
    fteacher.append("fullname", teacher.fullname)
    fteacher.append("qualification", teacher.qualification)
    fteacher.append("age", teacher.age)
    fteacher.append("subject", teacher.subject)
    fteacher.append("contact", teacher.contact)
    fteacher.append("email", teacher.email)
    fteacher.append("address", teacher.address)
    fteacher.append("salary", teacher.salary)
    fteacher.append("experience", teacher.experience);
    fteacher.append("date", teacher.date)

    // fteacher.append("image",images);



    console.log(fteacher)

    await axios.post("https://nspl-backend.vercel.app/teacherdata", teacher).then((res) => {
      console.log(res)
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
      <div className="teacher-form">
        <h2>Teacher Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="fullname" placeholder="Full Name" onChange={getValue} />
          <input type="text" name="qualification" placeholder="Qualification" onChange={getValue} />
          <input type="number" name="age" placeholder="Age" onChange={getValue} />
          <input type="text" name="subject" placeholder="Subject" onChange={getValue} />
          <input type="text" name="contact" placeholder="Contact Number" onChange={getValue} />
          <input type="email" name="email" placeholder="Email Address" onChange={getValue} />
          <input type="text" name="address" placeholder="Address" onChange={getValue} />
          <input type="number" name="salary" placeholder="Salary" onChange={getValue} />
          <input type="text" name="experience" placeholder="Experience (Years)" onChange={getValue} />
          {/* <div> */}
            {/* <label>Select Joining Date</label>
            <input type="date" name="date" />
          </div> */}
          {/* <div>
            <label>Upload Teacher Photo</label>
            <input type="file" name="photo" onChange={(e) => setImages(e.target.files[0])} style={{ marginLeft: "20px" }} />
          </div> */}

          {/* <select name="gender" onChange={getValue}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select> */}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
export default TechRegistation