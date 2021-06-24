import React from 'react'
import createrequest from '../utlis/createrequest'

function Signbutton({name,email,password,passwordConfirm}){
    const data={name,email,password,passwordConfirm}
   
    const handleClick=()=>{
        try{
            const {request}=createrequest(`${process.env.REACT_APP_API}/signup`,'post',data)
        }catch(err){
            console.log(err)
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
              
        </div>
    )
}

export default Signbutton
