import React,{useState,useEffect} from 'react';
import {updatelabel,updateanswer,updaterequired} from "../../redux/reducers/formReducer";
import { useDispatch } from "react-redux";
import DeleteQuestion from '../DeleteQuestion';


function TextLabel({id,label,important,solution}) {
    const dispatch = useDispatch();
    const [text,setText]=useState("");
    const [answer,setAnswer]=useState("");
    const [required,setRequired]=useState(false)

    useEffect(()=>{
        dispatch(updatelabel({id,value:text}))
        dispatch(updateanswer({id,value:answer}))
        dispatch(updaterequired({id,value:required}))
    },[text,answer,required])

    const handleLabelChange=(event)=>{
        setText(event.currentTarget.textContent)
    }

    const handleAnswerChange=(event)=>{
        setAnswer(event.target.value)
    }

    const handleCheckBoxChange=(event)=>{
        setRequired(!required)
    }

    return (
        <div className="flex flex-col gap-2  justify-center border-2 p-2 rounded border-purple-300 m-2" >
            {/* <input className="font-meduim text-3xl w-full outline-none  " value={label} onChange={handleLabelChange} placeholder="Enter your Question"/> */}
        <div
            onBlur={handleLabelChange}
            contentEditable
            suppressContentEditableWarning={true}
            className="font-meduim text-3xl w-full outline-none"
            >
        <p></p>
      </div>
            <input className="border-2 border-gray-400 rounded-sm max-w-xs" value={solution} onChange={handleAnswerChange}  disabled={true}/>
                <div >
                    <input type="checkbox" name="required" value={important} onChange={handleCheckBoxChange}/>
                    <span>Required</span>
                    <DeleteQuestion id={id}/>
                </div>
            </div>
    )
}

export default TextLabel

