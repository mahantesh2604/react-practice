import React,{useState} from "react";

const Conditionrendering=()=>{
    let [authuser,setauthuser]=useState(false)
    let Accepteduser=()=>{
        return(
            <>
            <nav>
                <ol>
                    <li>logo</li>
                    <li>menu</li>
                    <li>contact</li>
                    <li>search</li>
                    </ol>
                    </nav></>
        )
    }
    let NotAccepteduser=()=>{
        return(
            <>
            <nav>
                <ol>
                    <li>login</li>
                    <li>signup</li>
                    <li>forgetpassword</li>
                    </ol></nav></>
        )
    }
    return(
        <>{authuser?<Accepteduser/>:<NotAccepteduser/>}</>
    )
}
export default Conditionrendering