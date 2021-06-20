import React from 'react'
import { useSelector } from "react-redux";

function DoneButton() {
    const {formname,formelements,formdetails}=useSelector((state)=>state.formlist);

    const handleClick=()=>{
        console.log({formname,formelements,formdetails})
    }
    return (
        <div className="bg-purple-600 bg-opacity-75 text-white w-full p-3 rounded-md" onClick={handleClick}>
        <div className="flex flex-row justify-center gap-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M5 13l4 4L19 7" />
            </svg>
            Done
        </div>        
        </div>
    )
}

export default DoneButton
