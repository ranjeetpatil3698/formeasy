import axios from "axios";
import Cookies from 'js-cookie'
import {useState} from 'react'
//${process.env.REACT_APP_API}/getform/${url}
const instance = axios.create({
    baseURL:process.env.REACT_APP_API,
    withCredentials: true
  })
const accessToken=Cookies.get("jwt")
const authAxious=axios.create({
    baseURL:process.env.REACT_APP_API,
    headers:{
        Authorization:`Bearer ${accessToken}`
    }
})


const useAsync=(initialvalue=null)=>{
    const [loading,setloading]=useState(false);
    const [data,setdata]=useState(initialvalue);
    const [errors,seterrors]=useState(false);

    const makerequest=async(path,method,data=null)=>{
    try{
        setloading(true);
        let response;
    
    if(method==='get'){
        try{
        response=await instance.get(path);
      
        }catch(err){
            return {err}
        } 
    }
    if(method==='post'){
        try{
        response=await authAxious.post(path,data);
    
        }catch(err){
            return {err}
        }
    }
    // console.log({response});
    setdata(response.data);
    setloading(false);

    }catch(err){
            setloading(false);
            seterrors(err)
        }
    }

    return{
        loading,data,errors,makerequest
    }
    
}


export default useAsync;