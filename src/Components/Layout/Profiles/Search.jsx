import React from "react";
import { FaSearch } from "react-icons/fa";
function Search() {
    return (
        <>
            {/* <div style={{ border:"1px solid",backgroundColor:"#2f6b4f",paddingLeft:"20px",paddingRight:"20px",position:"relative",height:"55px",borderRadius:"8px",}}>
        <input type="" name="" placeholder="Search" style={{width:"100%",paddingLeft:"20px",paddingRight:"20px",padding:"10px",borderRadius:"20px"}}/>
        <p style={{position:"absolute",bottom:"8px",paddingLeft:"220px"}}><FaSearch/></p>
        </div> */}
            <div className="search-container">
                <div className="search-box">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <p><FaSearch/></p>
                </div>
            </div>
        </>
    )
}
export default Search