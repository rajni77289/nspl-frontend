// import { getValue } from "@testing-library/user-event/dist/utils";
// import React, { useState } from "react";

// function EditEnformation() {
//     const [profiledata, setprofiledata] = useState()
//     console.log(profiledata);

//         const [edituser, setEdituser] = useState()


//     function getValue(e) {
//         setprofiledata({ ...profiledata, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = async (e) => {

//     }

//         return (
//             <>
// <form className="editprofiles">
//     <h3>Update Information</h3>
//     <div className="editchild">
//         <label>Name:</label>
//         <input type="text" name="" placeholder="Username" onChange={getValue} />
//     </div>
//     <div className="editchild">
//         <label>Dath of Birth:</label>
//         <input type="text" name="" placeholder="Enter Your Dath of Birth" onChange={getValue} />
//     </div>
//     <div className="editchild">
//         <label>Phone No:</label>
//         <input type="text" name="" placeholder="Enter Your Phone Number" onChange={getValue} />
//     </div>
//     <div className="editchild">
//         <label>Email:</label>
//         <input type="text" name="" placeholder="Enter Your Email" onChange={getValue} />
//     </div>
//     <div className="editchild">
//         <label>Bio:</label>
//         <input type="text" name="" placeholder="Write something about yourself" onChange={getValue} />
//     </div>
//     <div className="editchild">
//         <label>City:</label>
//         <input type="text" name="" placeholder="Username" onChange={getValue} />
//     </div>
//     <div className="editchild">
//         <label>State:</label>
//         <input type="text" name="" placeholder="Enter Your Dath of Birth" onChange={getValue} />
//     </div>

//     <button className="savebtn" onClick={handleSubmit}>Save</button>


// </form>
//             </>
//         )
//     }
//     export default EditEnformation 



// student detail se waring aaraha h
//<div className="student" style={{ padding: "5px", marginBottom: "20px" }}>
                // <h3>Registration Form</h3>
                // <form htmlFor="" onSubmit={hendlesubmit} encType="multipart/form-data">
                    // <div className="names">
                        // <label htmlFor="name">Name:</label>
                        // <input type="text" id="name" name="firstname" placeholder="First Name" required onChange={getValue} />
// 
                        // <input type="text" id="name" name="lastname" placeholder="Last Name" onChange={getValue} />
            //         // // </div>
            //         // <div className="fath">
            //         //     <label htmlFor="fathername">Father Name:</label>
            //         //     <input type="text" id="fathername" name="fathername" placeholder="Father Name" required onChange={getValue} />
            //         // </div>

            //         // <div className="address">
            //             <label htmlFor="">Roll_No:</label>
            //             <input type="text" id="roll_no" name="roll_no" placeholder="roll_no" required onChange={getValue} />
            //             <label htmlFor="address">Address:</label>
            //             <input type="text" id="address" name="address" placeholder="Address" required onChange={getValue} />
            //         </div>

            //         <div className="sub">
            //             <label htmlFor="course">Course:</label>

            //             <select id="course" name="course" required onChange={getValue}>
            //                 <option value="">Select</option>
            //                 <option value="bca">BCA</option>
            //                 <option value="bba">BBA</option>
            //                 <option value="mca">MCA</option>
            //                 <option value="mba">MBA</option>
            //                 <option value="b.com">B.Com</option>
            //                 <option value="iti">ITI</option>
            //                 <option value="it">B.A</option>
            //                 <option value="it">B.sc</option>

            //             </select>


            //             <label htmlFor="courseduration">Course Duration:</label>

            //             <select id="courseduration" name="courseduration" required onChange={getValue}>
            //                 <option value="">Select</option>
            //                 <option value="3years">3 years</option>
            //                 <option value="3years">3 years</option>
            //                 <option value="3years">3 years</option>
            //                 <option value="2years">2 years</option>
            //                 <option value="2years">2 years</option>
            //                 <option value="3years">1-2 years</option>
            //                 <option value="6months">6 Months</option>
            //             </select>
            //         </div>


            //         <div className="date">
            //             <label htmlFor="date">Date:</label>
            //             <input type="date" name="date" id="date" required onChange={getValue} />

            //             <label htmlFor="photo">Photo :</label>
            //             <input type="file" name="image" onChange={(e) => setImages(e.target.files[0])} style={{ marginLeft: "20px" }} />
            //         </div>
            //         <div className="address">
            //             <label htmlFor="mobailno">Mobail No:</label>
            //             <input type="text" id="mobailno" name="mobailno" placeholder="mobailno" required onChange={getValue} />

            //             <label htmlFor="email">Email:</label>
            //             <input type="text" id="email" name="email" placeholder="Email" required onChange={getValue} />
            //         </div>


            //         <div className="gender">
            //             <label htmlFor="state">State:</label>

            //             <select id="state" name="state" required onChange={getValue}>
            //                 <option value="">Select</option>
            //                 <option value="rajasthan">Rajasthan</option>
            //                 <option value="gujarat">Gujarat</option>
            //                 <option value="haryana">Haryana</option>
            //                 <option value="kerala">Kerala</option>
            //                 <option value="andhrapradesh">Andhra Pradesh</option>
            //                 <option value="goa">Goa</option>
            //                 <option value="himachalpradesh">Himachal Pradesh</option>
            //             </select>


            //             <label htmlFor="category">category:</label>
            //             <select id="category" name="category" required onChange={getValue}>
            //                 <option value="">Select</option>
            //                 <option value="obc">OBC</option>
            //                 <option value="st">ST</option>
            //                 <option value="sc">SC</option>
            //             </select>
            //         </div>

            //         <div className="gender">
            //             <label>Gender:</label><br />

            //             <label htmlFor="male">Male </label>
            //             <input type="radio" name="gender" value="male" onChange={getValue} required />

            //             <label htmlFor="female">Female </label>
            //             <input type="radio" name="gender" value="female" onChange={getValue} required />

            //             <label htmlFor="other">Other </label>
            //             <input type="radio" name="gender" value="other" onChange={getValue} required />

            //         </div>
            //         <button type="submit" className="subbtn">Submit</button>
            //     </form>
            // </div> 

