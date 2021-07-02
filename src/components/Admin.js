import React,{useState,useEffect} from "react";
import axios from "axios";
import { useQuery ,useQueryClient } from "react-query";

import Formtable from "./Formtable";
import Logout from '../components/Logout';

export default function Admin() {
const [form,setform]=useState([]);
const queryClient = useQueryClient()
  // const accessToken = Cookies.get("jwt");
  // const authAxious = axios.create({
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });
  const instance = axios.create({
    withCredentials: true
  })
  queryClient.removeQueries("currentform")

  const {  isError, isSuccess, error, data } = useQuery(
    "allresponses",
    () => instance.get(`${process.env.REACT_APP_API}/getallforms`)
  );

  useEffect(()=>{
      // if(isSuccess ){
      //   setform(data)
      //   console.log(isSuccess,isError)
      // }
      if(data){
        console.log(data)
      }
    
  },[data])

  return (
    <div>
        {data?<Formtable data={data}/>:<div>&nbsp;</div>}

    </div>
  );
}
