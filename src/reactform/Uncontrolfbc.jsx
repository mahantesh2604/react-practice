import React,{useRef} from 'react'

const Uncontrolfbc = () => {
    let userRef=useRef()
    let passRef=useRef()
     let handlesubmit=(e)=>{
        e.preventDefault()
        let username=userRef.current.value
        let password=passRef.current.value
        console.log({username,password});

    }
  return (
    <div><div><form action="">
    <br />
    <label htmlFor="username">username</label>
    <br />
    <input type="text" id='username' ref={userRef}/>
    <br />
    <label htmlFor="password">password</label>
    <br />
    <input type="password" id='password' ref={passRef}/>
    <br />
    <button onClick={handlesubmit}>submit</button>
    </form></div></div>
  )
}

export default Uncontrolfbc