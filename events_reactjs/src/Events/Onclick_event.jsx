import React, { useState } from "react";
const Onclick_event =() => {
    // this is for onclick event in reactjs 
    const [name,setName]=useState("ROHIT BHAI")

    return(
        <>
        {/* OnClick event  */}
            {/* <h1>ROHIT BHAI</h1>  */}
            <h1 >{name}</h1>
            <button onClick={()=>{
                setName("SARTHAK BHAI")
            }}>Onclick</button>

           
        </>
    )

}
export default Onclick_event;