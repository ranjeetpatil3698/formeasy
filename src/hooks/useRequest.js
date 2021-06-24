import { useState } from "react";


const useRequest= (url,method,data=null)=>{
    const [isloading,setisloading]=useState(true);
    const [iserror,setiserror]=useState(false);
    const [responsedata,setresponsedata]=useState(null)
    
    
    return{
        isloading,iserror,responsedata,createrequest
    }
}

export default useRequest;