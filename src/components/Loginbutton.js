import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";

function Loginbutton({ email, password }) {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  const { state } = useLocation();

  const instance = axios.create({
    withCredentials: true,
  });

  const { mutate, isError, isSuccess } = useMutation((data) =>
    instance.post(`${process.env.REACT_APP_API}/login`, data)
  );

  // authAxious.post(${process.env.REACT_APP_API}/login,data);
  const handleClick = () => {
    console.log({ email, password });
    const data = { email, password };
    // const {request}=createrequest(`${process.env.REACT_APP_API}/login`,'post',data);
    mutate(data);
    setRedirectToReferrer(true);
    if(!Cookies.get('jwt')){
        Cookies.set("jwt");
    }
    
  };

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div
      className="bg-purple-600 bg-opacity-75 text-white w-1/4 p-3 m-1 rounded-md"
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
