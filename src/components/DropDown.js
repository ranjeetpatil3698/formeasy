import React from 'react'
import {addfield} from "../redux/reducers/formReducer";
import { useDispatch } from "react-redux";

function DropDown({handleChange}) {
    const dispatch = useDispatch();
    const addText=()=>{
        handleChange();
        dispatch(addfield({formtype:'text'}))
    }
    const addNumber=()=>{
        handleChange()
        dispatch(addfield({formtype:'Number'}))
    }
    const addUpload=()=>{
        handleChange()
        dispatch(addfield({formtype:'File'}))
    }
    return (
        <div className="p-3">
            <div className="border bg-purple-600 bg-opacity-75 text-white w-1/6 p-3 rounded-md m-1 cursor-pointer flex flex-row gap-2" onClick={addText}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
                Text
            </div>
            <div className="border bg-purple-600 bg-opacity-75 text-white w-1/6 p-3 rounded-md m-1 cursor-pointer flex flex-row gap-2" onClick={addNumber}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
            </svg>
                Number
            </div>
            <div className="border bg-purple-600 bg-opacity-75 text-white w-1/6 p-3 rounded-md m-1 cursor-pointer flex flex-row gap-2" onClick={addUpload}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
                File Upload
            </div>
        </div>
    )
}

export default DropDown
