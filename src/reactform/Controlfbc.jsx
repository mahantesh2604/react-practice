import React,{useState} from 'react'

const Controlfbc = () => {
  let [username,setusername]=useState("")
  let [password,setpassword]=useState("")
  let handlesubmit=(e)=>{
    e.preventDefault()
    console.log({username,password});
  }
  return (
    <div> <form action="">
      <input type="text" onChange={(e)=>{setusername(e.target.value)}}/><br/>
      <input type="text" onChange={(e)=>{setpassword(e.target.value)}}/><br/>
      <button onClick={handlesubmit}>submit</button>
      </form></div>
  )
}

export default Controlfbc