import React,{useState} from 'react'
import AddButton from "./buttons/AddButton"
import DoneButton from "./buttons/DoneButton"
import DropDown from '../components/DropDown';


function FormFooter() {
    const [dropVisible,setdropVisible]=useState(false);

    const handleChange=()=>{
        setdropVisible(!dropVisible)
    }

    return (
        <div>
            {dropVisible?<DropDown handleChange={handleChange} />:<p>&nbsp;</p>}
        <div className="flex flex-row gap-1 m-2 w-1/2">
            <AddButton handleChange={handleChange} />
            <DoneButton/>
        </div>
        </div>
    )
}

export default FormFooter
