import React from 'react'
import {Link} from 'react-router-dom'

export default function Errorpage() {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="text-3xl text-purple-800">
                404 no such page exists😢.
            </div>
            <Link to="/">
            <div className="text-3xl text-purple-800">
                Head Back To 👉
            </div>
            </Link>
        </div>
        
    )
}
