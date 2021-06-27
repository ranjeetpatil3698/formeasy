import React from 'react'
import {useParams} from "react-router-dom";

export default function Response() {
    const {formurl}=useParams();
    return (
        <div>
            Responses <div>{formurl}</div>
        </div>
    )
}
