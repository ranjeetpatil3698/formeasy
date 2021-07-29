import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center bg-purple-400 min-h-screen flex-grow p-10">
      <div className="flex flex-col gap-6 items-center font-sans text-7xl text-white">
        <span>Formeasy:</span>
        <span>Easy way to create a Form</span>
        <span>And collect data</span>
      </div>
      <div className="flex flex-row gap-4 align-middle m-12">
        <Link
          to="/login"
          className="px-10 py-4 rounded border-2 border-purple-600 bg-purple-400 text-white"
        >
          Login
        </Link>
        <Link
          to="signup"
          className="px-10 py-4 rounded border-2 border-purple-600 bg-purple-400 text-white"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
}
