import React from 'react';
import axios from "axios";
import { useMutation,useQueryClient } from "react-query";


const DeleteButton = ({id}) => {
    
    
    const queryClient = useQueryClient();

    const instance = axios.create({
        withCredentials: true,
        headers:{
          authorization:`Bearer ${localStorage.getItem('token')}`
        }
      });
      const {mutate} = useMutation((data) =>
        instance.patch(`${process.env.REACT_APP_API}/deleteform/${id}`, data),{
          onSuccess:(data)=>{
            queryClient.invalidateQueries("allforms")
        }
    });
    const handleClick=()=>{
        // console.log("deleted")
        mutate({})
        
    }
    return (
        <div className="cursor-pointer" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="red">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
        </div>
    )
}

export default DeleteButton
