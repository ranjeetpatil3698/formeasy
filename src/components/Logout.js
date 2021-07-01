import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";


export default function Logout() {
  const history = useHistory();

  const instance = axios.create({
    withCredentials: true
  })

  const handleLogout =async () => {
    const response=await instance.get(`${process.env.REACT_APP_API}/logout`)
    
    if(response.status){
      Cookies.remove("status");
      Cookies.remove("name");
      Cookies.remove("email");
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
