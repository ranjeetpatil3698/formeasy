import React from "react";

import axios from "axios";

export default function Filefield({ solution, setSelectedFile, selectedFile }) {

  const handlechange =async  () => {
    setSelectedFile("");
    const {data}= await axios.get(`${process.env.REACT_APP_API}/removefile/${selectedFile}`)
    // console.log(data)
  };
  return (
    <div
      className="bg-purple-600 bg-opacity-75 text-white p-2 w-44 rounded flex flex-row gap-2 cursor-pointer"
      onClick={handlechange}
    >
      {solution}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </div>
  );
}
