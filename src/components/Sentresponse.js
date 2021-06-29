import React from 'react'

export default function Sentresponse({formname}) {
    return (
        <div>
        <div className="text-5xl  p-1 rounded  m-2">
            <label className="w-full outline-none ">{formname}</label>
        </div>
           <p className="text-3xl">Response sent sucessfully.</p> 
        </div>
    )
}
