import React from "react";
import {Redirect, useHistory, useLocation } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";


function Loginbutton({ email, password }) {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  const { state } = useLocation();
  const history=useHistory();
 

  const instance = axios.create({
    withCredentials: true,
  });

  const { mutate } = useMutation((data) =>
    instance.post(`${process.env.REACT_APP_API}/login`, data),{
      onSuccess:(data)=>{
        const {name,email,token}=data.data.data;
        // console.log(name,email);
        localStorage.setItem('token',token);
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('status',true);
        // console.log(localStorage.getItem('token'))
        history.push("/admin")
      }
    }
  );

  
  const handleClick = () => {
    // console.log({ email, password });
    const data = { email, password };
    
    mutate(data);
    setRedirectToReferrer(true);
  };

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/admin"} />;
  }

  return (
    <div
      className="bg-purple-600 bg-opacity-75 text-white w-1/3 p-3 m-1 rounded-md"
      onClick={handleClick}
    >
      {/* <div>{isError?"error":""}</div>   
        <div>{isSuccess?"LoggedIn":""}</div>   */}
      <div className="flex flex-row justify-center gap-1 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        LogIn
      </div>
    </div>
  );
}

export default Loginbutton;
