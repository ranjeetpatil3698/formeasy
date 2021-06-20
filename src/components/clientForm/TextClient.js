import React,{useState,useEffect} from 'react';
import { updateanswer} from '../../redux/reducers/renderReducer';
import { useDispatch } from "react-redux";



function TextClient({id,label,important,solution,done}) {
    const dispatch = useDispatch();
    const [answer,setAnswer]=useState("");
    

    useEffect(()=>{
        
        dispatch(updateanswer({id,value:answer}));
    },[answer])


    const handleAnswerChange=(event)=>{
        setAnswer(event.target.value)
    }


    return (
        <div className="flex flex-col gap-2  justify-center border-2 p-2 rounded border-purple-300 m-2" >
            <label className="font-meduim text-3xl w-full outline-none  " >{label}</label>
            <input className="border-2 border-gray-400 rounded-sm max-w-xs  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={solution} onChange={handleAnswerChange}  />
            <span className="font-semibold text-red-600">{important==true && done==false?"*this field is required":null}</span>
            </div>
    )
}

export default TextClient

