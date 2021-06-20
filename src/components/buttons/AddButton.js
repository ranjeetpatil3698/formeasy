import React,{useState} from 'react'

function AddButton({handleChange}) {

    const handleClick=()=>{
        handleChange();
    }

    return (
        <div className="bg-purple-600 bg-opacity-75 text-white w-full p-3 rounded-md " onClick={handleClick}>
        <div className="flex flex-row justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Question 
        </div>        
        </div>
    )
}

export default AddButton
