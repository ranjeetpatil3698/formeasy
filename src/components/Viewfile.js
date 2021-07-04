import React,{useEffect,useState} from 'react';
import FileViewer from 'react-file-viewers';
import {useParams} from 'react-router-dom'

function Viewfile(){
    const {filename}=useParams();
    const filetype=filename.split(".")[(filename.split(".").length)-1]
    console.log(filetype)
    let onError=(e)=>{
        console.log(e, 'error in file-viewer');
      }
    return(
        <div className="w-auto h-screen">
    <FileViewer
        fileType={filetype}
        filePath={`${process.env.REACT_APP_API}/viewfile/${filename}`}
        onError={onError}/>
        </div>
    );

}

export default Viewfile;