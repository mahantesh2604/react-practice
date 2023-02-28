import React,{useState,useRef} from 'react'
import VIDEO from './videoplay.mp4'

const Playpouse=()=> {
    let [video,setvideo]=useState(VIDEO);
    let [play,setplay]=useState(false);
    let videoref=useRef()
    let handlechange=()=>{

        if(!play){
            setplay(true)
            videoref.current.play()
        }
        else
        {
            setplay(false)
            videoref.current.pause()
        }
    }
  return (
    <div><video src={video} ref={videoref} onClick={handlechange}></video></div>
  )
}

export default Playpouse