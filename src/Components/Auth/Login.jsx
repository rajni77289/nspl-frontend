import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Api from "../API/Api";
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
        await Api.post("/login", logindata).then((res) => {
            console.log(res)
            if (res.data.status) {
                localStorage.setItem("nspl", JSON.stringify(res.data.user))
                toast.success("SuccessFull Login")
                localStorage.setItem("nsplAuth", "true")
                setTimeout(() => {
                    nav("/")
                }, 1000)
            }
            else {
                toast.error("Invalid Login",res.data.message)
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



