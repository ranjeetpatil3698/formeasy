import React from 'react'


function ClientHeading({heading}) {
    
    return (
        <div className="text-5xl border-2 p-1 rounded border-purple-300 m-2">
            <label className="w-full outline-none ">{heading}</label>
        </div>
    )
}

export default ClientHeading;
