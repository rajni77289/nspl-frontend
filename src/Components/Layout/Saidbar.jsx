import React from "react";
import { Link} from "react-router-dom";


function Saidbar() {

    // const nav = useNavigate()
    // function logout() {
    //     localStorage.removeItem("nsplAuth")
    //     nav('/login')
    // }
    return (
        <>
            <div className="sidebar">
                {/* <h2 className="sidebar-logo">Dashboard</h2> */}
                <h2> Dashboard</h2>
                {/* <p>Admin Panel</p> */}
                <ul className="sidebar-menu">
                    <li><Link to={'home'}>🏠 Home</Link></li>
                    <li><Link to={'teacher'}>👩‍🏫 Teachers</Link></li>
                    <li><Link to={'student'}>🎓 Students</Link></li>
                    <li><Link to={"profile"}>&#128100; Profile</Link></li>
                    <li><Link to={'/attendance'}> Attendance</Link></li>
                    <li>⚙️ Settings</li>
                    {/*📝 <button onClick={logout} className="logout" >Logout</button> */}

                </ul>
            </div>

        </>
    )
}
export default Saidbar