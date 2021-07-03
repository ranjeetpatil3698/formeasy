import React,{useState,useEffect} from "react";
import axios from "axios";
import { useQuery ,useQueryClient } from "react-query";
import { Navbar } from "./Navbar";
import Formtable from "./Formtable";
import CreateForm from "./pages/CreateForm";
import { Link } from "react-router-dom";


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



  return (
    <div>
        <Navbar/>
        <Link to="/createform" className="cursor-pointer bg-purple-600 bg-opacity-75 text-white w-1/4 p-3 m-3 rounded-md">
         <span className="text-2xl">+</span> Create New Form
        </Link>
        {data?<Formtable data={data}/>:<div>&nbsp;</div>}

    </div>
  );
}
