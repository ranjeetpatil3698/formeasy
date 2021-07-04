import React,{useState} from 'react'
import Loginbutton from './Loginbutton';

function Login() {
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    

    return (
        <div className="flex flex-col gap-2 border ">
         <div className="text-3xl">Login page  </div>
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
            type="password"
            onChange={(e)=>setpassword(e.target.value)}
        />
        <Loginbutton  password={password} email={email} />
        </div>
    )
}

export default Login
