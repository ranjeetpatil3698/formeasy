import React,{useState} from 'react'
import { useMutation,useQueryClient } from "react-query";
import axios from "axios";

const CheckBox = ({check,url}) => {
  const queryClient = useQueryClient();
  const [value,setValue]=useState(check)
    const instance = axios.create({
        withCredentials: true,
        headers:{
          authorization:`Bearer ${localStorage.getItem('token')}`
        }
      });
      const {mutate} = useMutation((data) =>
        instance.patch(`${process.env.REACT_APP_API}/changestatus/${url}`, data),{
          onSuccess:(data)=>{
            console.log("status changed")
            queryClient.invalidateQueries("allforms")
        }
    });
    const handleClick=()=>{
      setValue(!value)
        mutate({status:!check})
    }
    return (
        <div >
        <input type="checkbox" checked={value} onChange={handleClick}/>
        </div>
    )
}

export default CheckBox
