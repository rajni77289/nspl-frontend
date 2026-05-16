import axios from "axios";
import React, { useState } from "react";


function EditEnformation({ user, setUpdate }) {
   
    const [username,setUsername] = useState()
    console.log(username)
    const [datebirth,setDatebirth] = useState()
    console.log(datebirth)

    const [phoneno,setPhoneno] = useState()
    console.log(phoneno)
    const [email,setEmail] = useState()
    console.log(email)
    const [bio,setBio] = useState()
    console.log(bio)
    const [state,setState] = useState()
    console.log(state)

   
 async function handleSubmit(e) {
        e.preventDefault()
        const res = await axios.post("http://localhost:8000/profiledata", {phoneno,datebirth,email,bio,state,username}).then((res) => {
            console.log(res)

        })
    }
    return (
        <>
            <form className="editprofiles" onSubmit={handleSubmit}>
                <h3>Update Information</h3>
                <div className="editchild">
                    <label>Name:</label>
                    <input type="text" name="username" placeholder="Username"  onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="editchild">
                    <label>Dath of Birth:</label>
                    <input type="text" name="datebirth" placeholder="Enter Your Dath of Birth"  onChange={(e) => setDatebirth(e.target.value)}/>
                </div>
                <div className="editchild">
                    <label>Phone No:</label>
                    <input type="text" name="phoneno" placeholder="Enter Your Phone Number"  onChange={(e) => setPhoneno(e.target.value)} />
                    {/* value={phoneno} onChange={(e) => setPhoneno(e.target.value)} */}
                </div>
                <div className="editchild">

                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Enter Your Email"   onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="editchild">
                    <label>Bio:</label>
                    <input type="text" name="bio" placeholder="Write something about yourself"  onChange={(e) => setBio(e.target.value)}/>
                </div>
                
                <div className="editchild">
                    <label>State:</label>
                    <input type="text" name="state" placeholder="Enter Your Dath of Birth"  onChange={(e) => setState(e.target.value)}/>
                </div>

                <button className="savebtn" type="submit">Save</button>


            </form>
        </>

    )
}
export default EditEnformation