import React,{useState} from 'react'
import Signbutton from "./Signbutton";

function Signup() {
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const [confirm,setconfirm]=useState("");
    
    return (
        <div className="flex flex-col gap-2 border ">
         <div className="text-3xl">Signup page  </div>
        <input 
            placeholder="Full Name"
            className="p-1 m-1 w-1/4 h-10 border rounded border-purple-500" 
            value={name} 
            onChange={(e)=>setname(e.target.value)}
         />
        <input
            placeholder="Your Email" 
            className="p-1 m-1 rounded w-1/4 h-10  border border-purple-500"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
        />
        <input 
            placeholder="Password" 
            className="p-1 m-1 rounded w-1/4 h-10 border border-purple-500 "
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
        />
        <input 
            placeholder="Confirm Password" 
            className="p-1 m-1 rounded w-1/4 h-10 border border-purple-500"
            value={confirm}
            onChange={(e)=>setconfirm(e.target.value)}
        />
        
        <Signbutton name={name} password={password} email={email} passwordConfirm={confirm} />
        </div>
    )
}

export default Signup
