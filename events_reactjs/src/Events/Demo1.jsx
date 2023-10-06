import React, { useState } from 'react'

const Demo1 = () => {
  const[store,setStore]=useState("Rohit")
  return (
    <div>
        <h1>{store}</h1>
        <button onClick={()=>{
            setStore("RohitBhai")
        }}>DABA DAL</button>
    </div>
  )
}

export default Demo1