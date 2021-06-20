import React from 'react'
import {deletefield} from "../redux/reducers/formReducer"
import { useDispatch } from "react-redux";

function DeleteQuestion({id}) {
    const dispatch = useDispatch();

    const handleChange=()=>{
        dispatch(deletefield({id}))
    }

    return (
        <div className="h-8 rounded w-28 bg-red-500 text-white">
            <span className="flex flex-row justify-items-center p-1 m-1 cursor-pointer gap-1" onClick={handleChange}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
                Delete
            </span>
        </div>
    )
}

export default DeleteQuestion
