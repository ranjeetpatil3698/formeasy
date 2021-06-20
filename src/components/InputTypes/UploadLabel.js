import React,{useState,useEffect} from 'react'
import {updatelabel,updateanswer,updaterequired} from "../../redux/reducers/formReducer";
import { useDispatch } from "react-redux";
import DeleteQuestion from '../DeleteQuestion';

function UploadLabel({id,label,important,solution}) {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState("");
    const [text,setText]=useState("");
    const [required,setRequired]=useState(false)


    useEffect(()=>{
        dispatch(updatelabel({id,value:text}))
        dispatch(updateanswer({id,value:selectedFile}))
        dispatch(updaterequired({id,value:required}))
    },[text,selectedFile,required])

    const handleLabelChange=(event)=>{
        setText(event.currentTarget.textContent)
        
    }

    const handleCheckBoxChange=(event)=>{
        setRequired(!required)
        
    }

    const handleChange=(event)=>{
        setSelectedFile(event.target.files[0].name)
        const formData = new FormData();
		formData.append('File', selectedFile);
        // console.log(formData)
    }
    return (
        <div>
            <div className="flex flex-col gap-2 justify-center  border-2 p-2 rounded border-purple-300 m-2" >
            {/* <input className="font-meduim  w-full outline-none text-3xl h-12" placeholder="Enter your Question" value={label} onChange={handleLabelChange}/> */}
            <div
            onBlur={handleLabelChange}
            contentEditable
            suppressContentEditableWarning={true}
            className="font-meduim  w-full outline-none text-3xl h-12"
            >
            <p></p>
        </div>
            <label className="bg-purple-600 bg-opacity-75 text-white w-40 gap-2 cursor-pointer p-3 rounded-md flex flex-row " >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path   d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
              <span>Upload file</span>  
            <input className="border-2 border-gray-400 rounded-sm max-w-xs hidden" type="file" onChange={handleChange} disabled={true}/>
            </label>
            <div className="text-m text-purple-700 text-opacity-100 ">{solution}</div>
                <div>
                    <input type="checkbox" name="required" value={important} onChange={handleCheckBoxChange} />
                    <span>Required</span>
                    <DeleteQuestion id={id}/>
                </div>
            </div>
        </div>
    )
}

export default UploadLabel
