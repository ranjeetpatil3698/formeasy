import React from 'react'
import Cookies from 'js-cookie'
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";

function DoneButton() {
    const {formname,formelements,formdetails}=useSelector((state)=>state.formlist);
    const accessToken=Cookies.get("jwt");
    const history = useHistory();
        const authAxious=axios.create({
            headers:{
                Authorization:`Bearer ${accessToken}`
            }
        })
    const {mutate,isError ,isSuccess,error,data:successdata }=useMutation(data=>authAxious.post(`${process.env.REACT_APP_API}/createform`,data))
    const handleClick=async ()=>{
        const data={formname,formelements,formdetails}
        // console.log({formname,formelements,formdetails})
        
        mutate(data);
        if(successdata){
            const {formurl}=successdata.data.data
            console.log(formurl);
            history.push(`/responses/${formurl}`)
            
        }
        
        // await authAxious.post(url,data)

        // const {request}=createrequest(`${process.env.REACT_APP_API}/createform`,'post',data)
        // console.log(Cookies.get("jwt"))
    }
    return (
        <div className="bg-purple-600 bg-opacity-75 text-white w-full p-3 rounded-md" onClick={handleClick}>
        <div className="flex flex-row justify-center gap-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M5 13l4 4L19 7" />
            </svg>
            Done
        </div>        
        </div>
    )
}

export default DoneButton
