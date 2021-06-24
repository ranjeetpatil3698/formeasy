import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import TextClient from "../clientForm/TextClient";
import NumberClient from "../clientForm/NumberClient";
import UploadClient from "../clientForm/UploadClient";
import SubmitButton from "../clientForm/SubmitButton"
import ClientHeading from '../clientForm/ClientHeading';
import {useParams} from "react-router-dom";
import {setInitialState} from "../../redux/reducers/renderReducer";
import axios from "axios";

function RenderForm() {
    const { formdetails,submitready,formname} = useSelector((state) => state.formrender);

    let { url } = useParams();
    const dispatch=useDispatch();
    

    useEffect(async ()=>{
        const instance = axios.create({
            baseURL:process.env.REACT_APP_API,
            withCredentials: true
          })
          const response=await instance.get(`${process.env.REACT_APP_API}/getform/${url}`);
          const {data}=response.data
          
          dispatch(setInitialState({data}))
        
    },[url])


    return (
        <div className="flex flex-col gap-2 m-4">
            <ClientHeading heading={formname}/>
            {
                formdetails.map(({id,formtype,required,answer,label,done})=>{
                    if(formtype=="text"){
                        return <TextClient id={id} key={id} label={label} important={required} solution={answer} done={done}/>
                    }
                    if(formtype=="Number"){
                        return <NumberClient id={id} key={id} label={label} important={required} solution={answer} done={done}/>
                    }
                    if(formtype=="File"){
                        return <UploadClient id={id} key={id} label={label} important={required} solution={answer} done={done}/>
                    }
                })
            }
            <span className="font-semibold text-red-600">
            {submitready?null:"Please fill all the fields"}
            </span>
            <SubmitButton/>
        </div>
    )
}

export default RenderForm
