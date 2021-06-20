import React,{useState,useEffect} from 'react'
import { updateanswer } from '../../redux/reducers/renderReducer';
import { useDispatch } from "react-redux";


function UploadClient({id,label,important,solution,done}) {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState("");



    useEffect(()=>{
        dispatch(updateanswer({id,value:selectedFile}))
    },[selectedFile])


    const handleChange=(event)=>{
        setSelectedFile(event.target.files[0].name)
        const formData = new FormData();
		formData.append('File', selectedFile);
        // console.log(formData)
    }
    return (
        <div>
            <div className="flex flex-col gap-2 justify-center  border-2 p-2 rounded border-purple-300 m-2" >
            <label className="font-meduim  w-full outline-none text-3xl h-12" >{label}</label>
            <label className="bg-purple-600 bg-opacity-75 text-white w-40 gap-2 cursor-pointer p-3 rounded-md flex flex-row " >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path   d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
              <span>Upload file</span>  
            <input className="border-2 border-gray-400 rounded-sm max-w-xs hidden" type="file" onChange={handleChange} />
            </label>
            <div className="text-m text-purple-700 text-opacity-100 ">{solution}</div>
            <span className="font-semibold text-red-600">{important==true && done==false?"*this field is required":null}</span>
            </div>
        </div>
    )
}

export default UploadClient
