import React,{useRef,useState} from 'react'

export default function Reffbc() {
        let [img,setimg]= useState("https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png")
        let imgRef=useRef()
        let btnRef=useRef()
        let ChangBorder=()=>{
            imgRef.current.style.border="2px solid red"
            btnRef.current.style.border="2px solid green"
            imgRef.current.style.width="200px"
            imgRef.current.style.height="100px"
        }
  return (
    <div>
        <img src={img} alt="" srcset="" ref={imgRef} />
        <button onClick={ChangBorder} ref={btnRef}>change</button>
    </div>
  )
}