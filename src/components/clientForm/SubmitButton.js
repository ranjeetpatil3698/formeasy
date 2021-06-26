import React from 'react'
import { useSelector} from "react-redux";
import { useMutation } from "react-query";
import axios from "axios";

function SubmitButton({url}) {
    const { formdetails,submitready,formname} = useSelector((state) => state.formrender);
    const instance = axios.create({
        withCredentials: true
      })
    const submitdata={ formdetails,submitready,formname};
    const {mutate,isError ,isSuccess,error,data }=useMutation(data=>instance.post(`${process.env.REACT_APP_API}/sendresponse/${url}`,data))

    const handleClick=()=>{
        if(submitready){
            console.log({ formdetails,submitready,formname})
        }
        mutate(submitdata)
        
        
    }
    return (
        <div className={`bg-purple-600 bg-opacity-75 text-white w-full p-3 rounded-md ${submitready?'cursor-pointer':'cursor-not-allowed'}`} onClick={handleClick}>
        <div className="flex flex-row justify-center gap-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M5 13l4 4L19 7" />
            </svg>
            Done
        </div>        
        </div>
    )
}

export default SubmitButton;
