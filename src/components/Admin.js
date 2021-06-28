import React,{useState,useEffect} from "react";
import axios from "axios";
import { useQuery ,useQueryClient } from "react-query";
import Cookies from "js-cookie";
import Formtable from "./Formtable";

export default function Admin() {
const [form,setform]=useState([]);
const queryClient = useQueryClient()
  const accessToken = Cookies.get("jwt");
  const authAxious = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  queryClient.removeQueries("currentform")

  const {  isError, isSuccess, error, data } = useQuery(
    "allresponses",
    () => authAxious.get(`${process.env.REACT_APP_API}/getallforms`)
  );

//   useEffect(()=>{
//       if(isSuccess ){
//         setform(data)
//         console.log(isSuccess,isError)
//       }
    
//   },[])

  return (
    <div>
        {data?<Formtable data={data}/>:<div>&nbsp;</div>}
    </div>
  );
}