import React,{useState} from 'react'
import Loginbutton from './Loginbutton';

function Login() {
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    

    return (
        <div className="flex flex-col gap-4 align-middle  p-64 ">
         <div className="text-5xl">Login page  </div>
        <input
            placeholder="Your Email" 
            className="border border-purple-600 w-1/3 p-3 m-1 rounded-sm"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
        />
        <input 
            placeholder="Password" 
            className="border border-purple-600 w-1/3 p-3 m-1 rounded-sm"
            value={password}
            type="password"
            onChange={(e)=>setpassword(e.target.value)}
        />
        <div className="flex items-center">
        <Loginbutton  password={password} email={email} />
        </div>
        
        </div>
    )
}

export default Login
