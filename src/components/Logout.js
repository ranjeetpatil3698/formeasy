import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export default function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    Cookies.remove("jwt");
    history.push("/");
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
