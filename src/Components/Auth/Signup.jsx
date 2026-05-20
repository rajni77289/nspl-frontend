import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../API/Api";

function Signup() {
    const [data, setData] = useState();
    console.log(data);

    const navigete = useNavigate()

    function getValue(e) {
        setData({
            // spread opratore
            ...data,
            [e.target.name]: e.target.value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        // check: the API
        await Api.post("/postdata", data).then((res) => {
            console.log(res.data.status)
            if (res.data.status) {
                toast.success("SuccessFull Signup")
                setTimeout(() => {
                    navigete('/')
                }, 1000)
            }
            else {
                toast.error("Invelid Signup")
            }
        })
    }
    return (
        <>
      <Toaster />
           <div className="signup-container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h1 className="signup-title">Signup</h1>

                    <div className="form-group">
                        <input type="text" name="username" placeholder="User Name" onChange={getValue} />
                    </div>

                    <div className="form-group">
                        <input type="text" name="email" placeholder="Email" onChange={getValue} />
                    </div>

                    <div className="form-group">
                        <input type="text" name="password" placeholder="Password" onChange={getValue} />
                    </div>
                    <button type="submit" className="signup-btn">Submit</button>
                    <p className="parasig">Already have an account?  <Link to={'/login'}>Login</Link></p>
                </form>
            </div>
        </>
    )
}
export default Signup