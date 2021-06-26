import React,{useState} from 'react'
import createrequest from '../utlis/createrequest'
import { useMutation } from "react-query";
import axios from "axios";

function Signbutton({name,email,password,passwordConfirm}){
    const [merror,setmerror]=useState("")
    const instance = axios.create({
        withCredentials: true
      })

    const {mutate,isError ,isSuccess,error,data }=useMutation(data=>instance.post(`${process.env.REACT_APP_API}/signup`,data))
    const {mutate:user,data:userexist }=useMutation(data=>instance.post(`${process.env.REACT_APP_API}/checkuser`,data))
    

    const handleClick=()=>{
        const requestdata={name,email,password,passwordConfirm};
        user({email});
        
        if( userexist && userexist.data.exist){
            console.log(userexist)
            setmerror("user already exists")
        }
        
        
    }
    return (
        <div className="bg-purple-600 bg-opacity-75 text-white w-1/4 p-3 m-1 rounded-md" onClick={handleClick} >
        <div className="flex flex-row justify-center gap-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M5 13l4 4L19 7" />
            </svg>
            SignIn
        </div> 
        
        {/* handle this states in another component */}
        {/* <div>{isError?"error":""}</div>   
        <div>{isSuccess?"LoggedIn":""}</div> 
        <div>{merror?"error "+merror:""}</div>  */}
        </div>
    )
}

export default Signbutton
