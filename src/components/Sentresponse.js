import React from 'react'

export default function Sentresponse({formname}) {
    return (
        <div className="flex flex-col items-center gap-8">
        <div className="text-5xl  p-1 rounded   text-purple-800">
            Your Response For
        </div>
        <div className="text-5xl  p-1 rounded  ">
            <label className="w-full outline-none text-purple-800">{formname}</label>
        </div>
           <p className="text-3xl text-purple-800">Was sent sucessfully.👍</p> 
        </div>
    )
}
