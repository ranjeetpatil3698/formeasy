import React from 'react'
import { Link } from "react-router-dom";

export const Formurl = ({url}) => {
    return (
        <div className="flex gap-2  m-2 border-2 border-purple-500 rounded ">
            <div className="border-r-2 border-purple-500 p-2">Shareable link</div>
            {/* <div className="p-2">{url}</div> */}
            <Link target="_blank" className="p-2" to={`/viewform/${url}`}>{`${process.env.REACT_APP_URL}/viewform/${url}`}</Link>
        </div>
    )
}
