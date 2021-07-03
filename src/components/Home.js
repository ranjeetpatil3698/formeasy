import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center bg-purple-400 min-h-screen flex-grow">
      <div className="text-5xl text-white">Formeasy:<span>Easy way to create a Form</span></div>
      <div className="flex flex-row gap-4 align-middle">
        <Link to="/login" className="px-10 py-4 rounded border-2 border-purple-600 bg-purple-400 text-white">Login</Link>
        <Link to="signup" className="px-10 py-4 rounded border-2 border-purple-600 bg-purple-400 text-white">SignUp</Link>
      </div>
    </div>
  );
}
