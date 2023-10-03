import React, { useState } from "react";
const OnMouseMove_event =() => {
   
    // this is for on mouse move event in reactjs 
    const [item, setItem]=useState("RAM")
    return(
        <>
       
          
            <h1>{item}</h1>
            <button onMouseLeave={()=>{
                setItem("RAM")
            }}
            
            
            onMouseMove={()=>{
                setItem("SHAM")
            }}>OnMouseMove</button>
            
        </>
    )

}
export default OnMouseMove_event;