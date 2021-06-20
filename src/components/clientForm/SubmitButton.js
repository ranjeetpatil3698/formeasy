import React from 'react'
import { useSelector} from "react-redux";


function SubmitButton() {
    const { formdetails,submitready,formname} = useSelector((state) => state.formrender);


    const handleClick=()=>{
        if(submitready){
            console.log({ formdetails,submitready,formname})
        }
        
        
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
