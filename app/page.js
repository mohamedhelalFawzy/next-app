'use client'

import { useEffect, useState } from "react"
import Nav from "./nav"
import axios from "axios"
import Api from "./api"

export default function Home() {

const [add, setAdd] = useState()
const [number, setNumber] = useState(0)



const data = (e) => {setAdd(e.target.value)}

// useEffect(()=>{
//   console.log('weclmoe');
// })

// useEffect(()=>{
//   console.log('weclmoe');
// },[])


// useEffect(()=>{
//   console.log('weclmoe');
// },[add])



  return(
    <div>
      <input type="text" onChange={data}  className="border" /> 
      <h2>{add}</h2>

      <button onClick={()=>{setNumber(number +1)}}>add</button>
      <h3>{number}</h3>

      <Nav />

      <Api />
    </div>
  )
}
