// import React, { useState, useEffect } from "react";
// import Api from "../API/Api";

// function Notification() {
//     const [notificationdata, setNotificationdata] = useState([])

//      useEffect(() => {

//         Api.get("/notifications")
//         .then((res) => {

//             console.log(res.data)

//             setNotificationdata(res.data.user || [])

//         })
//         .catch((err) => {
//             console.log(err)
//             setNotificationdata([])
//         })

//     }, [])

//     const handleSubmit = async () => {

//    await Api.post("/allstudent")

//    await Api.post("/notifications", {
//       message: "New student added"
//    })

// }
//     return (

//         <>
//             <div>
//                 <h2>Notifications</h2>
//                 {
//                     notificationdata?.map((item) => {
//                         return (
//                             <>

//                                 <div key={item._id}>
//                                     <h4>{item.message}</h4>
//                                     <p>
//                                         {new Date(item.createdAt).toLocaleString()}
//                                     </p>
//                                 </div>
//                             </>
//                         )
//                     })

//                 }
//             </div>
//         </>
//     )
// }
// export default Notification