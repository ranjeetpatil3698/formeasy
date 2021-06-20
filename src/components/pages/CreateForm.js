import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import TextLabel from "../InputTypes/TextLabel";
import NumberLabel from "../InputTypes/NumberLabel";
import UploadLabel from "../InputTypes/UploadLabel"
import FormFooter from "../FormFooter"
import FormHeading from '../FormHeading';


function CreateForm() {
    const { formdetails} = useSelector((state) => state.formlist);
    

    return (
        <div className="flex flex-col gap-2 m-4">
            <FormHeading />
            {
                formdetails.map(({id,formtype,required,answer,label})=>{
                    if(formtype=="text"){
                        return <TextLabel id={id} key={id} label={label} important={required} solution={answer}/>
                    }
                    if(formtype=="Number"){
                        return <NumberLabel id={id} key={id} label={label} important={required} solution={answer}/>
                    }
                    if(formtype=="File"){
                        return <UploadLabel id={id} key={id} label={label} important={required} solution={answer}/>
                    }
                })
            }
            <FormFooter/>
        </div>
    )
}

export default CreateForm
