import React, { Component } from 'react'
import Usenavigate from './Usenavigate'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './usenavcomponent/Home'
import Login from './usenavcomponent/Login'
import Signup from './usenavcomponent/Signup'
import About from './usenavcomponent/About'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class App5 extends Component {
  render() {
    return (

      <div><Router><Usenavigate/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        
        </Routes></Router>
        <ToastContainer />
        
      </div>
    )
  }
}