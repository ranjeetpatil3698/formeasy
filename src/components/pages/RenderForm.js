import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import TextClient from "../clientForm/TextClient";
import NumberClient from "../clientForm/NumberClient";
import UploadClient from "../clientForm/UploadClient";
import SubmitButton from "../clientForm/SubmitButton"
import ClientHeading from '../clientForm/ClientHeading';

function RenderForm() {
    const { formdetails,submitready,formname} = useSelector((state) => state.formrender);
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
