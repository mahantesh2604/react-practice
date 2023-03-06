import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';


function Login() {
  let [username,setusername]=useState("")
  let [password,setpassword]=useState("")
  let navigate=useNavigate()
  let handlesubmit=(e)=>{
e.preventDefault()
 let localusername=localStorage.getItem("username")
 let localpassword=localStorage.getItem("password")
 if(localusername===username && localpassword===password){
  toast.success(`${username} successfully loged in`,{
    position:toast.POSITION.TOP_CENTER
})
  navigate('/about')
 }else{
  toast.error(`${username} or ${password} is wrong please try again`,{
    position:toast.POSITION.TOP_CENTER
})
   navigate('/login')
   
}
  }
  return (
    <form action="">
      <h1 style={{textAlign:"center"}}>LOGIN</h1>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>{setusername(e.target.value)}}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>{setpassword(e.target.value)}}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>
      
      <MDBBtn className="mb-4" onClick={handlesubmit}>Login</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
    </form>
  );
}

export default Login;