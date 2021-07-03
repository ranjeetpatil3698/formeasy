import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {Link} from "react-router-dom";
import Logout from "./Logout";

const Logged = () => {
  return (
    <div className="cursor-pointer bg-purple-600 bg-opacity-75 text-white w-1/4 p-3 m-1 rounded-md">
        <Link to="/login" >Log in</Link>
    </div>
  );
};

export const Navbar = () => {
    
  const [allowed, setallowed] = useState(false);
  const status=Cookies.get("status");
  

  useEffect(() => {
    if (status=='true') {
      setallowed(true);
    }else if(status==undefined){
      setallowed(false);
    }
    
  }, [status]);

  return (
    <div className="m-b-2 flex flex-grow-0 gap-48">
        <div className="font-sans text-4xl">Formeasy</div>
        <div className="w-full">{allowed?<Logout/>:<Logged/>}</div>
    </div>
  );
};
