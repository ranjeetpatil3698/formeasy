import React from 'react'
import {useHistory} from 'react-router-dom'
const DashboardButton = () => {
    const history=useHistory();

    const handleClick=()=>{
        history.push("/admin")
    }

    return (
        <div
        onClick={handleClick}
        className="cursor-pointer bg-purple-600 bg-opacity-75 text-white w-1/4 p-3 m-1 rounded-md"
        >
        Go To Dashboard
        </div>
    )
}

export default DashboardButton
