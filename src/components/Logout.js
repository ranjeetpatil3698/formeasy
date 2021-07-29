import React from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";


export default function Logout() {
  const history = useHistory();

  const instance = axios.create({
    withCredentials: true,
    headers:{
      authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })

  const handleLogout =async () => {
    const response=await instance.get(`${process.env.REACT_APP_API}/logout`)
    
    if(response.status){
      localStorage.removeItem("status");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      history.push("/");
    }

  };

  return (
    <div
      onClick={handleLogout}
      className="cursor-pointer bg-purple-600 bg-opacity-75 text-white w-1/4 p-3 m-1 rounded-md"
    >
      Logout
    </div>
  );
}
