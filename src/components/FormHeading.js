import React,{useState,useEffect} from 'react'
import {updateformname} from "../redux/reducers/formReducer";
import { useDispatch, useSelector } from "react-redux";

function FormHeading() {
    const [content,setcontent]=useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateformname({name:content}))
    },[content])

    const handleContentChange=(event)=>{
        setcontent(event.currentTarget.textContent);
    }
    return (
        <div className="text-5xl border-2 p-1 rounded border-purple-300 m-2">
            {/* <input  className="w-full outline-none " type="text" value={content} onChange={handleContentChange} placeholder="Enter Form Title"/> */}
            <div
            onBlur={handleContentChange}
            contentEditable
            suppressContentEditableWarning={true}
            className="w-full outline-none"
            >
            <p></p>
      </div>
        </div>
    )
}

export default FormHeading
