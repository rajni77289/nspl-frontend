import React from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
function Login() {

    const [logindata, setLogindata] = useState();
    console.log(logindata)

    const nav = useNavigate();

    function getData(e) {
        setLogindata({
            ...logindata,
            [e.target.name]: e.target.value

        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("Login")
        const res = await axios.post("http://localhost:8000/login", logindata).then((res) => {
            console.log(res)
            if (res.data.status) {
                localStorage.setItem("nspl", JSON.stringify(res.data.user))
                toast.success("successfull login")
                localStorage.setItem("nsplAuth", "true")
                setTimeout(() => {
                    nav("/")
                }, 1000)
            }
            else {
                toast.error(res.data.message)
            }
        })

    }
    return (
        <>
            <Toaster />
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <h1 className="login-title">Login</h1>

                    <div className="input-group">
                        <input
                            className="login-input"
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={getData}
                        />
                    </div>

                    <div className="input-group">
                        <input
                            className="login-input"
                            type="text"
                            name="password"
                            placeholder="Password"
                            onChange={getData}
                        />
                    </div>
                    <button type="submit" className="login-button">Submit</button>
                    <p className="parasig">Don't have an account?  <Link to={'/signup'}>Sign Up</Link></p>
                </form>
            </div>
        </>
    )
}
export default Login

{/* {/* <div className="main">
                <form onSubmit={handleSubmit} className="mainform">
                    <h1>Login</h1>

                    <div className="">
                        <input type="text" name="email" placeholder="Email" onChange={getData} />
                    </div>
                    <div className="">
                        <input type="text" name="password" placeholder="Password" onChange={getData} />
                    </div>
                    <button type="Submit" className="forbtn" style={{ marginBottom: "40px" }}>Submit</button>
                </form>
            </div> */}

