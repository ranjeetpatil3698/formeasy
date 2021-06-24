import axios from "axios";
import Cookies from 'js-cookie'

const instance = axios.create({
    withCredentials: true
  })
const accessToken=Cookies.get("jwt")
const authAxious=axios.create({
    headers:{
        Authorization:`Bearer ${accessToken}`
    }
})

const createrequest=async(url,method,data=null)=>{
    let response;
    
    if(method==='get'){
        try{
        response=await instance.get(url);
      
        }catch(err){
            return {err}
        } 
    }
    if(method==='post'){
        try{
        response=await authAxious.post(url,data);
    
        }catch(err){
            return {err}
        }
    }
    console.log({response});
    
}

export default createrequest;